"use client";

import { Option } from "fp-ts/lib/Option";
import React, { FormEvent } from "react";

type Props = {
  name: Option<string>;
  onChange: (file: File) => void;
  onDrop: (file: File) => void;
  accept: string;
};

const UploadUI = ({ onChange, onDrop, accept, name }: Props) => {
  const dropHandler = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    const dropFile = e.dataTransfer?.files[0];
    if (dropFile) {
      onDrop(dropFile);
    }
  };

  const dragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  function onFileUpload(e: FormEvent<HTMLInputElement>) {
    if (e.currentTarget.files && e.currentTarget.files.length > 0) {
      onChange(e.currentTarget.files[0]);
    }
  }

  return (
    <>
      <input
        accept={accept}
        type="file"
        id="upload"
        className="hidden"
        onChange={onFileUpload}
      />
      <label
        htmlFor="upload"
        onDragOver={dragOver}
        onDrop={dropHandler}
        className="w-full flex flex-col justify-center items-center gap-2 bg-transparent border-2 border-dashed border-foregroundColor rounded-bdr px-1 py-6 cursor-pointer"
      >
        <span className="text-foregroundColor text-[--body] font-[--bodyFont]">
          Drop your files here , or
          <span className="text-primaryColor"> click to browse</span>
        </span>
        {name._tag == "Some" && (
          <span className="text-primaryColor font-semibold line-clamp-1 ">
            {name.value}
          </span>
        )}

        {name._tag == "None" && (
          <span className="text-foregroundColor/70 text-center text-balance font-semibold">
            The file formats you can use are limited to JPEG, JPG, PNG, WebP,
            TIFF, and AVIF <br /> Maximum file size is 5 MB.
          </span>
        )}
      </label>
    </>
  );
};

export default UploadUI;
