package main

import (
	"fmt"
	"os"

	"github.com/EMPTYVOID-DEV/visual-tweak/middlewares"
	"github.com/EMPTYVOID-DEV/visual-tweak/routes"
	"github.com/gin-contrib/cors"
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
	app := gin.Default()
	next_host := os.Getenv("next_host")
	app.Use(cors.New(cors.Config{
		AllowOrigins: []string{next_host},
		AllowMethods: []string{"POST"},
		AllowHeaders: []string{"*"},
	}))
	app.Use(middlewares.ErrorHandler())
	apiGroup := app.Group("/api")
	routes.SetupFiltersRoute(apiGroup)
	routes.SetupOptimizationRoute(apiGroup)
	app.Run()
}
