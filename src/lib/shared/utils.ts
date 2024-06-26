import { sizeLimit, acceptedTypes } from "./const.shared";

export function validateSize(sizeInBytes: number) {
  const sizeInMb = sizeInBytes / 1000000;
  if (sizeInMb > sizeLimit || sizeInBytes == 0) return false;
  return true;
}

export function validateType(type: string) {
  return acceptedTypes.includes(type);
}
