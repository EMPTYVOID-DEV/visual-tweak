package controllers

import (
	"image"

	"github.com/EMPTYVOID-DEV/visual-tweak/types"
	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
	"github.com/gin-gonic/gin"
)

func FormatConverter(c *gin.Context) {
	img := c.MustGet("img").(image.Image)
	settings := c.MustGet("settings").(types.Settings)
	targetFormat := settings["targetFormat"].(string)
	utils.ReturnImage(img, targetFormat, "image/"+targetFormat, c)
}
