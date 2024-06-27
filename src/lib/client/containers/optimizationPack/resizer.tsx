"use client";

import Input from "@client/components/input";
import { settingsStore } from "@stores/settings";
import { useStore } from "zustand";
import Select from "@components/select";
import { fitOptions, positionOptions } from "../../const.client";

function Resizer() {
  const { settings, updateSettings } = useStore(settingsStore);
  return (
    <div className="w-full flex flex-col gap-2">
      <Input
        defaultValue="50"
        label="Width (px)"
        handleChange={(width) => {
          if (width.length == 0)
            return updateSettings({ ...settings, width: 50 });
          updateSettings({ ...settings, width: parseFloat(width) });
        }}
      />
      <Input
        defaultValue="50"
        label="Height (px)"
        handleChange={(height) => {
          if (height.length == 0)
            return updateSettings({ ...settings, height: 50 });
          updateSettings({ ...settings, height: parseFloat(height) });
        }}
      />
      <Select
        label="Fit type"
        options={fitOptions}
        defaultValue={{ value: "fill", label: "fill" }}
        onChange={(newVal) =>
          newVal && updateSettings({ ...settings, fit: newVal.value })
        }
      />
      <Select
        label="Position type"
        options={positionOptions}
        defaultValue={{ value: "center", label: "center" }}
        onChange={(newVal) =>
          newVal && updateSettings({ ...settings, position: newVal.value })
        }
      />
    </div>
  );
}

export default Resizer;
