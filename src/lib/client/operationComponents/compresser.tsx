import { useAtom } from "jotai";
import { settingsAtom } from "../stores/settings";
import Slider from "@components/slider";

function Compresser() {
  const [settings, setSettings] = useAtom(settingsAtom);
  return (
    <div className="flex flex-col gap-1">
      <span className="capitalize text-small font-semibold text-foregroundColor">
        The level of compression (1-100)
      </span>
      <Slider
        className="z-0"
        value={settings.quality as number}
        onChange={(val) => {
          setSettings({ quality: val });
        }}
      />
    </div>
  );
}

export default Compresser;
