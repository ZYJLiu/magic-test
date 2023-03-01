import { Magic } from "magic-sdk"
import { SolanaExtension } from "@magic-ext/solana"
import { OAuthExtension } from "@magic-ext/oauth"

const rpcUrl = "https://api.devnet.solana.com"

const createMagic = (key: string) => {
  if (typeof window === "undefined") {
    return null
  }

  const extensions = {
    solana: new SolanaExtension({ rpcUrl }),
    oAuth: new OAuthExtension(),
  }

  return new Magic(key, { extensions })
}

export const magic = createMagic("pk_live_FCF04103A9172B45"!)
