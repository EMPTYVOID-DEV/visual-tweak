"use client";

import { useStore } from "zustand";
import { settingsStore } from "@stores/settings";
import Slider from "@components/slider";

function Compresser() {
  const { settings, updateSettings } = useStore(settingsStore);
  return (
    <div className="flex flex-col gap-1">
      <span className="capitalize text-small font-semibold text-foregroundColor">
        The level of compression (1-100)
      </span>
      <Slider
        className="z-0"
        value={settings.quality as number}
        onChange={(val) => {
          updateSettings({ quality: val });
        }}
      />
    </div>
  );
}

export default Compresser;
