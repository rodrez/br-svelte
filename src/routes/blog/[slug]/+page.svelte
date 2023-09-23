<script lang="ts">
    import BaseHead from "$components/BaseHead.svelte"
import FormattedDate from "$components/FormattedDate.svelte";

export let data;

</script>

<!-- SEO -->
<svelte:head>
    <title>{data.meta.title} | SvelteKit Blog</title>
    <meta name="description" content={data.meta.description} />
    <meta property="og:title" content={data.meta.title} />
    <meta property="og:description" content={data.meta.description} />
    <meta property="og:type" content="article" />
    <meta property="og:image" content={data.meta.image} />
    <meta property="og:image:alt" content={data.meta.title} />
    <meta property="og:url" content={data.meta.url} />
    <meta property="og:site_name" content="SvelteKit Blog" />
    <meta property="article:published_time" content={data.meta.date} />
    <meta property="article:modified_time" content={data.meta.date} />
    <meta property="article:author" content="Brand Ranks" />
    <meta property="article:section" content="Blog" />
    <meta property="article:tag" content={data.meta.categories} />
</svelte:head>


<!-- <article> -->
<!-- Title --> 
<!-- 	<hgroup> -->
<!-- 		<h1>{data.meta.title}</h1> -->
<!-- 		<p>Published at <FormattedDate date={new Date(data.meta.date)} />.</p> -->
<!-- 	</hgroup> -->
<!---->
<!-- Tags --> 
<!-- 	<div class="tags"> -->
<!-- 		{#each data.meta.categories as category} -->
<!-- 			<span class="surface-4">&num;{category}</span> -->
<!-- 		{/each} -->
<!-- 	</div> -->
<!---->
<!-- Post --> 
<!-- 	<div class="prose"> -->
<!-- 		<svelte:component this={data.content} /> -->
<!-- 	</div> -->
<!-- </article> -->
	<head>
		<BaseHead title={data.meta.title} description={data.meta.description} />
		<style>
			main {
				width: calc(100% - 2em);
				max-width: 100%;
				margin: 0;
			}
			.hero-image {
				width: 100%;
			}
			.hero-image img {
				display: block;
				margin: 0 auto;
				border-radius: 12px;
				box-shadow: var(--box-shadow);
			}
			.prose {
                @apply w-8/12;
				max-width: calc(100% - 2em);
				margin: auto;
				padding: 1em;
				color: rgb(var(--gray-dark));
			}
			.title {
				margin-bottom: 1em;
				padding: 1em 0;
				text-align: center;
				line-height: 1;
			}
			.title h1 {
				margin: 0 0 0.5em 0;
			}
			.date {
				margin-bottom: 0.5em;
				color: rgb(var(--gray));
			}
			.last-updated-on {
				font-style: italic;
			}
		</style>
	</head>

		<main class="w-8/12 mx-auto">
			<article>
				<div class="hero-image">
                    {#if data.meta.heroImage}
                            <img width={1020} height={510} src={data.meta.heroImage} alt="" />
                    {/if}
				</div>
				<div class="prose">
					<div class="title">
						<div class="date">
							<FormattedDate date={new Date(data.meta.pubDate)} />
                            {#if data.meta.updatedDate}
                                <div class="last-updated-on">
                                    Last updated on <FormattedDate date={new Date(data.meta.updatedDate)} />
                                </div>
                            {/if}
						</div>
						<h1>{data.meta.title}</h1>
						<hr />
					</div>
                <svelte:component this={data.content} />
				</div>
			</article>
		</main>
