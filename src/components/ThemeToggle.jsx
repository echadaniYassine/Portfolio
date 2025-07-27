// src/components/ThemeToggle.jsx
'use client'
import { useTheme } from '@/context/ThemeContext' // Assuming you have context from previous steps

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const buttonClasses = "px-3 py-2 text-sm rounded-md font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      // FROM: bg-gray-200 dark:bg-gray-700
      // TO: Use theme variables for the button background
      className={buttonClasses}
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}

