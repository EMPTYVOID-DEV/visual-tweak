import { z } from "zod";

export const BlurSchema = z.object({
  opacity: z
    .number({ message: "Ppacity must be a number" })
    .min(0, { message: "Minimum value for opacity is 0" })
    .max(1, { message: "Maximum value for opacity is 1" }),
});

export type BlurType = z.infer<typeof BlurSchema>;
