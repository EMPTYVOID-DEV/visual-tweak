import { validator, serializeZodError } from "@server/utils/validator";
import { NextResponse } from "next/server";
import { ZodSchema } from "zod";
import { transformFormData } from "./transformers";
import { constructSchema } from "./constructSchema";

type Handler<A> = (data: A) => Promise<Response>;

export function routeWrapper<A extends Record<string, unknown>>(
  handler: Handler<A>,
  schema: ZodSchema
) {
  return async function POST(req: Request) {
    try {
      const newSchema = constructSchema(schema);
      const fd = await req.formData();
      const data = transformFormData(fd);
      const eitherData = validator<A>(data, newSchema);
      if (eitherData._tag == "Left")
        return NextResponse.json(serializeZodError(eitherData.left), {
          status: 400,
        });
      return await handler(eitherData.right);
    } catch (error) {
      const message = (error as Error)?.message;
      return new Response(message || "Service Unavailable", {
        status: 500,
      });
    }
  };
}
