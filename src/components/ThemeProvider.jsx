// components/ThemeProvider.jsx
'use client'
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => null,
})

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')
  return context
}

export default function ThemeProvider({ children, ...props }) {
  const [theme, setTheme] = useState('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window === 'undefined') return
    
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setTheme(savedTheme)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return
    
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  const value = {
    theme,
    setTheme: (newTheme) => {
      if (newTheme === 'light' || newTheme === 'dark') {
        setTheme(newTheme)
      }
    },
  }

  // Prevent flash of unstyled content
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-900">
        {children}
      </div>
    )
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}