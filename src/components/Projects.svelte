<script lang="ts">
  import { PROJECTS } from "$const"
  import { clsx } from "$utils"
  import LayeredImage from "./LayeredImage.svelte"
</script>

<div class={"w-full"}>
  <div
    class=" relative my-12 mx-auto flex flex-col break-words rounded-2xl bg-clip-border xl:w-11/12"
  >
    {#each PROJECTS as project, index}
      <div
        data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
        data-aos-easing="ease-in-sine"
        class=" relative my-12 mx-auto flex flex-col gap-y-2 break-words rounded-2xl bg-clip-border xl:w-10/12"
      >
        <div
          class={clsx(
            index % 2 === 0 ? "-left-32  lg:-left-2" : "-right-32 lg:-right-2",
            "absolute top-1/2 z-0 hidden h-80 -translate-y-1/2 overflow-hidden rounded-lg lg:block lg:w-9/12 2xl:w-7/12",
          )}
        >
          <LayeredImage src={project.image} alt={project.title} />
        </div>
        <div
          class={clsx(
            index % 2 === 0 ? "lg:ml-auto lg:text-right" : "lg:mr-auto",
            "z-1 relative my-auto max-w-2xl space-y-4 lg:w-7/12",
          )}
        >
          <p
            class="font-mono text-lg font-bold text-primary-600 dark:text-primary-400"
          >
            Featured Project
          </p>
          <h4>{project.title}</h4>
          <div
            class={clsx(
              index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto",
              " max-w-xl rounded-lg bg-white p-8 text-[#000621] shadow-lg shadow-slate-200 dark:bg-dark-background dark:text-slate-400 dark:shadow-slate-900",
            )}
          >
            {@html project.description}
          </div>
          <div
            class={clsx(
              index % 2 === 0
                ? "lg:ml-auto  lg:justify-end"
                : "lg:mr-auto lg:justify-start",
              "flex w-8/12 gap-x-4 flex-wrap my-2",
            )}
          >
            {#each project.stack.split(",") as tech}
              <span class="text-slate-700 dark:text-[#94b4be]">
                {tech}
              </span>
            {/each}
          </div>
          <div class="h-2" />
          <a
            href={project.url}
            class="rounded border-2 border-primary-600 py-1 px-2 text-xl font-medium text-primary-600 dark:border-primary-400 dark:text-primary-400 md:ml-0 md:mr-auto lg:mr-auto lg:ml-auto xl:px-12"
          >
            Learn More
          </a>
        </div>
      </div>
    {/each}
  </div>
</div>
