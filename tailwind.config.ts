import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "1rem",
		},
		screens: { // Custom breakpoints for container css class?
			xs: '480px', // Extra small screens
			sm: '640px', // Small screens
			md: '768px', // Medium screens
			lg: '1024px', // Large screens
			xl: '1280px', // Extra large screens
			'2xl': '1536px', // 2x Extra large screens
		},
		fontFamily: {
			primary: "var(--font-playfair-display)", // TODO: Replace here for primary font
			secondary: "var(--font-lora)", // TODO: Replace here for accent font
		},
		extend: {
			colors: {
				primary: '#1c1c22',
				accent: {
					DEFAULT: '#00ff99',
					hover: '#00e187'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
