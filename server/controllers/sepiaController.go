package controllers

import (
	"image"

	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
	"github.com/anthonynsimon/bild/effect"
	"github.com/gin-gonic/gin"
)

func ApplySepia(c *gin.Context) {
	img := c.MustGet("img").(image.Image)
	format := c.MustGet("format").(string)
	contentType := c.MustGet("contentType").(string)
	img = effect.Sepia(img)
	utils.ReturnImage(img, format, contentType, c)
}
