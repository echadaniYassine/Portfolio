const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],


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
        // Light mode
        background: '#ffffff',
        foreground: '#1a1a1a',
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        'primary-hover': 'hsl(var(--color-primary-hover) / <alpha-value>)',
        secondary: '#A29BFE', // Purple Blue
        foreground: 'hsl(var(--color-foreground) / <alpha-value>)',
        'dark-foreground': 'hsl(var(--color-dark-foreground) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        'dark-card': 'hsl(var(--color-dark-card) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        'dark-border': 'hsl(var(--color-dark-border) / <alpha-value>)',

        // Dark mode
        'dark-background': '#0a0a0a',
        'dark-foreground': '#f5f5f5',
        'dark-primary': '#A29BFE',
        'dark-secondary': '#6C5CE7',
        'dark-card': '#1e1e1e',
        'dark-border': '#3f3f46',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 12px rgba(0, 0, 0, 0.1)',
        md: '0 8px 20px rgba(0, 0, 0, 0.12)',
        xl: '0 20px 40px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        spinSlow: 'spin 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #6C5CE7, #A29BFE)',
        'gradient-to-l': 'linear-gradient(to left, #6C5CE7, #A29BFE)',
        'gradient-radial': 'radial-gradient(circle, #6C5CE7, #A29BFE)',
      },
      transitionProperty: {
        'spacing': 'margin, padding',
        'colors': 'background-color, border-color, color, fill, stroke',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'), // optional plugin for `animate-*` utils
  ],
};

export default config;
