"use client";

import { useRef } from "react";

function FormatConversion() {
  const ref = useRef<HTMLInputElement>(null);
  function download() {
    const files = ref.current?.files;
    if (files) {
      const data = new FormData();
      data.append("file", files[0]);
      fetch("/api/format-conversion", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((txt) => console.log(txt));
    }
  }
  return (
    <>
      <input type="file" name="file" ref={ref} />
      <button onClick={() => download()}>downalod</button>
    </>
  );
}

export default FormatConversion;
