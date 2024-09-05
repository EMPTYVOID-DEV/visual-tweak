package controllers

import (
	"image"

	"github.com/EMPTYVOID-DEV/visual-tweak/types"
	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
	"github.com/anthonynsimon/bild/blur"
	"github.com/gin-gonic/gin"
)

func ApplyBlur(c *gin.Context) {
	img := c.MustGet("img").(image.Image)
	format := c.MustGet("format").(string)
	contentType := c.MustGet("contentType").(string)
	settings := c.MustGet("settings").(types.Settings)
	radius := settings["radius"].(float64)
	img = blur.Gaussian(img, radius)
	utils.ReturnImage(img, format, contentType, c)
}
