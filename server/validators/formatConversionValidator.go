package validators

import (
	"errors"
	"strings"

	"github.com/EMPTYVOID-DEV/visual-tweak/consts"
	"github.com/EMPTYVOID-DEV/visual-tweak/types"
	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
)

func FormatConversionValidator(settings types.Settings) error {
	targetFormat, exists := settings["targetFormat"]
	if !exists {
		return errors.New("missing 'targetFormat' in settings")
	}

	targetString, ok := targetFormat.(string)
	if !ok {
		return errors.New("'targetFormat' must be a string")
	}

	if !utils.IsAcceptedFormat(targetString) {
		return errors.New("'targeFormat' must be one of these : " + strings.Join(consts.AcceptedImgFormats[:], ","))
	}

	return nil
}
