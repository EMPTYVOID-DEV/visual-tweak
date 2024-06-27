import { routeWrapper } from "@server/utils/wrapHandler";
import { fileToBuffer } from "@server/utils/transformers";
import { AcceptedFormats } from "@shared/types.shared";
import { createResponse } from "@server/utils/createResponse";
import { fileSchemaConstructor } from "@server/utils/schemaConstructors";
import { applyHue } from "@server/utils/filtersPack";
import { HueSchema, HueType } from "@/lib/server/schemas/hueSchema";

async function imageHue({ file, settings }: { file: File; settings: HueType }) {
  const inputBuffer = await fileToBuffer(file);
  const format = file.type.split("/")[1] as AcceptedFormats;
  const outputBuffer = await applyHue(inputBuffer, settings);
  return createResponse(outputBuffer, 200, {
    "content-type": `image/${format}`,
    "content-disposition": `attachment; filename="output.${format}"`,
  });
}

export const POST = routeWrapper(imageHue, fileSchemaConstructor(HueSchema));
