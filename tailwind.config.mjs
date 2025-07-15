const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        kristi: ['"Kristi"', 'cursive'],
      },
      fontWeight: {
        700: '700',
      },

      colors: {
        background: '#ffffff',
        foreground: '#171717',
        primary: '#3b82f6',
        card: '#f9fafb',
        border: '#e5e7eb',
        'dark-background': '#0a0a0a',
        'dark-foreground': '#ededed',
        'dark-primary': '#818cf8',
        'dark-card': '#161b22',
        'dark-border': '#30363D',
      },
    },
  },
  plugins: [],
};

export default config;
