import sharp from "sharp";
import { conversionOptions } from "../const.server";
import { AcceptedFormats } from "@shared/types.shared";

export async function convertImage(
  inputBuffer: Buffer,
  targetFormat: AcceptedFormats
) {
  const sharpInstance = sharp(inputBuffer, { failOn: "none" });

  switch (targetFormat) {
    case "jpeg":
    case "jpg":
      return sharpInstance.jpeg(conversionOptions.jpeg).toBuffer();
    case "png":
      return sharpInstance.png(conversionOptions.png).toBuffer();
    case "webp":
      return sharpInstance.webp(conversionOptions.webp).toBuffer();
    case "avif":
      return sharpInstance.avif(conversionOptions.avif).toBuffer();
    case "tiff":
      return sharpInstance.tiff(conversionOptions.tiff).toBuffer();
  }
}
