import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'custom-green':'#014751',
        
        'custom-light-green':'#051214',
        'home-pg-bg':'#0A0A09',
        'logo-surrounding':'#0F0F0F',
        'custom-green-light':'#0F231E',
        'custom-green-lighter':'#18BD93',
        'custom-black':'#1C172B',
        
        'custom-white':'#FFFFFF',
        'custom-grey-white':'#191919',
        'custom-grey':'#5E5C5B',
        'custom-blue':'#4935D4',
        'custom-skyblue':'#92A8E4',
      },
      
      minHeight:{
        '625':'625px',
      },
      height:{
        '1/12': '8.333333%',  // 1/12 of the height
        '2/12': '16.666667%', // 2/12
        '3/12': '25%',        // 3/12
        '4/12': '33.333333%',
        '11/12': '91.666667%',
        '650px':'650px',
        'custompx':'1400px',
        '100px': '100px',  // Custom width of 100px
        '200px': '200px',  // Custom width of 200px
        '300px': '300px',  // Custom width of 300px
        '400px': '400px',  // Custom width of 400px
        '500px': '500px', 
        '600px': '600px', 
        '700px': '680px', 
      },
      width: {
        '100px': '100px',  // Custom width of 100px
        '200px': '200px',  // Custom width of 200px
        '300px': '300px',  // Custom width of 300px
        '400px': '400px',  // Custom width of 400px
        '500px': '500px',  // Custom width of 400px
        '600px': '600px',  // Custom width of 400px
        '850px': '850px',  // Custom width of 400px
        '900px': '900px',  // Custom width of 400px
      },
      fontSize:{
        'custom-size0': '0.4rem',
        'custom-size': '0.5rem',
        'custom-size2': '0.8rem',
      }
    },
  },
  plugins: [],
};
export default config;
