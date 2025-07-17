'use client';
import { useEffect, useState } from 'react';
import { Karla, Kristi } from 'next/font/google';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const karla = Karla({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-karla' });
const kristi = Kristi({ subsets: ['latin'], weight: '400' });

const Sidebar = ({ dictionary }) => {
  const navLinks = [
    { name: dictionary.home, href: '#home' },
    { name: dictionary.about, href: '#about' },
    { name: dictionary.services, href: '#services' },
    { name: dictionary.portfolio, href: '#portfolio' },
    { name: dictionary.contact, href: '#contact' },
  ];

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace('#', ''));
    const sections = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navLinks]);

  return (
    <aside className="fixed left-0 top-0 flex h-full w-92 flex-col items-center bg-card text-card-foreground border-r border-border shadow-smooth py-10 z-50">
      {/* Profile */}
      <div className="flex flex-col items-center">
        <div className="h-36 w-36 rounded-full bg-primary/10 p-1 shadow-inner overflow-hidden">
          <img
            src="/yassine-nav.jpg"
            alt="Echadani Yassine"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="relative text-center mt-4">
          <h1 className={`${kristi.className} text-[96px] font-bold text-foreground/10 select-none`}>
            Yassine
          </h1>
          <h2 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-foreground whitespace-nowrap">
            Echadani Yassine
          </h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center justify-center space-y-6 mt-10">
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive = sectionId === activeSection;

          return (
            <a
              key={link.name}
              href={link.href}
              className={`${karla.className} text-lg transition-all duration-300 font-medium ${
                isActive
                  ? 'text-primary underline underline-offset-4'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      {/* Language & Theme Switchers */}
      <div className="mb-6 flex items-center gap-4">
        <LanguageSwitcher />
        <ThemeSwitcher dictionary={dictionary} />
      </div>

      {/* Socials & Footer */}
      <div className="text-center pb-4">
        <div className="mb-4 flex gap-3 justify-center">
          {[
            { Icon: FaFacebookF, href: '#' },
            { Icon: FaTwitter, href: '#' },
            { Icon: FaYoutube, href: '#' },
          ].map(({ Icon, href }, idx) => (
            <a
              key={idx}
              href={href}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary transition shadow"
            >
              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary-foreground" />
            </a>
          ))}
        </div>
        <p className={`${karla.className} text-sm text-muted-foreground`}>
          © 2025 Yassine Echadani
        </p>
        <p className={`${karla.className} text-sm text-muted-foreground`}>
          All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
