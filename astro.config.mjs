import { defineConfig, passthroughImageService } from "astro/config"
import netlify from "@astrojs/netlify"

export default defineConfig({
  site: "https://webrings.nanoolabs.dev",
  image: {
  // just using passthroughImageService when development on my termux
    service: process.env.NODE_ENV === "development" ? passthroughImageService() : undefined,
  },
  // use netlify adapter only when on netlify to avoid deno issues in termux
  adapter: process.env.NETLIFY === "true" ? netlify() : undefined,
  output: "server",
})
