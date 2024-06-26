"use client";

import { useAtom } from "jotai";
import { converterOptions } from "../const.client";
import { settingsAtom } from "../stores/settings";
import Select from "@components/select";

function Converter() {
  const [settings, setSettings] = useAtom(settingsAtom);
  return (
    <Select
      label="Select target"
      options={converterOptions}
      value={{
        label: settings.targetFormat,
        value: settings.targetFormat,
      }}
      onChange={(newVal) =>
        newVal && setSettings({ targetFormat: newVal.value })
      }
    />
  );
}

export default Converter;
