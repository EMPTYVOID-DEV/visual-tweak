import { Option, none } from "fp-ts/lib/Option";
import { useState } from "react";

export function useFile() {
  const [file, setFile] = useState<Option<File>>(none);
  const [url, setUrl] = useState<Option<string>>(none);
  return { url, file, setUrl, setFile };
}
