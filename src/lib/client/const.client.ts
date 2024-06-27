import { FunctionComponent } from "react";
import { AcceptedFormats } from "../shared/types.shared";
import { Operations, SelectOption } from "./types.client";
import Converter from "@operationComponents/converter";
import Compresser from "@operationComponents/compresser";
import Resizer from "@operationComponents/resizer";

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
      height: 200,
      width: 200,
      position: "center",
    },
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
