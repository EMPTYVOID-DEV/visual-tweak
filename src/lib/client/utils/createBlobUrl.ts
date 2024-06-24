export function createBlobUrl(blob: Blob) {
  return URL.createObjectURL(blob);
}
