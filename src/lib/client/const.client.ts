import { FunctionComponent } from "react";
import { AcceptedFormats } from "../shared/types.shared";
import { Operations, SelectOption } from "./types.client";
import Converter from "@operationComponents/converter";
import Compresser from "@operationComponents/compresser";
import Resizer from "@operationComponents/resizer";
import Enhancer from "@operationComponents/enhancer";
import BackgroundRemover from "@operationComponents/backgroundRemover";

export const settingsMap: Record<
  Operations,
  { component: FunctionComponent; defaultSettings: Record<string, unknown> }
> = {
  "format-conversion": {
    defaultSettings: { targetFormat: "png" },
    component: Converter,
  },
  compression: {
    component: Compresser,
    defaultSettings: { quality: 40 },
  },
  resize: {
    component: Resizer,
    defaultSettings: {
      fit: "fill",
      height: 500,
      width: 500,
      position: { x: 50, y: 50 },
    },
  },
  enhancement: {
    component: Enhancer,
    defaultSettings: {},
  },
  "remove-background": {
    component: BackgroundRemover,
    defaultSettings: {},
  },
};

export const operations: SelectOption<Operations, string>[] = [
  {
    label: "Format Conversion",
    value: "format-conversion",
  },
  {
    label: "Compression",
    value: "compression",
  },
  {
    label: "Resize",
    value: "resize",
  },
  {
    label: "Enhancement",
    value: "enhancement",
  },
  {
    label: "Remove Background",
    value: "remove-background",
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
