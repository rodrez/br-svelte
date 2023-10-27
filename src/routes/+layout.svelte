<script lang="ts">
  import "$styles/app.css"
  import { SITE_TITLE, SITE_DESCRIPTION } from "$const"
  import BaseHead from "$components/BaseHead.svelte"
  import Header from "$components/Header.svelte"
  import Footer from "$components/Footer.svelte"

  // TODO: Look into moving BaseHead to the actual head
  import AOS from "aos"
  import "aos/dist/aos.css"
  import { onMount } from "svelte"

  onMount(() => {
    AOS.init()
  })
</script>

<head>
  <BaseHead title={SITE_TITLE} description={SITE_DESCRIPTION} />
</head>
<div>
  <Header />
  <div
    class=" mx-auto px-4 prose-li:marker:text-dark-blue sm:px-6 xl:w-9/12 xl:px-0"
  >
    <slot />
  </div>
  <Footer />
</div>
