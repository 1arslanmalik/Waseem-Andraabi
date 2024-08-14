/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': "#0F2A3B",
				'white': "#ffffff",
				'secondary': "#C9FF00",
				'secondary_dark': "#708912",
				'cream': "#DFDFDF"
			}, 
			fontFamily:{
				pacifico: "Pacifico",
				averia_sans: "AveriaSansLibre",
				la_belle: "LaBelleAurore"
			}
		},
	},
	plugins: [require('daisyui')],
}
