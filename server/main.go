package main

import (
	"fmt"
	"os"

	"github.com/EMPTYVOID-DEV/visual-tweak/middlewares"
	"github.com/EMPTYVOID-DEV/visual-tweak/routes"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("Recovered from panic:", r)
		}
	}()
	godotenv.Load()
	ginInstance := gin.Default()
	apiGroup := ginInstance.Group("/api")
	routes.SetupFiltersRoute(apiGroup)
	routes.SetupOptimizationRoute(apiGroup)
	ginInstance.Use(middlewares.ErrorHandler())
	port := os.Getenv("port")
	ginInstance.Run(":" + port)
}
