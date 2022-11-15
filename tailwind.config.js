/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    keyframes: {
      slide_from_right: {
        '0%': { transform: 'translateX(100%)' },
        '100%': { transform: 'translateX(0%)' }
      },
      slide_from_left: {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0%)' }
      },
      slide_from_top: {
        '0%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0%)' }
      },
      iphone_in: {
        '0%': { transform: 'translateX(100%)', backgroundImage: "url('/src/assets/opened_iphone_13_pro_max.svg')" },
        '50%': { backgroundImage: "url('/src/assets/opened_iphone_13_pro_max.svg')" },
        '100%': { transform: 'translateX(0%)', backgroundImage: "url('/src/assets/closed_iphone_13_pro_max.svg')" }
      },
      shine: {
        '0%' : { filter: 'drop-shadow(0px 0px 6px #00c0ffaa)' },
        '50%' : { filter: 'drop-shadow(0px 0px 6px #00c0ff00)' },
        '100%' : { filter: 'drop-shadow(0px 0px 6px #00c0ffaa)' },
      }
    },

    animation: {
      slide_from_right_sm: 'slide_from_right 0.4s',
      slide_from_right_md: 'slide_from_right 1.4s',
      slide_from_right_lg: 'slide_from_right 2.4s',
      slide_from_left_sm: 'slide_from_left 0.4s',
      slide_from_left_md: 'slide_from_left 1.4s',
      slide_from_left_lg: 'slide_from_left 2.4s',
      slide_from_top_sm: 'slide_from_top 0.4s',
      slide_from_top_md: 'slide_from_top 1.4s',
      slide_from_top_lg: 'slide_from_top 2.4s',
      iphone_in: 'iphone_in 1.4s',
      shine: 'shine 4s ease-in-out infinite'
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"]
      },
      backgroundImage: {
        'default': "url('/src/assets/default.svg')",
        'opened_iphone': "url('/src/assets/opened_iphone_13_pro_max.svg')",
        'closed_iphone': "url('/src/assets/closed_iphone_13_pro_max.svg')",
        'blue_lines': "url('/src/assets/blue_bg-lines.png')",
        'green_lines': "url('/src/assets/green_bg-lines.png')",
        'yellow_lines': "url('/src/assets/yellow_bg-lines.png')",
      },
      colors: {
        'secondary': '#00C0FF',
      },
    },
  },
  plugins: [],
}
