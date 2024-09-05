package utils

import (
	"bytes"
	"errors"
	"image"
	"image/jpeg"
	"image/png"

	"github.com/Kagami/go-avif"
	"github.com/kolesa-team/go-webp/webp"
	"golang.org/x/image/tiff"
)

func ImgToBuffer(img image.Image, format string) ([]byte, error) {
	buf := new(bytes.Buffer)
	var err error

	switch format {
	case "png":
		err = png.Encode(buf, img)
	case "jpeg", "jpg":
		err = jpeg.Encode(buf, img, nil)
	case "webp":
		err = webp.Encode(buf, img, nil)
	case "avif":
		err = avif.Encode(buf, img, nil)
	case "tiff":
		err = tiff.Encode(buf, img, nil)
	default:
		return nil, errors.New("unsupported format")
	}

	if err != nil {
		return nil, err
	}

	return buf.Bytes(), nil
}
