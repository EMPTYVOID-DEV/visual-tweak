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
      "Apply various image filters and effects.Adjust color, saturation, blur, and opacity.",
    href: "filters",
  },
  {
    title: "Enhancement Pack",
    description:
      "Improve image quality with advanced techniques.Reduce noise, sharpen details, and remove red-eye.",
    href: "enhancement",
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

export const fitOptions: SelectOption<string, string>[] = [
  { value: "fill", label: "fill" },
  { value: "contain", label: "contain" },
  { value: "cover", label: "cover" },
];
export const positionOptions: SelectOption<string, string>[] = [
  { value: "top", label: "top" },
  { value: "right top", label: "right top" },
  { value: "right", label: "right" },
  { value: "right bottom", label: "right bottom" },
  { value: "bottom", label: "bottom" },
  { value: "left bottom", label: "left bottom" },
  { value: "left", label: "left" },
  { value: "left top", label: "left top" },
  { value: "center", label: "center" },
];
