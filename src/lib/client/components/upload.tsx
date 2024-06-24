"use client";

import { HardDriveUpload } from "lucide-react";
import { cn } from "../utils";
import { FormEventHandler } from "react";

type Props = {
  name?: string;
  label?: string;
  onChange: FormEventHandler<HTMLInputElement>;
  ref?: React.RefObject<HTMLInputElement>;
  accept?: string;
} & React.HTMLAttributes<HTMLInputElement>;

function Upload({
  name = "",
  className,
  ref,
  label = "Upload File to transform",
  onChange,
  ...props
}: Props) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-small font-semibold text-foregroundColor">
        {label}
      </span>
      <input
        type="file"
        name="file"
        id="file"
        className="hidden"
        ref={ref}
        onChange={onChange}
        {...props}
      />
      <label
        htmlFor="file"
        className={cn(
          "flex items-center  justify-between gap-2 bg-primaryColor px-6 py-2 rounded-bdr cursor-pointer ",
          className
        )}
      >
        <span className="text-backgroundColor font-semibold">Upload File</span>
        <span className="text-backgroundColor empty:hidden line-clamp-1">
          {name}
        </span>
        <HardDriveUpload />
      </label>
    </div>
  );
}

export default Upload;
