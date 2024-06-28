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
      label="Saturation factor"
      inputType="number"
      defaultValue="2"
      handleChange={(val) => updateSettings({ factor: strToFloat(val, 2) })}
    />
  );
}

export default Saturation;
