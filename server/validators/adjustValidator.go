package validators

import (
	"errors"

	"github.com/EMPTYVOID-DEV/visual-tweak/types"
)

// this works with saturation ,brigthness ,contrast
func AdjustValidator(settings types.Settings) error {
	change, exists := settings["change"]
	if !exists {
		return errors.New("missing 'change' in settings")
	}

	changeFloat, ok := change.(float64)
	if !ok {
		return errors.New("'change' must be a number")
	}

	if changeFloat < -1 || changeFloat > 1 {
		return errors.New("'change' must be between -1 and 1")
	}

	return nil
}
