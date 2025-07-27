// /app/[lang]/page.jsx
import { getDictionary } from '@/lib/i18n'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'fr' }]
}

// FIXED: Await params before destructuring
export default async function Home({ params }) {
  const { lang } = await params
  const t = await getDictionary(lang)

  return (
    <>
      <HeroSection t={t} />
      <AboutSection t={t} />
      <SkillsSection t={t} />
      <ProjectsSection t={t} />
      <ContactSection t={t} />
    </>
  )
}