import { Operation } from "./types.client";

export const operations: Operation[] = [
  {
    title: "Format Conversion",
    description: "Change image file formats (e.g., JPG to PNG, TIFF to WebP).",
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
  {
    title: "Apply Filters",
    description:
      "Add preset effects like sepia, blur, hue, black and white, or vintage to images.",
    href: "filters",
  },
  {
    title: "Rotate and Flip",
    description:
      "Change image orientation by rotating or flipping horizontally/vertically.",
    href: "rotate-flip",
  },
];
