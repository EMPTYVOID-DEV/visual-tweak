import { z } from "zod";
import { fileSchema } from "./fileSchema";

export const converterSchema = z.object({
  file: fileSchema,
  targetFormat: z.enum(["jpg", "jpeg", "png", "avif", "tiff", "jpg", "webp"], {
    message:
      "The target format is limited to jpeg , jpg , png , webp , avif or tiff",
  }),
});
