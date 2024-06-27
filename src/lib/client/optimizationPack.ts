import { OptimizationOperations, SelectOption, Settings } from "./types.client";
import Compresser from "@containers/optimizationPack/compresser";
import Converter from "@containers/optimizationPack/converter";
import Resizer from "@containers/optimizationPack/resizer";

export const optimizationPackSettings: Settings<OptimizationOperations> = {
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

export const optimizationPackOptions: SelectOption<
  OptimizationOperations,
  string
>[] = [
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
