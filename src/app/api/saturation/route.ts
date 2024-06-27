import { routeWrapper } from "@server/utils/wrapHandler";
import { fileToBuffer } from "@server/utils/transformers";
import { AcceptedFormats } from "@shared/types.shared";
import { createResponse } from "@server/utils/createResponse";
import { fileSchemaConstructor } from "@server/utils/schemaConstructors";
import { adjustSaturation } from "@server/utils/filtersPack";
import {
  SaturationSchema,
  SaturationType,
} from "@server/schemas/saturationSchema";

async function imageSaturation({
  file,
  settings,
}: {
  file: File;
  settings: SaturationType;
}) {
  const inputBuffer = await fileToBuffer(file);
  const format = file.type.split("/")[1] as AcceptedFormats;
  const outputBuffer = await adjustSaturation(inputBuffer, settings);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${format}`,
    "content-disposition": `attachment; filename="output.${format}"`,
  });
}

export const POST = routeWrapper(
  imageSaturation,
  fileSchemaConstructor(SaturationSchema)
);
