package middlewares

import (
	"encoding/json"
	"image"
	"net/http"
	"strconv"
	"strings"

	"github.com/EMPTYVOID-DEV/visual-tweak/consts"
	"github.com/EMPTYVOID-DEV/visual-tweak/types"
	"github.com/EMPTYVOID-DEV/visual-tweak/utils"
	"github.com/gin-gonic/gin"
)

func FileValidator() gin.HandlerFunc {
	return func(c *gin.Context) {
		fileHeader, err := c.FormFile("file")
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "file is required"})
			return
		}
		if !utils.CheckType(fileHeader.Header.Get("Content-Type")) {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Accepted formats are : " + strings.Join(consts.AcceptedImgFormats[:], ",")})
			return
		}
		if !utils.CheckSize(fileHeader.Size) {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Max image size is " + strconv.FormatInt(consts.Sizelimit, 10)})
			return
		}

		file, err := fileHeader.Open()
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Service unavailable"})
			return
		}
		defer file.Close()

		img, format, err := image.Decode(file)
		if err != nil {
			c.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Service unavailable"})
			return
		}
		c.Set("format", format)
		c.Set("contentType", fileHeader.Header.Get("Content-Type"))
		c.Set("img", img)
	}
}

func SettingsValidator(settingsValidator types.SettingsValidator) gin.HandlerFunc {
	return func(c *gin.Context) {
		var setttingsMap map[string]interface{}

		if err := json.Unmarshal([]byte(c.PostForm("settings")), &setttingsMap); err != nil {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "settings is json and its required"})
			return
		}

		if err := settingsValidator(setttingsMap); err != nil {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		c.Set("settings", setttingsMap)
		c.Next()
	}
}
