import { useStore } from "zustand";
import { settingsStore } from "@stores/settings";
import Slider from "@components/slider";

function Hue() {
  const { settings, updateSettings } = useStore(settingsStore);
  return (
    <Slider
      min={0}
      max={360}
      label={`The hue degrees ${settings.degrees}`}
      className="z-0"
      value={settings.degrees as number}
      onChange={(val) => {
        updateSettings({ degrees: val });
      }}
    />
  );
}

export default Hue;
