/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb', // More professional blue
          dark: '#38bdf8', // Lighter blue for dark mode contrast
        },
        background: {
          light: '#ffffff',
          dark: '#090913', // Very dark blue-black
        },
        card: {
          light: '#ffffff',
          dark: '#111827', // Dark gray with slight blue tint
        },
        accent: {
          light: '#f59e0b',
          dark: '#fbbf24',
        }
      },
      boxShadow: {
        'sharp': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
