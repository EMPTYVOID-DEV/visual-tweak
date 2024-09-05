package routes

import (
	"github.com/EMPTYVOID-DEV/visual-tweak/controllers"
	"github.com/EMPTYVOID-DEV/visual-tweak/middlewares"
	"github.com/EMPTYVOID-DEV/visual-tweak/validators"
	"github.com/gin-gonic/gin"
)

func SetupOptimizationRoute(route *gin.RouterGroup) {
	route.POST("/format-conversion", middlewares.FileValidator(), middlewares.SettingsValidator(validators.FormatConversionValidator), controllers.FormatConverter)
	route.POST("/resize", middlewares.FileValidator(), middlewares.SettingsValidator(validators.ResizeValidator), controllers.Resize)
}
