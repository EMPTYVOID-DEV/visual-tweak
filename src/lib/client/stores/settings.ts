import { atom } from "jotai";

export const settingsAtom = atom<Record<string, unknown>>({
  targetFormat: "png",
});
