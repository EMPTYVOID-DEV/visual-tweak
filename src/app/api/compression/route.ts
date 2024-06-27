import {
  CompressionType,
  CompressionSchema,
} from "@server/schemas/compressionSchema";
import { routeWrapper } from "@server/utils/wrapHandler";
import { fileToBuffer } from "@server/utils/transformers";
import { compressImage } from "@server/utils/optimizationPack";
import { AcceptedFormats } from "@shared/types.shared";
import { createResponse } from "@server/utils/createResponse";
import { fileSchemaConstructor } from "@server/utils/schemaConstructors";

async function imageCompresser({
  file,
  settings,
}: {
  file: File;
  settings: CompressionType;
}) {
  const inputBuffer = await fileToBuffer(file);
  const format = file.type.split("/")[1] as AcceptedFormats;
  const outputBuffer = await compressImage(inputBuffer, format, settings);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${format}`,
    "content-disposition": `attachment; filename="output.${format}"`,
  });
}

export const POST = routeWrapper(
  imageCompresser,
  fileSchemaConstructor(CompressionSchema)
);
