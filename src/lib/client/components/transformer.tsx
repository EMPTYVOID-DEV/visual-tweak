"use client";
import Upload from "@components/upload";
import { useFile } from "@hooks/useFile";
import { useState } from "react";
import Button from "@components/button";
import { none, some } from "fp-ts/lib/Option";
import { ArrowRightCircle, Download } from "lucide-react";
import { acceptedTypes, sizeLimit } from "@shared/const.shared";
import { Post } from "@client/utils/post";
import { createFileUrl } from "@client/utils/createFileUrl";
import { ToastContainer, toast } from "react-toastify";
import LoadingIcon from "@client/extraIcons/loadingIcon";
import "react-toastify/dist/ReactToastify.css";
import Select from "./select";
import { operations } from "../const.client";
import { Operations, SelectOption } from "../types.client";
import { SingleValue } from "react-select";
import { useOperation } from "@hooks/useOperation";
import { validateSize, validateType } from "@/lib/shared/utils";

function Transformer() {
  const { file, url, setFile, setUrl } = useFile();
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [format, setFormat] = useState<string>("");
  const { operation, setOperation, settings, SettingsComponent } =
    useOperation();

  /**
   *  This function will call post function to make the operation
   *  It need to seturl and format after success
   *  And show toast in case error
   *  also need to reset the file we operate on and set status back to idle
   */
  async function Operate() {
    if (file._tag == "None") return;
    setStatus("loading");
    const result = await Post(`/api/${operation.value}`, {
      file: file.value,
      settings: JSON.stringify(settings),
    });
    if (result._tag == "Right") {
      const format = result.right.type.split("/")[1];
      const url = some(createFileUrl(result.right));
      setUrl(url);
      setFormat(format);
    } else result.left.forEach((err) => toast.error(err));
    setFile(none);
    setStatus("idle");
  }

  /**
   * This function need to set operation and reset the url after changing operation
   */
  function onOperationChange(
    newOperation: SingleValue<SelectOption<Operations, string>>
  ) {
    if (!newOperation) return;
    setOperation(newOperation);
    setUrl(none);
  }

  /**
   *  This needs to validate and set the file as well as reset the url.
   */

  function onFileUpload(file: File) {
    if (!validateSize(file.size))
      return toast.error(
        `File size should be less or equal to ${sizeLimit}mb and not zero`
      );
    if (!validateType(file.type))
      return toast.error(
        "File should an image with these formats jpeg , jpg , png , webp , avif or tiff"
      );
    setFile(some(file));
    setUrl(none);
  }

  return (
    <section className="w-[80%] md:w-[100%] justify-center flex flex-col gap-6 ">
      <Select
        label="Select Operation"
        defaultValue={operations[0]}
        options={operations}
        onChange={onOperationChange}
      />
      <Upload
        name={file._tag == "Some" ? some(file.value.name) : none}
        accept={acceptedTypes.join(",")}
        onChange={onFileUpload}
        onDrop={onFileUpload}
      />
      <SettingsComponent />
      {file._tag == "Some" && (
        <Button
          variant={status == "idle" ? "primary" : "disabled"}
          onClick={Operate}
        >
          <div className="flex gap-1 items-center justify-between">
            <span className="font-semibold text-backgroundColor">Operate</span>
            {status == "idle" ? <ArrowRightCircle /> : <LoadingIcon />}
          </div>
        </Button>
      )}
      {url._tag == "Some" && (
        <Button>
          <a
            href={url.value}
            download={`result.${format}`}
            className="text-backgroundColor font-semibold"
          >
            <div className="flex gap-1 items-center justify-between">
              <span className="font-semibold text-backgroundColor">
                Download Result of {operation.label}
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

export default Transformer;
