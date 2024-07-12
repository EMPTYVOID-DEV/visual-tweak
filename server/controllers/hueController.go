package controllers

import (
	"image"

	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
	"github.com/anthonynsimon/bild/adjust"
	"github.com/gin-gonic/gin"
)

func ApplyHue(c *gin.Context) {
	img := c.MustGet("img").(image.Image)
	format := c.MustGet("format").(string)
	contentType := c.MustGet("contentType").(string)
	settings := c.MustGet("settings").(map[string]interface{})
	hue := settings["degrees"].(float64)
	img = adjust.Hue(img, int(hue))
	utils.ReturnImage(img, format, contentType, c)
}
