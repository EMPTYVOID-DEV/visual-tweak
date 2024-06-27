import { z } from "zod";

export const ResizeSchema = z.object({
  width: z
    .number({ message: "width must be a number" })
    .min(50, { message: "Minimum width is 50px" })
    .max(4000, { message: "Maximum width is 4000px" }),
  height: z
    .number({ message: "height must be a number" })
    .min(50, { message: "Minimum height is 50px" })
    .max(4000, { message: "Maximum height is 4000px" }),
});

export type ResizeType = z.infer<typeof ResizeSchema>;
