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
        'custom-blue3':'#404383',
        
        'custom-light-green':'#051214',
        'home-pg-bg':'#0A0A09',
        'logo-surrounding':'#0F0F0F',
        'custom-green-light':'#0F231E',
        'custom-green-lighter':'#18BD93',
        'custom-black':'#1C172B',
        
        'custom-white':'#FFFFFF',
        'custom-grey2':'#F1F3FF',
        'custom-grey3':'#AFB1CF',
        'custom-blue2':'#141766',
        'custom-grey-white':'#191919',
        'custom-grey':'#5E5C5B',
        'custom-blue':'#4935D4',
        'custom-blue4':'#3A58FF',
        'custom-skyblue':'#92A8E4',
      },
      
      minHeight:{
        '625':'625px',
      },
      minWidth:{
        '625':'625px',
        
      },
      height:{
        '1/12': '8.333333%',  // 1/12 of the height
        '2/12': '16.666667%', // 2/12
        '3/12': '25%',        // 3/12
        '4/12': '33.333333%',
        '5/12': '41.666667%', // 5/12
        '6/12': '50%',        // 6/12 (half)
        '7/12': '58.333333%', // 7/12
        '8/12': '66.666667%', // 8/12
        '9/12': '75%',        // 9/12
        '10/12': '83.333333%',// 10/12
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
        '750px': '750px',  // Custom width of 400px
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
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
