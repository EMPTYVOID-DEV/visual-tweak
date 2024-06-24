import sharp from "sharp";
import { conversionSettings } from "../const.server";
import { AcceptedFormats } from "@shared/types.shared";

export async function convertImage(
  inputBuffer: Buffer,
  targetFormat: AcceptedFormats
) {
  const sharpInstance = sharp(inputBuffer, { failOn: "none" });

  switch (targetFormat) {
    case "jpeg":
    case "jpg":
      return sharpInstance.jpeg(conversionSettings.jpeg).toBuffer();
    case "png":
      return sharpInstance.png(conversionSettings.png).toBuffer();
    case "webp":
      return sharpInstance.webp(conversionSettings.webp).toBuffer();
    case "avif":
      return sharpInstance.avif(conversionSettings.avif).toBuffer();
    case "tiff":
      return sharpInstance.tiff(conversionSettings.tiff).toBuffer();
  }
}
