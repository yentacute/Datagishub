/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins': ['Poppins', 'san-serif']
      },
      colors: {
        'white': '#ffffff',
        'grey': '#ddd',
        'sidebar': '#abb9e8'
      },
      maxWidth: {
        'sidebar': '280px',
        'topbar': 'calc(100% - 280px)'
      },
      backgroundColor: {
        'sidebar': '#405189',
        'grey': '#f3f3f9'
      },
      fontSize: {
        '15px': '15px'
      }
    },
    
    
  }
}

