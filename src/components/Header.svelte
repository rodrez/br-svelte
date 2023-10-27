<script lang="ts">
  import { SITE_TITLE, NAV_LINKS } from "$const"
  import Logo from "$components/Logo.svelte"
  import ThemeSwitch from "$components/ThemeSwitch.svelte"
</script>

<header>
  <nav>
    <!-- <h2><a href="/">{SITE_TITLE}</a></h2> -->
    <h2>
      <a href="/">
        <Logo />
      </a>
    </h2>
    <div class="flex items-center text-base leading-5">
      <div class="hidden sm:block">
        {#each NAV_LINKS as link}
          <a href={link.href} class="p-1 font-medium sm:p-4">
            {link.title}
          </a>
        {/each}
      </div>
      <!-- <ThemeSwitch /> -->
      <!-- onChange={() => handleThemeChange()} -->
      <!-- checked={resolvedTheme === "light"} -->
      <!-- sunColor={"#ffc107"} -->
      <!-- moonColor={"#1B59F7"} -->
    </div>
  </nav>
</header>

<style>
  header {
    margin: 0;
    padding: 0 1em;
    background: white;
    box-shadow: 0 2px 8px rgba(var(--black), 5%);
  }
  h2 {
    margin: 0;
    font-size: 1em;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  nav a {
    padding: 1em 0.5em;
    color: var(--black);
    border-bottom: 4px solid transparent;
    text-decoration: none;
  }
  nav a.active {
    text-decoration: none;
    border-bottom-color: var(--accent);
  }
  /* .social-links, */
  /* .social-links a { */
  /* 	display: flex; */
  /* } */
  /* @media (max-width: 720px) { */
  /* 	.social-links { */
  /* 		display: none; */
  /* 	} */
  /* } */
</style>
