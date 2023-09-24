<script lang="ts">
  import { ChevronLeft, ChevronsRight } from "lucide-svelte"
  import GridTileImage from "$components/GridTile.svelte"
  import { createUrl } from "$utils"
  import type { Image } from "$lib/types"

  export let images: Image[]

  // Note: In Svelte, instead of React's hooks, we'll just use a reactive statement `$:`
  $: imageSearchParam = new URLSearchParams(window.location.search).get("image")
  $: imageIndex = imageSearchParam ? parseInt(imageSearchParam) : 0

  $: nextImageIndex = imageIndex + 1 < images.length ? imageIndex + 1 : 0
  $: nextUrl = createUrl(
    window.location.pathname,
    new URLSearchParams([
      ...new URLSearchParams(window.location.search),
      ["image", nextImageIndex],
    ]),
  )

  $: previousImageIndex = imageIndex === 0 ? images.length - 1 : imageIndex - 1
  $: previousUrl = createUrl(
    window.location.pathname,
    new URLSearchParams([
      ...new URLSearchParams(window.location.search),
      ["image", previousImageIndex],
    ]),
  )

  const buttonClassName =
    "h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
</script>

<div class="relative aspect-square h-full max-h-[550px] w-full overflow-hidden">
  {#if images[imageIndex]}
    <img
      class="h-full w-full object-contain"
      alt={images[imageIndex].altText}
      src={images[imageIndex].src}
    />
  {/if}

  {#if images.length > 1}
    <div class="absolute bottom-[15%] flex w-full justify-center">
      <div
        class="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80"
      >
        <a
          href={previousUrl}
          aria-label="Previous product image"
          class={buttonClassName}
        >
          <ChevronLeft />
        </a>
        <div class="mx-1 h-6 w-px bg-neutral-500"></div>
        <a
          href={nextUrl}
          aria-label="Next product image"
          class={buttonClassName}
        >
          <ChevronsRight />
        </a>
      </div>
    </div>
  {/if}
</div>

{#if images.length > 1}
  <ul
    class="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0"
  >
    {#each images as image, index}
      <li key={image.src} class="h-20 w-20">
        <a
          href={createUrl(
            window.location.pathname,
            new URLSearchParams([
              ...new URLSearchParams(window.location.search),
              ["image", index],
            ]),
          )}
          aria-label="Enlarge product image"
          class="h-full w-full"
        >
          <GridTileImage
            alt={image.altText}
            src={image.src}
            width={80}
            height={80}
            active={index === imageIndex}
          />
        </a>
      </li>
    {/each}
  </ul>
{/if}
