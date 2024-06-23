import { AcceptedFormats } from "@shared/types.shared";
import { convertImage } from "@server/utils/converter";
import { toBuffer } from "@server/utils/toBuffer";
import { createResponse } from "@server/utils/createResponse";
import { routeWrapper } from "@server/utils/wrapHandler";
import { converterSchema } from "@shared/schemas/converterSchema";

export async function formatConverter({
  file,
  targetFormat,
}: {
  file: File;
  targetFormat: AcceptedFormats;
}) {
  const inputBuffer = await toBuffer(file);
  const outputBuffer = await convertImage(inputBuffer, targetFormat);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${targetFormat}`,
    "content-disposition": `attachment; filename="output.${targetFormat}"`,
  });
}

export const POST = routeWrapper(formatConverter, converterSchema);
