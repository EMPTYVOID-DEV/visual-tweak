import sharp from "sharp";
import { sharpSettings } from "../const.server";
import { ConverterType } from "../schemas/converterSchema";

export async function convertImage(
  inputBuffer: Buffer,
  { targetFormat }: ConverterType
) {
  const sharpInstance = sharp(inputBuffer, { failOn: "none" });

  switch (targetFormat) {
    case "jpeg":
    case "jpg":
      return sharpInstance.jpeg(sharpSettings.jpeg).toBuffer();
    case "png":
      return sharpInstance.png(sharpSettings.png).toBuffer();
    case "webp":
      return sharpInstance.webp(sharpSettings.webp).toBuffer();
    case "avif":
      return sharpInstance.avif(sharpSettings.avif).toBuffer();
    case "tiff":
      return sharpInstance.tiff(sharpSettings.tiff).toBuffer();
  }
}
