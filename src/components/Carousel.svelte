<script lang="ts">
  import type { CarouselItem } from "$lib/types"
  export let items: CarouselItem[] = []
</script>

<div class="slider relative w-full overflow-scroll bg-light">
  <ul class="slide-track flex gap-x-6">
    {#each items as item (item.id)}
      <li
        class="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
      >
        <a class="relative h-full w-full" href={item.href}>
          <div
            class="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800"
          >
            <img
              alt={item.title}
              loading="lazy"
              decoding="async"
              data-nimg="fill"
              class="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
              style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              src={item.image}
            />
            <div
              class="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label"
            >
              <div
                class="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white"
              >
                <h6
                  class="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight"
                >
                  {item.title}
                </h6>
                <p class="flex-none rounded-full bg-blue-600 p-2 text-white">
                  {item.price.amount}
                  <span class="ml-1 inline hidden @[275px]/label:inline">
                    {item.price.currencyCode || "$"}
                  </span>
                </p>
              </div>
            </div>
          </div></a
        >
      </li>
    {/each}
  </ul>
</div>

<style>
  @-webkit-keyframes scroll {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(calc(-250px * 7));
      transform: translateX(calc(-250px * 7));
    }
  }

  @keyframes scroll {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    100% {
      -webkit-transform: translateX(calc(-250px * 7));
      transform: translateX(calc(-250px * 7));
    }
  }

  .slider::after {
    -webkit-transform: rotateZ(180deg);
    transform: rotateZ(180deg);
  }

  .slider .slide-track {
    -webkit-animation: scroll 40s linear infinite;
    animation: scroll 40s linear infinite;
  }
</style>
