package validators

import (
	"errors"
)

// this works with saturation ,brigthness ,contrast
func AdjustValidator(settings map[string]interface{}) error {
	degreesValue, exists := settings["change"]
	if !exists {
		return errors.New("missing 'change' in settings")
	}

	degrees, ok := degreesValue.(float64)
	if !ok {
		return errors.New("'change' must be a number")
	}

	if degrees < -1 || degrees > 1 {
		return errors.New("'change' must be between -1 and 1")
	}

	return nil
}
