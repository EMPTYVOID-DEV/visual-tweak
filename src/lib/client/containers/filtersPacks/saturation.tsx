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
      label="Saturation change"
      inputType="number"
      defaultValue="1"      
      handleChange={(val) => updateSettings({ change: strToFloat(val, 1) })}
    />
  );
}

export default Saturation;
