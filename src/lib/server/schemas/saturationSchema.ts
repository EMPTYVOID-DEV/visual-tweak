import { z } from "zod";

export const SaturationSchema = z.object({
  factor: z.number({ message: "Factor must be a number" }),
});

export type SaturationType = z.infer<typeof SaturationSchema>;
