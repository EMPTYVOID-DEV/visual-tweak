package validators

import (
	"errors"
)

func HueValidator(settings map[string]interface{}) error {
	degreesValue, exists := settings["degrees"]
	if !exists {
		return errors.New("missing 'degrees' in settings")
	}

	degrees, ok := degreesValue.(float64)
	if !ok {
		return errors.New("'degrees' must be a number")
	}

	if degrees < -360 || degrees > 360 {
		return errors.New("'degrees' must be between -360 and 360")
	}

	return nil
}
