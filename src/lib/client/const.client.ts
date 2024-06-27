import { AcceptedFormats } from "../shared/types.shared";
import { Pack, SelectOption } from "./types.client";

export const packs: Pack[] = [
  {
    title: "Optimization Pack",
    description:
      "Resize, compress, and convert images. Optimize file size while maintaining quality.",
    href: "optimization",
  },
  {
    title: "Filters Pack",
    description:
      "Apply various image filters Sepia, Saturation, grayscale, blur, hue and opacity.",
    href: "filters",
  },
];

export const converterOptions: SelectOption<
  AcceptedFormats,
  AcceptedFormats
>[] = [
  { value: "png", label: "png" },
  { value: "jpeg", label: "jpeg" },
  { value: "avif", label: "avif" },
  { value: "jpg", label: "jpg" },
  { value: "tiff", label: "tiff" },
  { value: "webp", label: "webp" },
];
