import { AcceptedFormats } from "@/lib/shared/types.shared";
import sharp from "sharp";
import { CompressionType } from "../schemas/compressionSchema";

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
