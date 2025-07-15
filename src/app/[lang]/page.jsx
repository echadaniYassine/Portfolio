//app/[lang]/page.jsx
import { getDictionary } from '@/lib/getDictionary';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Services from '@/components/sections/Services';
import Projects from '@/components/sections/Projects';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="space-y-24 md:space-y-32">
      <Hero dictionary={dictionary.hero} />
      <About dictionary={dictionary.about} />
      <Experience dictionary={dictionary.experience} />
      <Services dictionary={dictionary.services} />
      <Projects dictionary={dictionary.projects} />
      <Testimonials dictionary={dictionary.testimonials} />
      <Contact dictionary={dictionary.contact} />
    </div>
  );
}