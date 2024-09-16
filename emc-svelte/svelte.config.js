import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Combine Vite's preprocess and Svelte preprocess for SCSS
	preprocess: [
		vitePreprocess(),
		sveltePreprocess({

		}),
	],

	kit: {
		adapter: adapter(),
	}
};

export default config;
