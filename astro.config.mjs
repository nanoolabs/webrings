import { defineConfig, passthroughImageService } from "astro/config"
import netlify from "@astrojs/netlify"

export default defineConfig({
  site: "https://webrings.nanoolabs.dev",
  image: {
  // just using passthroughImageService when development on my termux
    service: process.env.NODE_ENV === "development" ? passthroughImageService() : undefined,
  },
  // just  fix adapter netlify for my termux
  adapter: process.env.NODE_ENV === "production" ? netlify() : undefined,
  output: "server",
})
