import { z } from "zod";

export const CompressionSchema = z.object({
  quality: z
    .number({ message: "Quality need to be a number" })
    .min(1, { message: "Minimum quality value is 1." })
    .max(100, { message: "Maximum quality value is 100." }),
});

export type CompressionType = z.infer<typeof CompressionSchema>;
