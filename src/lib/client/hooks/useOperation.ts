import { useEffect, useMemo, useState } from "react";
import { SelectOption, Settings } from "../types.client";
import { useStore } from "zustand";
import { settingsStore } from "@stores/settings";

export function useOperation<A extends string>(
  settingsMap: Settings<A>,
  defaultOption: SelectOption<A, string>
) {
  const [operation, setOperation] = useState(defaultOption);
  const { settings, setDefaultSettings } = useStore(settingsStore);

  const SettingsComponent = useMemo(
    () => settingsMap[operation.value].component,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [operation]
  );

  useEffect(() => {
    setDefaultSettings(settingsMap[operation.value].defaultSettings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation]);

  return {
    operation,
    setOperation,
    settings,
    setDefaultSettings,
    SettingsComponent,
  };
}
