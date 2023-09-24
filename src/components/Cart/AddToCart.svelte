<script lang="ts">
  import { PlusIcon } from "lucide-svelte"
  import { onMount } from "svelte"
  import LoadingDots from "$components/LoadingDots.svelte"

  export let variants: string[] = []
  export let availableForSale = false

  let isPending = false
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined
  let selectedVariantId: string | undefined = defaultVariantId

  let searchParams = new URLSearchParams(window.location.search)

  $: variant = variants.find((variant) =>
    variant.selectedOptions.every(
      (option: { name: string; value: string }) =>
        option.value === searchParams.get(option.name.toLowerCase()),
    ),
  )

  $: selectedVariantId = variant?.id || defaultVariantId

  const title = !availableForSale
    ? "Out of stock"
    : !selectedVariantId
    ? "Please select options"
    : undefined

  async function handleAddToCart() {
    if (!availableForSale || !selectedVariantId) return

    isPending = true
    const error = await addItem(selectedVariantId)
    if (error) {
      // Handle the error, e.g., show a message
      console.error(error.toString())
    } else {
      window.location.reload() // Replace router.refresh() from Next.js
    }
    isPending = false
  }

  onMount(() => {
    // You can do any initialization here if needed.
  })
</script>

<button
  aria-label="Add item to cart"
  disabled={isPending || !availableForSale || !selectedVariantId}
  {title}
  on:click={handleAddToCart}
  class={`relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white hover:opacity-90 
    ${
      !availableForSale || !selectedVariantId
        ? "cursor-not-allowed opacity-60 hover:opacity-60"
        : ""
    }
    ${isPending ? "cursor-not-allowed" : ""}`}
>
  <div class="absolute left-0 ml-4">
    {#if !isPending}
      <PlusIcon />
    {:else}
      <LoadingDots class="mb-3 bg-white" />
    {/if}
  </div>
  <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
</button>
