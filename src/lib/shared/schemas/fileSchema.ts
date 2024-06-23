import { z } from "zod";
import { acceptedTypes, sizeLimit } from "../const.shared";

function validateSize(sizeInBytes: number) {
  const sizeInMb = sizeInBytes / 1000000;
  if (sizeInMb > sizeLimit) return false;
  return true;
}

function validateType(type: string) {
  return acceptedTypes.includes(type);
}

export const fileSchema = z
  .any()
  .refine((file: File) => file.size !== 0, { message: "File is required" })
  .refine((file: File) => validateSize(file.size), {
    message: `File size should be less or equal to ${sizeLimit}mb`,
  })
  .refine((file: File) => validateType(file.type), {
    message:
      "File should an image with these formats jpeg , jpg , png , webp , avif or tiff",
  });
