import { serializeZodError, validator } from "@shared/utils/validator";
import { converterSchema } from "@shared/schemas/converterSchema";
import { NextResponse } from "next/server";
import { AcceptedFormats } from "@shared/types.shared";
import { convertImage } from "@server/utils/converter";
import { toBuffer } from "@server/utils/toBuffer";
import { createResponse } from "@server/utils/createResponse";

export async function POST(req: Request) {
  const fd = await req.formData();
  const file = fd.get("file")?.valueOf() as File;
  const targetFormat = fd.get("targetFormat")?.toString();
  const eitherData = validator<{ file: File; targetFormat: AcceptedFormats }>(
    { file, targetFormat },
    converterSchema
  );
  if (eitherData._tag == "Left")
    return NextResponse.json(serializeZodError(eitherData.left), {
      status: 400,
    });
  const inputBuffer = await toBuffer(eitherData.right.file);
  const outputBuffer = await convertImage(
    inputBuffer,
    eitherData.right.targetFormat
  );
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${targetFormat}`,
  });
}
