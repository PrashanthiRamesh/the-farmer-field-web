import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			ash_gray: {
  				'100': '#20281e',
  				'200': '#3f503d',
  				'300': '#5f785b',
  				'400': '#819d7d',
  				'500': '#a8bba5',
  				'600': '#b9c9b7',
  				'700': '#cbd6c9',
  				'800': '#dce4db',
  				'900': '#eef1ed',
  				DEFAULT: '#a8bba5'
  			},
  			cal_poly_green: {
  				'100': '#0b100a',
  				'200': '#162013',
  				'300': '#21301d',
  				'400': '#2d4026',
  				'500': '#374f2f',
  				'600': '#59804d',
  				'700': '#7ea970',
  				'800': '#a9c69f',
  				'900': '#d4e2cf',
  				DEFAULT: '#374f2f'
  			},
  			seasalt: {
  				'100': '#3b3528',
  				'200': '#776a4f',
  				'300': '#aa9c7f',
  				'400': '#d1caba',
  				'500': '#f9f8f6',
  				'600': '#faf9f8',
  				'700': '#fbfbf9',
  				'800': '#fdfcfb',
  				'900': '#fefefd',
  				DEFAULT: '#f9f8f6'
  			},
  			jet: {
  				'100': '#0a0a0a',
  				'200': '#141414',
  				'300': '#1f1f1f',
  				'400': '#292929',
  				'500': '#333333',
  				'600': '#5c5c5c',
  				'700': '#858585',
  				'800': '#adadad',
  				'900': '#d6d6d6',
  				DEFAULT: '#333333'
  			},
  			buff: {
  				'100': '#32210f',
  				'200': '#64411f',
  				'300': '#96622e',
  				'400': '#c58341',
  				'500': '#d4a373',
  				'600': '#dcb68f',
  				'700': '#e5c8ab',
  				'800': '#eedac7',
  				'900': '#f6ede3',
  				DEFAULT: '#d4a373'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			playfair: [
  				'Playfair Display',
  				'serif'
  			],
  			lora: [
  				'Lora',
  				'serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
