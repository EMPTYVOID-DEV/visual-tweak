"use client";

import { useStore } from "zustand";
import { converterOptions } from "../../const.client";
import { settingsStore } from "@stores/settings";
import Select from "@components/select";

function Converter() {
  const updateSettings = useStore(
    settingsStore,
    (state) => state.updateSettings
  );
  return (
    <Select
      label="Select target"
      options={converterOptions}
      defaultValue={{
        label: "png",
        value: "png",
      }}
      onChange={(newVal) =>
        newVal && updateSettings({ targetFormat: newVal.value })
      }
    />
  );
}

export default Converter;
