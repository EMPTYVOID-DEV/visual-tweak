"use client";

import { useStore } from "zustand";
import { settingsStore } from "@stores/settings";
import Slider from "@components/slider";

function Compresser() {
  const { settings, updateSettings } = useStore(settingsStore);
  return (
    <div className="flex flex-col gap-1">
      <span className="capitalize text-small font-semibold text-foregroundColor">
        The relative quality {settings.quality as string}%
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
