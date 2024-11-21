// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#29BB89', // 更亮的青色
          light: '#3ED9A7',
          dark: '#1E6F5C',
        },
        secondary: {
          DEFAULT: '#F0F0F0', // 白蛇主色调（清雅白色）
          light: '#FFFFFF',
          dark: '#E0E0E0',
        },
        accent: {
          DEFAULT: '#B80000', // 点缀红色
          gold: '#D4AF37',  // 金色点缀
        }
      },
      backgroundImage: {
        'snake-pattern': "url('/images/snake-pattern.svg')",
        'chinese-texture': "url('/images/chinese-texture.svg')",
      },
    },
  },
  plugins: [],
}