import { SelectOption, Settings, filtersOperations } from "./types.client";
import Saturation from "@containers/filtersPacks/saturation";
import Hue from "@containers/filtersPacks/hue";
import Blur from "@containers/filtersPacks/blur";

export const filtersPackSettings: Settings<filtersOperations> = {
  blur: {
    component: Blur,
    defaultSettings: { radius: 1 },
  },
  grayscale: {
    component: null,
    defaultSettings: {},
  },
  sepia: {
    component: null,
    defaultSettings: {},
  },
  hue: {
    component: Hue,
    defaultSettings: {
      degrees: 0,
    },
  },
  saturation: {
    component: Saturation,
    defaultSettings: {
      change: 1,
    },
  },
};

export const filtersPackOptions: SelectOption<filtersOperations, string>[] = [
  {
    label: "Blur",
    value: "blur",
  },
  {
    label: "Grayscale",
    value: "grayscale",
  },
  {
    label: "Sepia",
    value: "sepia",
  },
  {
    label: "Hue",
    value: "hue",
  },
  {
    label: "Saturation",
    value: "saturation",
  },
];
