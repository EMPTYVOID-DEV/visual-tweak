import { AcceptedFormats } from "../shared/types.shared";
import { Operation, SelectOption } from "./types.client";

export const operations: Operation[] = [
  {
    title: "Format Conversion",
    description: "Change image file formats (JPG, PNG, SVG, WBPB).",
    href: "format-conversion",
  },
  {
    title: "Resize",
    description:
      "Adjust image dimensions by specifying pixel values or percentages.",
    href: "resize",
  },
  {
    title: "Enhancement",
    description:
      "Improve image quality by adjusting brightness, contrast, and sharpness.",
    href: "enhancement",
  },
  {
    title: "Compression",
    description:
      "Reduce file size, often with some quality loss, for web use or storage.",
    href: "compression",
  },
  {
    title: "Crop",
    description:
      "Select and keep a specific portion of an image, removing the rest.",
    href: "crop",
  },
  {
    title: "Remove Background",
    description:
      "Separate the main subject from the background, creating transparency.",
    href: "remove-background",
  },
];

export const converterOptions: SelectOption<
  AcceptedFormats,
  AcceptedFormats
>[] = [
  { value: "avif", label: "avif" },
  { value: "jpeg", label: "jpeg" },
  { value: "png", label: "png" },
  { value: "jpg", label: "jpg" },
  { value: "tiff", label: "tiff" },
  { value: "webp", label: "webp" },
];
