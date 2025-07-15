/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // New: Define a font family to match the design
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      // New: Define a proper color palette based on your image
      colors: {
        // Light Mode Colors
        background: '#FFFFFF',
        foreground: '#111827', // Dark gray for text
        primary: '#4338CA',    // A deep indigo for primary actions
        'primary-hover': '#3730A3',
        card: '#F9FAFB',        // Very light gray for cards
        border: '#E5E7EB',
        // Dark Mode Colors
        'dark-background': '#0D1117', // A deep, dark background
        'dark-foreground': '#E6EDF3', // Light gray for text
        'dark-primary': '#818CF8',   // A brighter indigo for dark mode
        'dark-primary-hover': '#6366F1',
        'dark-card': '#161B22',      // Darker card background
        'dark-border': '#30363D',
        // Accent colors from the image for info cards
        'accent-teal': { light: '#D1FAE5', dark: '#047857' },
        'accent-amber': { light: '#FEF3C7', dark: '#92400E' },
        'accent-lime': { light: '#ECFCCB', dark: '#65A30D' },
      },
      // New: Add keyframe animations for subtle fade-in effects
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;