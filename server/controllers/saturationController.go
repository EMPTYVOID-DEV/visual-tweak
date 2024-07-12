package controllers

import (
	"image"

	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
	"github.com/anthonynsimon/bild/adjust"
	"github.com/gin-gonic/gin"
)

func ApplySaturation(c *gin.Context) {
	img := c.MustGet("img").(image.Image)
	format := c.MustGet("format").(string)
	contentType := c.MustGet("contentType").(string)
	settings := c.MustGet("settings").(map[string]interface{})
	change := settings["change"].(float64)
	img = adjust.Saturation(img, change)
	utils.ReturnImage(img, format, contentType, c)
}
