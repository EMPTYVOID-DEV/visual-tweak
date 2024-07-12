package utils

import "github.com/EMPTYVOID-DEV/visual-tweak/consts"

func CheckSize(sizeInBytes int64) bool {
	sizeInMb := sizeInBytes / 1000000
	return sizeInMb <= consts.Sizelimit
}

func CheckType(filetype string) bool {
	for _, format := range consts.AcceptedImgFormats {
		mimetype := "image/" + format
		if mimetype == filetype {
			return true
		}
	}
	return false
}
