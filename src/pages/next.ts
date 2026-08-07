import type { APIRoute } from "astro"
import { render } from "@/util/handshake"
import { resolveRing } from "@/util/ring"

export const prerender = false

export const GET: APIRoute = async (ctx) => {
  const resolved = await resolveRing(ctx.url)

  if ("error" in resolved) {
    return new Response(resolved.error, { status: 400 })
  }

  const nextSite =
    resolved.ringSites[(resolved.index + 1) % resolved.ringSites.length]

  return new Response(
    render("NEXT", resolved.ringId, resolved.currentSite, {
      name: nextSite.id.split("/")[1].replace(".json", ""),
      url: nextSite.data.url,
    }),
    {
      status: 200,
      headers: { "Content-Type": "text/html" },
    }
  )
}
