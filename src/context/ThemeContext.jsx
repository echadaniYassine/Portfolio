// src/context/ThemeContext.jsx
'use client'

import { createContext, useContext } from 'react'

export const ThemeContext = createContext(undefined)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}