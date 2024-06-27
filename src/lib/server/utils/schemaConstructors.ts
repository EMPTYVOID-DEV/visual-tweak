import { ZodSchema, z } from "zod";
import { FileSchema } from "../schemas/fileSchema";

export function fileSchemaConstructor(baseSchema: ZodSchema) {
  return z.object({
    file: FileSchema,
    settings: z
      .string()
      .transform((str, ctx) => {
        try {
          return JSON.parse(str);
        } catch (e) {
          ctx.addIssue({ code: "custom", message: "Invalid JSON" });
          return z.NEVER;
        }
      })
      .pipe(baseSchema),
  });
}
