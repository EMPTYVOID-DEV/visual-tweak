import Input from "@/lib/client/components/input";
import { settingsAtom } from "../stores/settings";
import { useAtom } from "jotai";
import Select from "../components/select";
import { fitOptions, positionOptions } from "../const.client";

function Resizer() {
  const [settings, setSettings] = useAtom(settingsAtom);
  return (
    <div className="w-full flex flex-col gap-2">
      <Input
        defaultValue="50"
        label="Width (px)"
        handleChange={(width) => {
          if (width.length == 0) return setSettings({ ...settings, width: 50 });
          setSettings({ ...settings, width: parseFloat(width) });
        }}
      />
      <Input
        defaultValue="50"
        label="Height (px)"
        handleChange={(height) => {
          if (height.length == 0)
            return setSettings({ ...settings, height: 50 });
          setSettings({ ...settings, height: parseFloat(height) });
        }}
      />
      <Select
        label="Fit type"
        options={fitOptions}
        defaultValue={{ value: "fill", label: "fill" }}
        onChange={(newVal) =>
          newVal && setSettings({ ...settings, fit: newVal.value })
        }
      />
      <Select
        label="Position type"
        options={positionOptions}
        defaultValue={{ value: "center", label: "center" }}
        onChange={(newVal) =>
          newVal && setSettings({ ...settings, position: newVal.value })
        }
      />
    </div>
  );
}

export default Resizer;
