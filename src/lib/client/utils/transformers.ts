import { Option, none, some } from "fp-ts/lib/Option";

export function arrayBufferToJSON<A>(buffer: ArrayBuffer): Option<A> {
  const decoder = new TextDecoder("utf-8");
  const jsonString = decoder.decode(buffer);

  try {
    const jsonObject = JSON.parse(jsonString);
    return some(jsonObject);
  } catch (error) {
    return none;
  }
}

export function recordToFormData(data: Record<string, string | Blob>) {
  const fd = new FormData();
  Object.entries(data).forEach((el) => fd.append(el[0], el[1]));
  return fd;
}
