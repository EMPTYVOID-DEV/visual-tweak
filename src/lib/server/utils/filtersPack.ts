import sharp from "sharp";
import { SaturationType } from "../schemas/saturationSchema";
import { BlurType } from "../schemas/blurSchema";
import { HueType } from "../schemas/hueSchema";

export async function applySepia(inputBuffer: Buffer) {
  return sharp(inputBuffer, { failOn: "none" })
    .modulate({
      brightness: 1 + 0.1,
      saturation: 0.7,
      hue: 30,
    })
    .tint({ r: 112, g: 66, b: 20 })
    .gamma(1 + 0.2)
    .toBuffer();
}

export async function adjustSaturation(
  inputBuffer: Buffer,
  { factor }: SaturationType
) {
  return sharp(inputBuffer, { failOn: "none" })
    .modulate({ saturation: factor })
    .toBuffer();
}

export async function applyGrayscale(inputBuffer: Buffer) {
  return sharp(inputBuffer, { failOn: "none" }).grayscale().toBuffer();
}

export async function applyBlur(inputBuffer: Buffer, { sigma }: BlurType) {
  return sharp(inputBuffer, { failOn: "none" }).blur(sigma).toBuffer();
}

export async function applyHue(inputBuffer: Buffer, { degrees }: HueType) {
  return sharp(inputBuffer, { failOn: "none" })
    .modulate({ hue: degrees })
    .toBuffer();
}
