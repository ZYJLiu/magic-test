import Script from "next/script"

export default function Home() {
  return (
    <>
      {/* <Script
        src="https://auth.magic.link/pnp/login"
        data-magic-publishable-api-key="pk_live_72F093D51AD88B5B"
        data-terms-of-service-uri="/path/to/your/terms-of-service"
        data-privacy-policy-uri="/path/to/your/privacy-policy"
        data-redirect-uri="/test"
      /> */}

      <script
        src="https://auth.magic.link/pnp/login"
        data-magic-publishable-api-key="pk_live_72F093D51AD88B5B"
        data-terms-of-service-uri="/path/to/your/terms-of-service"
        data-privacy-policy-uri="/path/to/your/privacy-policy"
        data-redirect-uri="/callback"
      ></script>
    </>
  )
}
