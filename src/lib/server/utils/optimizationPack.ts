import sharp from "sharp";
import { AcceptedFormats } from "@/lib/shared/types.shared";
import { CompressionType } from "../schemas/compressionSchema";
import { sharpSettings } from "../const.server";
import { ConverterType } from "../schemas/converterSchema";
import { ResizeType } from "../schemas/resizeSchema";

export async function compressImage(
  inputBuffer: Buffer,
  format: AcceptedFormats,
  { quality }: CompressionType
) {
  let sharpInstance = sharp(inputBuffer, { failOn: "none" });

  switch (format) {
    case "jpeg":
    case "jpg":
      return sharpInstance.jpeg({ quality }).toBuffer();
    case "png":
      return sharpInstance.png({ quality }).toBuffer();
    case "webp":
      return sharpInstance.webp({ quality }).toBuffer();
    case "avif":
      return sharpInstance.avif({ quality }).toBuffer();
    case "tiff":
      return sharpInstance.tiff({ quality }).toBuffer();
  }
}

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

export async function resizeImage(
  inputBuffer: Buffer,
  { height, width }: ResizeType
) {
  return sharp(inputBuffer, { failOn: "none" })
    .resize(width, height, { fit: "fill" })
    .toBuffer();
}
