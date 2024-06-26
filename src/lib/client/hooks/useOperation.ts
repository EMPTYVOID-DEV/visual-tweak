import { useEffect, useMemo, useState } from "react";
import { operations, settingsMap } from "../const.client";
import { Operations, SelectOption } from "../types.client";
import { settingsAtom } from "../stores/settings";
import { useAtom } from "jotai";

export function useOperation() {
  const [operation, setOperation] = useState<SelectOption<Operations, string>>(
    operations[0]
  );
  const [settings, setSettings] = useAtom(settingsAtom);

  const SettingsComponent = useMemo(
    () => settingsMap[operation.value].component,
    [operation]
  );

  useEffect(() => {
    setSettings(settingsMap[operation.value].defaultSettings);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operation]);

  return { operation, setOperation, settings, SettingsComponent };
}
