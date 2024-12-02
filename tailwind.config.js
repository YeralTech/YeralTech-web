/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6D5CCF',   
        secondary: '#E4E7FB', 
        background: '#FFFFFF',
        text: '#302B53',      
        hover: '#7E77DD',   
        velvet: '#3A4D38',
        shaik: '#0A4870',
        stext: '#FFCE4A',
        tic:'#114E50',
        bgtic:'#0C7679',
        bglight: 'rgba(12, 118, 121, 0.12)'
       
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
