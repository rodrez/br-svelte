
<script>
  import AddToCart from 'components/cart/add-to-cart.svelte';
  import Price from 'components/price.svelte';
  import Prose from 'components/prose.svelte';
  import VariantSelector from './variant-selector.svelte';

  export let product;
</script>

<div class="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
  <h1 class="mb-2 text-5xl font-medium">{product.title}</h1>
  <div class="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
    <Price 
      amount={product.priceRange.maxVariantPrice.amount} 
      currencyCode={product.priceRange.maxVariantPrice.currencyCode} 
    />
  </div>
</div>

<VariantSelector options={product.options} variants={product.variants} />

{#if product.descriptionHtml}
  <Prose 
    class="mb-6 text-sm leading-tight dark:text-white/[60%]" 
    html={product.descriptionHtml} 
  />
{/if}

<AddToCart variants={product.variants} availableForSale={product.availableForSale} />
