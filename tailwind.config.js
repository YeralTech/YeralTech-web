/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7f6bb0',   
        secondary: '#f0f0f7', 
        background: '#f8f7fb',
        p200: '#e4e3f1',
        p300: '#cfcce6',
        p500: '#4d406f',
        text: '#342b4a',      
        hover: '#615087',   
        velvet: '#3A4D38',
        shaik: '#0A4870',
        stext: '#FFCE4A',
        tic:'#114E50',
        bgtic:'#0C7679',
        bglight: 'rgba(12, 118, 121, 0.12)',

        bghome:'#C8DFFF',
        homelg: '#F2F8FF',
       
      },
      backgroundImage: {
       
        'custom-gradient': 'linear-gradient(-360deg, #FFFFFF 0%, #0A4870 100%)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],  
        raleway: ['Raleway', 'sans-serif'],   
      },
    },
  },
  plugins: [],
};
