import type { APIRoute } from "astro"
import { render } from "@/util/handshake"
import { resolveRing } from "@/util/ring"

export const prerender = false

export const GET: APIRoute = async (ctx) => {
  const resolved = await resolveRing(ctx.url)

  if ("error" in resolved) {
    return new Response(resolved.error, { status: 400 })
  }

  const prevSite =
    resolved.ringSites[
      (resolved.index - 1 + resolved.ringSites.length) %
        resolved.ringSites.length
    ]

  return new Response(
    render("PREV", resolved.ringId, resolved.currentSite, {
      name: prevSite.id.split("/")[1].replace(".json", ""),
      url: prevSite.data.url,
    }),
    {
      status: 200,
      headers: { "Content-Type": "text/html" },
    }
  )
}
