import { AcceptedFormats } from "@shared/types.shared";
import { convertImage } from "@server/utils/converter";
import { fileToBuffer } from "@server/utils/fileToBuffer";
import { createResponse } from "@server/utils/createResponse";
import { routeWrapper } from "@server/utils/wrapHandler";
import { converterSchema } from "@shared/schemas/converterSchema";

async function formatConverter({
  file,
  targetFormat,
}: {
  file: File;
  targetFormat: AcceptedFormats;
}) {
  const inputBuffer = await fileToBuffer(file);
  const outputBuffer = await convertImage(inputBuffer, targetFormat);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${targetFormat}`,
    "content-disposition": `attachment; filename="output.${targetFormat}"`,
  });
}

export const POST = routeWrapper(formatConverter, converterSchema);
