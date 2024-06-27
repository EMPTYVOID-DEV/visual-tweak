import { z } from "zod";

export const HueSchema = z.object({
  degrees: z
    .number({ message: "Degrees must be a number" })
    .min(0, { message: "Minimum value for degrees is 0" })
    .max(360, { message: "Maximum value for degrees is 360" }),
});

export type HueType = z.infer<typeof HueSchema>;
