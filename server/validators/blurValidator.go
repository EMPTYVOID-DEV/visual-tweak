package validators

import (
	"errors"

	"github.com/EMPTYVOID-DEV/visual-tweak/types"
)

func BlurValidator(settings types.Settings) error {
	radius, exists := settings["radius"]
	if !exists {
		return errors.New("missing 'radius' in settings")
	}

	radiusFloat, ok := radius.(float64)
	if !ok {
		return errors.New("'radius' must be a number")
	}

	if radiusFloat <= 0 {
		return errors.New("'radius' must be bigger than 0")
	}

	return nil
}
