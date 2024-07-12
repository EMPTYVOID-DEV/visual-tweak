package utils

import (
	"image"
	"net/http"

	"github.com/gin-gonic/gin"
)

func ReturnImage(img image.Image, format string, contentType string, c *gin.Context) {
	buf, err := ImgToBuffer(img, format)
	if err != nil {
		c.Error(err)
		return
	}
	c.Data(http.StatusOK, contentType, buf)
}
