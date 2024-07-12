package validators

import (
	"errors"
)

func BlurValidator(settings map[string]interface{}) error {
	degreesValue, exists := settings["radius"]
	if !exists {
		return errors.New("missing 'radius' in settings")
	}

	degrees, ok := degreesValue.(float64)
	if !ok {
		return errors.New("'radius' must be a number")
	}

	if degrees <= 0 {
		return errors.New("'radius' must be bigger than 0")
	}

	return nil
}
