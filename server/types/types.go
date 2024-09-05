package types

type Settings map[string]interface{}

type SettingsValidator func(Settings) error
