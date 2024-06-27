import { createStore } from "zustand";

interface SettingsStore {
  settings: Record<string, unknown>;
  updateSettings: (newSettings: Record<string, unknown>) => void;
  setDefaultSettings: (defaultSettings: Record<string, unknown>) => void;
}

export const settingsStore = createStore<SettingsStore>((set) => ({
  settings: {},
  updateSettings: (newSettings) =>
    set((prev) => ({ settings: { ...prev.settings, ...newSettings } })),
  setDefaultSettings: (defaultSettings) => set({ settings: defaultSettings }),
}));
