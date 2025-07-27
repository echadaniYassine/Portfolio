// src/app/[lang]/layout.jsx
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ThemeProvider from '@/components/ThemeProvider'

// FIXED: Await params before destructuring
export default async function LangLayout({ children, params }) {
  const { lang } = await params
  
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar lang={lang} />
        <main>
          {children}
        </main>
        <Footer lang={lang} />
      </div>
    </ThemeProvider>
  )
}