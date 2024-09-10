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
                'cream': "#DFDFDF",
                "light_green": "#4ADE80",
                "primary_light": "#163345"
            },
            fontFamily: {
                pacifico: "Pacifico",
                averia_sans: "AveriaSansLibre",
                la_belle: "LaBelleAurore"
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.black'),
                        // Customizing other elements to ensure consistency
                        h1: {
                            color: theme('colors.black'),
                        },
                        h2: {
                            color: theme('colors.black'),
                        },
                        h3: {
                            color: theme('colors.black'),
                        },
                        h4: {
                            color: theme('colors.black'),
                        },
                        strong: {
                            color: theme('colors.black'),
                        },
                        a: {
                            color: theme('colors.blue.600'),
                            '&:hover': {
                                color: theme('colors.blue.800'),
                            },
                        },
                        // You can add more element styles here if needed
                    },
                },
            }),
        },
    },
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
}