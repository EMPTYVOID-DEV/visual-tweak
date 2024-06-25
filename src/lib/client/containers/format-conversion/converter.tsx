"use client";
import Upload from "@components/upload";
import { useFile } from "@hooks/useFile";
import { useState } from "react";
import { AcceptedFormats } from "@shared/types.shared";
import { converterOptions } from "@client/const.client";
import Button from "@components/button";
import { none, some } from "fp-ts/lib/Option";
import { ArrowRightCircle, Download } from "lucide-react";
import { acceptedTypes } from "@shared/const.shared";
import Select from "@components/select";
import { Post } from "@client/utils/post";
import { createBlobUrl } from "@client/utils/createBlobUrl";
import { ToastContainer, toast } from "react-toastify";
import LoadingIcon from "@client/icons/loadingIcon";
import "react-toastify/dist/ReactToastify.css";

function Converter() {
  const { file, url, setFile, setUrl } = useFile();
  const [target, setTarget] = useState<AcceptedFormats>("png");
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  async function convert() {
    if (file._tag == "None") return;
    setStatus("loading");
    const result = await Post("/api/format-conversion", {
      file: file.value,
      targetFormat: target,
    });
    if (result._tag == "Right") setUrl(some(createBlobUrl(result.right)));
    else result.left.forEach((err) => toast.error(err));
    setFile(none);
    setStatus("idle");
  }

  function shortenFileName(filename: string) {
    const [name, ext] = filename.split(".");
    return `${name.substring(0, 8)}...${ext}`;
  }

  return (
    <section className="flex w-full justify-center  md:flex-col md:items-stretch  items-end gap-6">
      <Select
        label="Select target format"
        defaultValue={{ value: target, label: target }}
        options={converterOptions}
        onChange={(newVal) => newVal?.value && setTarget(newVal.value)}
      />
      <Upload
        name={file._tag == "Some" ? shortenFileName(file.value.name) : ""}
        accept={acceptedTypes.join(",")}
        onChange={(e) => {
          if (e.currentTarget.files && e.currentTarget.files.length > 0) {
            setFile(some(e.currentTarget.files[0]));
            setUrl(none);
          }
        }}
      />
      {file._tag == "Some" && (
        <Button
          variant={status == "idle" ? "primary" : "disabled"}
          onClick={convert}
        >
          <div className="flex gap-1 items-center justify-between">
            <span className="font-semibold text-backgroundColor">Convert</span>
            {status == "idle" ? <ArrowRightCircle /> : <LoadingIcon />}
          </div>
        </Button>
      )}
      {url._tag == "Some" && (
        <Button>
          <a
            href={url.value}
            download={`result.${target}`}
            className="text-backgroundColor font-semibold"
          >
            <div className="flex gap-1 items-center justify-between">
              <span className="font-semibold text-backgroundColor">
                Download Result
              </span>
              <Download />
            </div>
          </a>
        </Button>
      )}
      <ToastContainer position="bottom-right" />
    </section>
  );
}

export default Converter;
