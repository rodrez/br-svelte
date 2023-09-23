<script lang="ts">
import { page } from '$app/stores';

export let href: string;
export let className: string = 'font-semibold'; 
export let props = {};

// We check for includes instead of === because we want to match the current page and any subpages
// except for the root page, which is a special case
$: isActive = href === '/'
    ? $page.url.pathname === '/'
    : $page.url.pathname.includes(href);


</script>

<a href="{href}" class="{className}" class:active={isActive} {...props}>
    <slot />
</a>

<style>
	a {
		display: inline-block;
		text-decoration: none;
	}
	a.active {
        @apply font-bold;
		text-decoration: underline;
	}
</style>
