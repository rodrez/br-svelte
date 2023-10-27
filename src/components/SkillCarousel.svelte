<script lang="ts">
  import Carousel from "svelte-carousel"
  import { SKILLS } from "$const"
  import ChevronLeft from "$components/icons/ChevronLeft.svelte"
  import ChevronRight from "$components/icons/ChevronRight.svelte"
  import { clsx } from "$utils"
</script>

<div
  class="relative mx-auto w-[80vw] cursor-grab rounded-2xl bg-white shadow-lg shadow-slate-200 dark:bg-dark-background dark:shadow-slate-900 lg:mt-0 lg:w-[60vw]"
>
  <Carousel let:showPrevPage let:showNextPage>
    <div
      on:keyup={(e) => {
        if (e.key === "ArrowLeft") showPrevPage()
        if (e.key === "ArrowRight") showNextPage()
      }}
      slot="prev"
      on:click={showPrevPage}
      class="absolute -left-7 top-8 z-20 my-auto h-14 w-14 cursor-pointer rounded-full bg-primary-600 dark:bg-primary-400 lg:top-0 lg:bottom-0"
    >
      <ChevronLeft color="#fff" />
    </div>
    {#each SKILLS as skill}
      <div class={"flex w-full flex-col items-center space-y-6 py-6 lg:px-12"}>
        <div
          class={"flex h-full w-32 items-center overflow-hidden rounded-full p-4"}
        >
          <svelte:component
            this={skill.icon.name}
            className={clsx("h-24 w-24 ", skill.icon?.class)}
          />
        </div>
        <div
          class={" flex h-full w-full flex-col items-center justify-center space-y-6"}
        >
          <h3
            class={"h-full text-center text-4xl text-primary-600 dark:text-primary-400 lg:text-5xl"}
          >
            {skill.name}
          </h3>
          <p class={"px-4 text-center text-2xl"}>{skill.description}</p>
        </div>
      </div>
    {/each}
    <div
      slot="next"
      on:keyup={(e) => {
        if (e.key === "ArrowLeft") showPrevPage()
        if (e.key === "ArrowRight") showNextPage()
      }}
      on:click={showNextPage}
      class="absolute -right-7 bottom-8 z-20 my-auto h-14 w-14 cursor-pointer rounded-full bg-primary-600 dark:bg-primary-400 lg:top-0 lg:bottom-0"
    >
      <ChevronRight color="#fff" />
    </div>
  </Carousel>
</div>
