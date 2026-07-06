import { defineConfig, passthroughImageService } from "astro/config"
import cloudflare from "@astrojs/cloudflare"

export default defineConfig({
  site: "https://webrings.nanoolabs.dev",
  image: {
    service:
      process.env.NODE_ENV === "development"
        ? passthroughImageService()
        : undefined,
  },
  adapter: cloudflare({
    imageService: true,
  }),
  output: "server",
})
