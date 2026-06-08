import { getCollection } from "astro:content"
import type { APIRoute } from "astro"
import { PROTOCOL_REGEX } from "@/util/protocol"
import { render } from "@/util/handshake"

export const prerender = false

export const GET: APIRoute = async (ctx) => {
  let currentSite = ctx.url.searchParams.get("site")
  const ringId = ctx.url.searchParams.get("ring")

  if (!currentSite)
    return new Response("No `site` parameter has been provided.", {
      status: 400,
    })

  if (!ringId)
    return new Response("No `ring` parameter has been provided.", {
      status: 400,
    })

  currentSite = currentSite.replace(PROTOCOL_REGEX, "")

  const allSites = await getCollection("rings")

  const ringSites = allSites.filter((entry) =>
    entry.id.startsWith(`${ringId}/`),
  )

  if (ringSites.length === 0) {
    return new Response(`Unknown webring: ${ringId}`, {
      status: 400,
    })
  }

  const currentSiteIndex = ringSites.findIndex(
    (entry) =>
      entry.data.id === currentSite ||
      entry.data.url.replace(PROTOCOL_REGEX, "") === currentSite ||
      entry.id === `${ringId}/${currentSite}`,
  )

  if (currentSiteIndex < 0) {
    return new Response("Unknown site in this ring.", {
      status: 400,
    })
  }

  const prevSite =
    ringSites[(currentSiteIndex - 1 + ringSites.length) % ringSites.length]

  const html = render("PREV", ringId, currentSite, {
    name: prevSite.id.split("/")[1].replace(".json", ""),
    url: prevSite.data.url,
  })

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  })
}
