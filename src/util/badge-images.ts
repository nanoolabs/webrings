import type { badges } from "@/lib/webring-core/badges"

import friendsOfHoustonStatic from "@/lib/webring-core/images/friends-of-houston.webp"
import friendsOfHoustonAnimated from "@/lib/webring-core/images/friends-of-houston.gif"

import builtWithAstroStatic from "@/lib/webring-core/images/built-with-astro.webp"

type BadgeImageData = {
  static: ImageMetadata
  animated?: ImageMetadata
}

const badgeImages: Record<keyof typeof badges, BadgeImageData> = {
  "friends-of-houston": {
    static: friendsOfHoustonStatic,
    animated: friendsOfHoustonAnimated,
  },
  "built-with-astro": {
    static: builtWithAstroStatic,
  },
}

export { badgeImages }
