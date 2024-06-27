import { routeWrapper } from "@server/utils/wrapHandler";
import { fileToBuffer } from "@server/utils/transformers";
import { AcceptedFormats } from "@shared/types.shared";
import { createResponse } from "@server/utils/createResponse";
import { EmptySettingsSchema } from "@server/schemas/emptySettingsSchema";
import { fileSchemaConstructor } from "@server/utils/schemaConstructors";
import { applyGrayscale } from "@server/utils/filtersPack";

async function imageGrayscale({ file }: { file: File }) {
  const inputBuffer = await fileToBuffer(file);
  const format = file.type.split("/")[1] as AcceptedFormats;
  const outputBuffer = await applyGrayscale(inputBuffer);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${format}`,
    "content-disposition": `attachment; filename="output.${format}"`,
  });
}

export const POST = routeWrapper(
  imageGrayscale,
  fileSchemaConstructor(EmptySettingsSchema)
);
