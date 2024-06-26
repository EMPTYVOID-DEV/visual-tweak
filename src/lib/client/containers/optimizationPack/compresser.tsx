"use client";

import { useStore } from "zustand";
import { settingsStore } from "@stores/settings";
import Slider from "@components/slider";

function Compresser() {
  const { settings, updateSettings } = useStore(settingsStore);
  return (
    <Slider
      label={`The relative quality ${settings.quality}%`}
      className="z-0"
      value={settings.quality as number}
      onChange={(val) => {
        updateSettings({ quality: val });
      }}
    />
  );
}

export default Compresser;
