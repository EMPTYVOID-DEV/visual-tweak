package validators

import (
	"errors"

	"github.com/EMPTYVOID-DEV/visual-tweak/types"
)

func ResizeValidator(settings types.Settings) error {
	width, existWid := settings["width"]
	height, existHeh := settings["height"]
	if !existHeh || !existWid {
		return errors.New("missing width and height in settings")
	}

	widthFloat, validWid := width.(float64)
	heightFloat, validHeh := height.(float64)
	if !validWid || !validHeh {
		return errors.New("both width and height must be a number")
	}

	if widthFloat < 0 || heightFloat < 0 || widthFloat > 4000 || heightFloat > 4000 {
		return errors.New("width and height can't exceed 4000px")
	}

	return nil
}
