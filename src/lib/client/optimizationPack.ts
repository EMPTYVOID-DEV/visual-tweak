import { OptimizationOperations, SelectOption, Settings } from "./types.client";
import Converter from "@containers/optimizationPack/converter";
import Resizer from "@containers/optimizationPack/resizer";

export const optimizationPackSettings: Settings<OptimizationOperations> = {
  "format-conversion": {
    defaultSettings: { targetFormat: "png" },
    component: Converter,
  },  
  resize: {
    component: Resizer,
    defaultSettings: {
      height: 200,
      width: 200,
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
    label: "Resize",
    value: "resize",
  },
];
