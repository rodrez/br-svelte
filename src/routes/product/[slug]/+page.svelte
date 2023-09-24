<script lang="ts">
    import BaseHead from "$components/BaseHead.svelte"
    import FormattedDate from "$components/FormattedDate.svelte";
    import Gallery from "$components/Gallery.svelte"
    import ProductDescription from "$components/ProductDescription.svelte"

    export let data;

</script>

<div class="mx-auto max-w-screen-2xl px-4">
    <div class="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
      <div class="h-full w-full basis-full lg:basis-4/6">
        <Gallery images={data.product.images} />
      </div>

      <div class="basis-full lg:basis-2/6">
        <ProductDescription product={data.product} />
      </div>
    </div>
</div>
