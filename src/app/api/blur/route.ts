import { routeWrapper } from "@server/utils/wrapHandler";
import { fileToBuffer } from "@server/utils/transformers";
import { AcceptedFormats } from "@shared/types.shared";
import { createResponse } from "@server/utils/createResponse";
import { fileSchemaConstructor } from "@server/utils/schemaConstructors";
import { applyBlur } from "@server/utils/filtersPack";
import { BlurSchema, BlurType } from "@server/schemas/blurSchema";

async function imageBlur({
  file,
  settings,
}: {
  file: File;
  settings: BlurType;
}) {
  const inputBuffer = await fileToBuffer(file);
  const format = file.type.split("/")[1] as AcceptedFormats;
  const outputBuffer = await applyBlur(inputBuffer, settings);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${format}`,
    "content-disposition": `attachment; filename="output.${format}"`,
  });
}

export const POST = routeWrapper(imageBlur, fileSchemaConstructor(BlurSchema));
