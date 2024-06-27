import { convertImage } from "@server/utils/optimizationPack";
import { fileToBuffer } from "@server/utils/transformers";
import { createResponse } from "@server/utils/createResponse";
import { routeWrapper } from "@server/utils/wrapHandler";
import {
  ConverterType,
  ConverterSchema,
} from "@server/schemas/converterSchema";
import { fileSchemaConstructor } from "@server/utils/schemaConstructors";

async function formatConverter({
  file,
  settings,
}: {
  file: File;
  settings: ConverterType;
}) {
  const inputBuffer = await fileToBuffer(file);
  const outputBuffer = await convertImage(inputBuffer, settings);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${settings.targetFormat}`,
    "content-disposition": `attachment; filename="output.${settings.targetFormat}"`,
  });
}

export const POST = routeWrapper(
  formatConverter,
  fileSchemaConstructor(ConverterSchema)
);
