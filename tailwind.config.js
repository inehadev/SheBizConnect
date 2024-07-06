/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['"Poppins"', 'sans-serif'],
   },
   colors:{
    'bg-gray': '#fff1f2'
   },
   backgroundImage: {
    'custom-image': "url('/girl-.jpg')",
  },
  gridTemplateColumns: {
    'col': '500px 300px 300px ',
  },
  gridTemplateRows: {
    'row': '200px 200px',
  },
},
},
  
 
  
  plugins: [],
}

