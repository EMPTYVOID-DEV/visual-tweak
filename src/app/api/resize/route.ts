import { routeWrapper } from "@server/utils/wrapHandler";
import { fileToBuffer } from "@server/utils/transformers";
import { resizeImage } from "@server/utils/optimizationPack";
import { AcceptedFormats } from "@shared/types.shared";
import { createResponse } from "@server/utils/createResponse";
import { ResizeSchema, ResizeType } from "@server/schemas/resizeSchema";
import { fileSchemaConstructor } from "@server/utils/schemaConstructors";

async function imageResizer({
  file,
  settings,
}: {
  file: File;
  settings: ResizeType;
}) {
  const inputBuffer = await fileToBuffer(file);
  const format = file.type.split("/")[1] as AcceptedFormats;
  const outputBuffer = await resizeImage(inputBuffer, format, settings);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${format}`,
    "content-disposition": `attachment; filename="output.${format}"`,
  });
}

export const POST = routeWrapper(
  imageResizer,
  fileSchemaConstructor(ResizeSchema)
);
