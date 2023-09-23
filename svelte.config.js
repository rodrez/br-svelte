import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { mdsvex } from 'mdsvex';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
    extensions: ['.md', '.svx', '.mdx'],
    remarkPlugins: [ remarkUnwrapImages, [remarkToc, { tight: true }]],
    rehypePlugins: [ rehypeSlug ],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    extensions: ['.svelte', ...mdsvexConfig.extensions],
    preprocess: [ vitePreprocess(), mdsvex(mdsvexConfig) ],
    kit: {
        adapter: adapter(),
        alias: {
            $components: './src/components',
            $const: './src/const.ts',
            $lib: './src/lib',
            $stores: './src/stores',
            $utils: './src/utils',
            $styles: './src/styles',
            $assets: './src/assets',
            $routes: './src/routes',
            $layouts: './src/layouts',
        }
    }
};

export default config;
