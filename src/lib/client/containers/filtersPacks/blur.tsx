"use client";

import Input from "@components/input";
import { useStore } from "zustand";
import { settingsStore } from "@stores/settings";
import { strToFloat } from "../../utils/transformers";

function Saturation() {
  const updateSettings = useStore(
    settingsStore,
    (state) => state.updateSettings
  );
  return (
    <Input
      label="Blur sigma"
      inputType="number"
      defaultValue="1"
      handleChange={(val) => updateSettings({ sigma: strToFloat(val, 1) })}
    />
  );
}

export default Saturation;
