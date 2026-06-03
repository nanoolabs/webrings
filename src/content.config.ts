import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

export const webringSchema = z.object({
  name: z.string().min(1),
  id: z.string().min(1),
  url: z.string().url(),
})

const rings = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/rings",
  }),
  schema: webringSchema,
})

export const collections = {
  rings,
}
