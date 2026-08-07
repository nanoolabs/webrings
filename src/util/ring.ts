import { getCollection } from "astro:content"

export const PROTOCOL_REGEX = /^https?:\/\//

export async function resolveRing(url: URL) {
  let currentSite = url.searchParams.get("site")
  const ringId = url.searchParams.get("ring")

  if (!currentSite) return { error: "No `site` parameter has been provided." }
  if (!ringId) return { error: "No `ring` parameter has been provided." }

  currentSite = currentSite.replace(PROTOCOL_REGEX, "")

  const ringSites = (await getCollection("rings")).filter((entry) =>
    entry.id.startsWith(`${ringId}/`)
  )

  if (ringSites.length === 0) return { error: `Unknown webring: ${ringId}` }

  const index = ringSites.findIndex(
    (entry) =>
      entry.data.id === currentSite ||
      entry.data.url.replace(PROTOCOL_REGEX, "") === currentSite ||
      entry.id === `${ringId}/${currentSite}`
  )

  if (index < 0) return { error: "Unknown site in this ring." }

  return { ringSites, index, currentSite, ringId }
}
