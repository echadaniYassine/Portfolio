// src/components/LanguageSwitcher.jsx
'use client'
import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  // A new shared style for buttons
  const buttonClasses = "px-3 py-2 text-sm rounded-md font-semibold text-primary-foreground bg-gradient-to-r from-primary to-secondary transition-all duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background";

  // ... (logic remains the same)
  const [_, currentLang, ...rest] = usePathname().split('/')
  const otherLang = currentLang === 'fr' ? 'en' : 'fr'
  const router = useRouter()

  const handleSwitch = () => {
    router.push(`/${otherLang}/${rest.join('/')}`)
  }

  return (
    <button
      onClick={handleSwitch}
      // FROM: bg-gray-200 dark:bg-gray-700
      // TO: Use the same consistent styling as the theme toggle
      className={buttonClasses}
    >
      {otherLang === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
    </button>
  )
}