<script lang="ts">
// const products = [
//     {
//         id: 1,
//         selectedColor: 'Black',
//         name: 'Machined Pen',
//         price: '$35',
//         colors: [ 
//             {name:'black', className: 'bg-black'}, 
//             {name:'brass', className: 'bg-yellow-500'}, 
//             {name:'silver', className: 'bg-gray-200'}, 
//             {name:'white', className: 'bg-white'}
//         ],
//         },
//     {
//         id: 2,
//         selectedColor: 'Black',
//         name: 'BR Hoodie',
//         price: '$90',
//         colors: [{name:'black', className: 'bg-black'}, {name:'white', className: 'bg-white'}],
//         },
//     {
//         id: 3,
//         selectedColor: 'Black',
//         name: 'Nomad Tumbler',
//         price: '$35',
//         colors: [{name:'black', className: 'bg-black'}, {name:'white', className: 'bg-white'}],
//         },
//     {
//         id: 4,
//         selectedColor: 'Black',
//         name: 'BR Shirt',
//         price: '$35',
//         colors: [{name:'black', className: 'bg-black'}, {name:'white', className: 'bg-white'}],
//         },
//     ]

export let data;

const products = data.products || [];

console.log("products", products)
console.log("data", data)

</script>

<div class="bg-white">
  <div class="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-0">
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Trending products</h2>
      <a href="#" class="hidden text-sm font-semibold text-red-600 hover:text-red-500 sm:block">
        See everything
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>

    <div class="relative mt-8">
      <div class="relative -mb-6 w-full overflow-x-auto pb-6">
        <ul class="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0">
        {#each products as product}
          <li class="inline-flex w-64 flex-col text-center lg:w-auto">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg" alt="Black machined steel pen with hexagonal grip and small white logo at top." class="h-full w-full object-cover object-center group-hover:opacity-75">
              </div>
              <div class="mt-6">
                <p class="text-sm text-gray-500">{product.selectedColor}</p>
                <h3 class="mt-1 font-semibold text-gray-900">
                  <a href={`/product/${product.id}`}>
                    <span class="absolute inset-0"></span>
                    {product.name}
                  </a>
                </h3>
                <p class="mt-1 text-gray-900">{product.price}</p>
              </div>
            </div>

            <h4 class="sr-only">Available colors</h4>
            <ul class="mt-auto flex items-center justify-center space-x-3 pt-6">
                {#each product.colors as color}
              <li class={"h-4 w-4 rounded-full border border-black border-opacity-10 " + color.className}>
                <span class="sr-only">{color.name}</span>
              </li>
              {/each}
            </ul>
          </li>
          {/each}
        </ul>
      </div>
    </div>

    <div class="mt-12 flex px-4 sm:hidden">
      <a href="#" class="text-sm font-semibold text-red-600 hover:text-red-500">
        See everything
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  </div>
</div>

