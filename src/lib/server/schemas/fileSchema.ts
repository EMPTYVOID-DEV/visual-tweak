import { z } from "zod";
import { sizeLimit } from "@shared/const.shared";
import { validateSize, validateType } from "@shared/utils";

export const FileSchema = z
  .instanceof(File, { message: "file is required" })
  .refine((file: File) => validateSize(file.size), {
    message: `File size should be less or equal to ${sizeLimit}mb and not zero`,
  })
  .refine((file: File) => validateType(file.type), {
    message:
      "File should an image with these formats jpeg , jpg , png , webp , avif or tiff",
  });
