import { validator, serializeZodError } from "@shared/utils/validator";
import { NextResponse } from "next/server";
import { ZodSchema } from "zod";

type Handler<A> = (data: A) => Promise<Response>;

export function routeWrapper<A extends Record<string, unknown>>(
  handler: Handler<A>,
  schema: ZodSchema
) {
  return async function POST(req: Request) {
    try {
      const fd = await req.formData();
      const data = transformFormData(fd);
      const eitherData = validator<A>(data, schema);
      if (eitherData._tag == "Left")
        return NextResponse.json(serializeZodError(eitherData.left), {
          status: 400,
        });
      return await handler(eitherData.right);
    } catch (error) {
      console.log(error);
      return new Response("Service Unavailable", { status: 500 });
    }
  };
}

function transformFormData(fd: FormData) {
  const data: Record<string, unknown> = {};
  fd.forEach((value, key) => (data[key] = value.valueOf()));
  return data;
}
