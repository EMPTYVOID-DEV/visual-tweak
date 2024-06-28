"use client";

import Input from "@client/components/input";
import { settingsStore } from "@stores/settings";
import { useStore } from "zustand";
import { strToFloat } from "../../utils/transformers";

function Resizer() {
  const updateSettings = useStore(
    settingsStore,
    (state) => state.updateSettings
  );
  return (
    <div className="w-full flex flex-col gap-2">
      <Input
        defaultValue="200"
        label="Width (px)"
        handleChange={(width) =>
          updateSettings({ width: strToFloat(width, 50) })
        }
      />
      <Input
        defaultValue="200"
        label="Height (px)"
        handleChange={(height) =>
          updateSettings({ height: strToFloat(height, 50) })
        }
      />
    </div>
  );
}

export default Resizer;
