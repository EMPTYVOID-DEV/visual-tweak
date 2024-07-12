package routes

import (
	"github.com/EMPTYVOID-DEV/visual-tweak/controllers"
	"github.com/EMPTYVOID-DEV/visual-tweak/middlewares"
	"github.com/EMPTYVOID-DEV/visual-tweak/validators"
	"github.com/gin-gonic/gin"
)

func SetupFiltersRoute(c *gin.RouterGroup) {
	c.POST("/hue", middlewares.FileValidator(), middlewares.SettingsValidator(validators.HueValidator), controllers.ApplyHue)
	c.POST("/sepia", middlewares.FileValidator(), controllers.ApplySepia)
	c.POST("/saturation", middlewares.FileValidator(), middlewares.SettingsValidator(validators.AdjustValidator), controllers.ApplySaturation)
	c.POST("/grayscale", middlewares.FileValidator(), controllers.ApplyGrayscale)
	c.POST("/blur", middlewares.FileValidator(), middlewares.SettingsValidator(validators.BlurValidator), controllers.ApplyBlur)
}
