import { z } from "zod";

export const ConverterSchema = z.object({
  targetFormat: z.enum(["jpg", "jpeg", "png", "avif", "tiff", "jpg", "webp"], {
    message:
      "The target format is limited to jpeg , jpg , png , webp , avif or tiff",
  }),
});

export type ConverterType = z.infer<typeof ConverterSchema>;
