import { z } from "zod";

export const ResizeSchema = z.object({
  width: z
    .number({ message: "width must be a number" })
    .min(50, { message: "Minimum width is 50px" }),
  height: z
    .number({ message: "height must be a number" })
    .min(50, { message: "Minimum height is 50px" }),
  fit: z.enum(["cover", "fill", "contain"], {
    message: "Fit setting can only set to either cover , fill or contain",
  }),
  position: z.enum(
    [
      "top",
      "right top",
      "right",
      "right bottom",
      "bottom",
      "left bottom",
      "left",
      "left top",
      "center",
    ],
    {
      message:
        "position can only be top, right top, right, right bottom, bottom, left bottom, left, left top or center",
    }
  ),
});

export type ResizeType = z.infer<typeof ResizeSchema>;
