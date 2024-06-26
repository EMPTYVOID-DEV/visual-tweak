import { AcceptedFormats } from "@shared/types.shared";
import sharp from "sharp";
import { ResizeType } from "../schemas/resizeSchema";

export async function resizeImage(
  inputBuffer: Buffer,
  format: AcceptedFormats,
  { fit, height, position, width }: ResizeType
) {
  let sharpInstance = sharp(inputBuffer, { failOn: "none" });

  switch (format) {
    case "jpeg":
    case "jpg":
      return sharpInstance
        .jpeg()
        .resize(width, height, { fit, position })
        .toBuffer();
    case "png":
      return sharpInstance
        .png()
        .resize(width, height, { fit, position })
        .toBuffer();
    case "webp":
      return sharpInstance
        .webp()
        .resize(width, height, { fit, position })
        .toBuffer();
    case "avif":
      return sharpInstance
        .avif()
        .resize(width, height, { fit, position })
        .toBuffer();
    case "tiff":
      return sharpInstance
        .tiff()
        .resize(width, height, { fit, position })
        .toBuffer();
  }
}
