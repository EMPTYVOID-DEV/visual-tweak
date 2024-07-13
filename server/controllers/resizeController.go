package controllers

import (
	"image"

	"github.com/EMPTYVOID-DEV/visual-tweak/types"
	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
	"github.com/anthonynsimon/bild/transform"
	"github.com/gin-gonic/gin"
)

func Resize(c *gin.Context) {
	img := c.MustGet("img").(image.Image)
	format := c.MustGet("format").(string)
	contentType := c.MustGet("contentType").(string)
	settings := c.MustGet("settings").(types.Settings)
	width := settings["width"].(float64)
	height := settings["height"].(float64)
	img = transform.Resize(img, int(width), int(height), transform.Gaussian)
	utils.ReturnImage(img, format, contentType, c)
}
