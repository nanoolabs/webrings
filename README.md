# Nanoo Webrings [⌐■_■]

> Circular webring registry and redirect service for the Nanoo Federation. Server render on Cloudflare workers via Astro.

`Astro` `Cloudflare Workers` `Typescript` `CSS`

## Overview

SSoT for Nanoo Federation node registry. each member site connects in a circular webring - navigate forward or backward via redirect endpoints. Adding a site mean adding a JSON file to content collection.

## Architecture & Tech Stack

- **Runtime:** Cloudflare Workers (Edge SSR)
- **Framework:** Astro v6 (SSR, server render)
- **Content:** Astro content collections with zod validation
- **Styling:** [@nlbs/css](https://github.com/nanoolabs/css) design tokens, Geist Pixel / Geist Mono

## Quickstart

```bash
git clone https://github.com/nanoolabs/webrings.git
cd webrings
pnpm install
pnpm dev
```

## Project Structure

```
src/
├── pages/          Routes (index.astro, next.ts, prev.ts)
├── content/rings/  Ring member data (JSON files per site)
├── components/     Astro component (RingNav.astro)
├── util/           resolveRing matcher, handshake renderer
└── consts.ts       Site & registry metadata
```

## Adding a site

Create `src/content/rings/<ring>/<id>.json`:

```json
{ "name": "Site Name", "id": "your-id", "url": "https://example.dev" }
```

Submit a PR.

## Development & Ops

- **Dev:** `pnpm dev`
- **Build:** `pnpm build`
- **Deploy:** `pnpm deploy`

---

## Nanoo Labs Ecosystem

Part of [nanoolabs.dev](https://nanoolabs.dev).

## Contributing

1. Checkout `feat/your-feature`.
2. Conventional Commits.
3. Submit a PR.

## License

MIT - Nanoo Labs © 2026.

_Based on [astro-webrings](https://github.com/louisescher/astro-webrings) repository by Louis Escher (@louisescher). Refactored and extended by Nanoo Labs._
