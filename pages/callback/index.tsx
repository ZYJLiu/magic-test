import React, { useState, useEffect } from "react"
import { Magic } from "magic-sdk"
import { SolanaExtension } from "@magic-ext/solana"
import * as web3 from "@solana/web3.js"
import Script from "next/script"
import { Text } from "@chakra-ui/react"
import { magic } from "../../utils/magic"

export default function Test() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  // const [userMetadata, setUserMetadata] = useState({})
  // const [balance, setBalance] = useState(0)

  // useEffect(() => {
  //   if (magic) {
  //     magic.user.isLoggedIn().then(async (magicIsLoggedIn) => {
  //       setIsLoggedIn(magicIsLoggedIn)
  //       if (magicIsLoggedIn) {
  //         magic.user.getMetadata().then((user) => {
  //           setUserMetadata(user)
  //           const pubKey = new web3.PublicKey(user.publicAddress)
  //           //   getBalance(pubKey)
  //           console.log(user)
  //         })
  //       }
  //     })
  //   }
  // }, [])

  return (
    <div>
      <script
        src="https://auth.magic.link/pnp/callback"
        data-magic-publishable-api-key="pk_live_72F093D51AD88B5B"
      ></script>
      {/* <Script
        src="https://auth.magic.link/pnp/callback"
        data-magic-publishable-api-key="pk_live_72F093D51AD88B5B"
      /> */}
      {/* <Text>{userMetadata.publicAddress}</Text>
      <Text>{userMetadata.email}</Text> */}
    </div>
  )
}
