import { z } from "zod";
import { acceptedTypes, sizeLimit } from "../const.shared";

function validateSize(sizeInBytes: number) {
  const sizeInMb = sizeInBytes / 1000000;
  if (sizeInMb > sizeLimit || sizeInBytes == 0) return false;
  return true;
}

function validateType(type: string) {
  return acceptedTypes.includes(type);
}

export const fileSchema = z
  .instanceof(File, { message: "File should be a file" })
  .refine((file: File) => validateSize(file.size), {
    message: `File size should be less or equal to ${sizeLimit}mb and not zero`,
  })
  .refine((file: File) => validateType(file.type), {
    message:
      "File should an image with these formats jpeg , jpg , png , webp , avif or tiff",
  });
