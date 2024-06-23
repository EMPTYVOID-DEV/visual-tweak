import sharp from "sharp";
import { conversionOptions } from "../const.server";
import { AcceptedFormats } from "@shared/types.shared";

export async function convertImage(
  inputBuffer: Buffer,
  targetFormat: AcceptedFormats
) {
  targetFormat = targetFormat == "jpg" ? "jpeg" : targetFormat;
  const sharpInstance = sharp(inputBuffer, { failOn: "none" });
  const converter = sharpInstance[targetFormat];
  const options = conversionOptions[targetFormat];
  return converter(options).toBuffer();
}
