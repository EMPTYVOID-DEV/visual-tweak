import { z } from "zod";

export const BlurSchema = z.object({
  sigma: z
    .number({ message: "Sigma must be a number" })
    .min(1, { message: "Minimum value for sigma is 1" })
    .max(1000, { message: "Maximum value for sigma is 1000" }),
});

export type BlurType = z.infer<typeof BlurSchema>;
