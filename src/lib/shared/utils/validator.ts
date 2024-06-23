import { ZodError, ZodSchema } from "zod";
import { Either, left, right } from "fp-ts/Either";

export function validator<A>(
  fd: Record<string, unknown>,
  schema: ZodSchema
): Either<ZodError, A> {
  const result = schema.safeParse(fd);
  return result.success ? right(result.data) : left(result.error);
}

export function serializeZodError(error: ZodError) {
  return error.errors.map((e) => e.message);
}
