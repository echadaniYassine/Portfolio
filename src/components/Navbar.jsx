// components/Navbar.jsx
'use client'
import { useTheme } from './ThemeProvider'
import { useState, useEffect } from 'react'

export default function Navbar({ lang }) {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: lang === 'fr' ? 'À propos' : 'About' },
    { href: '#skills', label: lang === 'fr' ? 'Compétences' : 'Skills' },
    { href: '#projects', label: lang === 'fr' ? 'Projets' : 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-glass backdrop-blur-xl border-b border-primary/20 shadow-glow-primary' 
        : 'bg-transparent'
    }`}>
      <div className="w-full">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="text-2xl font-bold text-gradient-primary hover:scale-105 transition-transform duration-300"
            >
              Portfolio
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 text-foreground hover:text-primary transition-colors duration-300 font-medium group rounded-lg"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
                </a>
              ))}
            </div>

            {/* Theme Toggle & Language Switcher */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-glass rounded-full p-1 border border-primary/20">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-full hover:bg-primary/20 transition-colors duration-300 hover:scale-110"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <div className="w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                  ) : (
                    <div className="w-5 h-5 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"></div>
                  )}
                </button>
                
                <div className="w-px h-6 bg-border"></div>
                
                <select 
                  value={lang} 
                  className="bg-transparent border-none text-sm font-medium focus:outline-none cursor-pointer text-foreground px-2"
                  onChange={(e) => {
                    window.location.href = `/${e.target.value}`
                  }}
                >
                  <option value="en">EN</option>
                  <option value="fr">FR</option>
                </select>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-glass border border-primary/20 hover:border-primary/50 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`w-4 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''
                  }`}></span>
                  <span className={`w-4 h-0.5 bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}></span>
                  <span className={`w-4 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full transition-all duration-300 mt-1 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 pb-6' : 'max-h-0'
          }`}>
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground hover:text-gradient-primary transition-all duration-300 font-medium py-3 px-4 rounded-lg hover:bg-glass border border-transparent hover:border-primary/20"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}