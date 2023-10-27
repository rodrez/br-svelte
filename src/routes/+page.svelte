<script lang="ts">
  import type { PageData } from "./$types"
  import HomeIntro from "$components/HomeIntro.svelte"
  import ProgrammingImage from "$components/HeroImage.svelte"
  import Projects from "$components/Projects.svelte"
  import Newsletter from "$components/Newsletter.svelte"
  import SkillCarousel from "$components/SkillCarousel.svelte"

  export let data: PageData
  export let form: any
</script>

<main class="grow">
  <div
    class="mx-auto flex w-11/12 flex-col items-center justify-center lg:mt-2 xl:w-11/12 2xl:mt-48"
  >
    <div class="mx-auto mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <HomeIntro />
      <div class="relative z-10 order-1 h-0 pb-[56.25%] lg:order-2">
        <ProgrammingImage />
      </div>
    </div>

    <!-- <Skills /> -->
    <SkillCarousel />
    <Projects />
    <Newsletter {data} {form} />
  </div>
</main>
