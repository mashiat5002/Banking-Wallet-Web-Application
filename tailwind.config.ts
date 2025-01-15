import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			'custom-green': '#014751',
  			'custom-blue3': '#404383',
  			'custom-light-green': '#051214',
  			'home-pg-bg': '#0A0A09',
  			'logo-surrounding': '#0F0F0F',
  			'custom-green-light': '#0F231E',
  			'custom-green-lighter': '#18BD93',
  			'custom-black': '#1C172B',
  			'custom-white': '#FFFFFF',
  			'custom-grey2': '#F1F3FF',
  			'custom-grey3': '#AFB1CF',
  			'custom-blue2': '#141766',
  			'custom-grey-white': '#191919',
  			'custom-grey': '#5E5C5B',
  			'custom-blue': '#4935D4',
  			'custom-blue4': '#3A58FF',
  			'custom-skyblue': '#92A8E4',
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
  		minHeight: {
  			'625': '625px'
  		},
  		minWidth: {
  			'625': '625px'
  		},
  		height: {
  			'1/12': '8.333333%',
  			'2/12': '16.666667%',
  			'3/12': '25%',
  			'4/12': '33.333333%',
  			'5/12': '41.666667%',
  			'6/12': '50%',
  			'7/12': '58.333333%',
  			'8/12': '66.666667%',
  			'9/12': '75%',
  			'10/12': '83.333333%',
  			'11/12': '91.666667%',
  			'650px': '650px',
  			custompx: '1400px',
  			'100px': '100px',
  			'200px': '200px',
  			'300px': '300px',
  			'400px': '400px',
  			'500px': '500px',
  			'600px': '600px',
  			'700px': '680px'
  		},
  		width: {
  			'100px': '100px',
  			'200px': '200px',
  			'300px': '300px',
  			'400px': '400px',
  			'500px': '500px',
  			'600px': '600px',
  			'750px': '750px',
  			'850px': '850px',
  			'900px': '900px'
  		},
  		fontSize: {
  			'custom-size0': '0.4rem',
  			'custom-size': '0.5rem',
  			'custom-size2': '0.8rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require('tailwind-scrollbar-hide'), require("tailwindcss-animate")],
};
export default config;
