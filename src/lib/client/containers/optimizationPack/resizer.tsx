"use client";

import Input from "@client/components/input";
import { settingsStore } from "@stores/settings";
import { useStore } from "zustand";

function Resizer() {
  const { settings, updateSettings } = useStore(settingsStore);
  return (
    <div className="w-full flex flex-col gap-2">
      <Input
        defaultValue="200"
        label="Width (px)"
        handleChange={(width) => {
          if (width.length == 0)
            return updateSettings({ ...settings, width: 50 });
          updateSettings({ ...settings, width: parseFloat(width) });
        }}
      />
      <Input
        defaultValue="200"
        label="Height (px)"
        handleChange={(height) => {
          if (height.length == 0)
            return updateSettings({ ...settings, height: 50 });
          updateSettings({ ...settings, height: parseFloat(height) });
        }}
      />
    </div>
  );
}

export default Resizer;
