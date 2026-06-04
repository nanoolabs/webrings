import { defineConfig, passthroughImageService } from "astro/config"
import vercel from "@astrojs/vercel"

export default defineConfig({
  site: "https://webrings.nanoolabs.dev",
  image: {
    service: process.env.NODE_ENV === "development" ? passthroughImageService() : undefined,
  },
  // vercel handle the adapter automatically in production
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  output: "server",
})
