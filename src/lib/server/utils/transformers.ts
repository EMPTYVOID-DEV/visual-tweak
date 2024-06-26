export async function fileToBuffer(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

export function transformFormData(fd: FormData) {
  const data: Record<string, unknown> = {};
  fd.forEach((value, key) => (data[key] = value.valueOf()));
  return data;
}
