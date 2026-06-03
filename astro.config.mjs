import { defineConfig, passthroughImageService } from "astro/config"
import node from "@astrojs/node"

export default defineConfig({
  site: "https://webrings.nanoolabs.dev",
  image: {
    service: passthroughImageService(),
  },
  adapter: node({
    mode: "standalone",
  }),
})
