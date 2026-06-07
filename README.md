![NANOO // WEB_REGISTRY](./public/og.png)

# Nanoo Webrings

Official network registry and webring for the Nanoo.

## What is this?

A webring is a collection of websites linked together in a circular structure. This registry manages the nodes within the [Nanoo](https://nanoolabs.dev).

## How to join?

1. **Create Data:** Create a JSON file in `src/content/rings/built-with-astro/` (or your ring name).
2. **Format:**

```json
{
  "name": "Your Site Name",
  "id": "your-unique-id",
  "url": "https://your-site.com"
}
```

3. **Submit PR:** Push to this repository.

## Redirect Endpoints

You can manually link to the next or previous site using these endpoint:

| Description   | Link                                                                   |
| ------------- | ---------------------------------------------------------------------- |
| Next Site     | `https://webrings.nanoolabs.dev/next?site=YOUR_SITE_ID&ring=RING_NAME` |
| Previous Site | `https://webrings.nanoolabs.dev/prev?site=YOUR_SITE_ID&ring=RING_NAME` |

## Sovereign Engineering

Part of the Nanoo Labs ecosystems. Built fo be fast, simple, and scalable.

---

2026 [NANOO LABS](https://nanoolabs.dev)
