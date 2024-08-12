/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': "#0F2A3B",
				'white': "#ffffff"
			},
			fontFamily:{
				pacifico: "Pacifico"
			}
		},
	},
	plugins: [require('daisyui')],
}
