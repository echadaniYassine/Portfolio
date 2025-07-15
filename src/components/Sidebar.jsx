'use client';
import { useEffect, useState } from 'react';
import { Karla, Kristi } from 'next/font/google';
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';

import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-karla',
});

const kristi = Kristi({
  subsets: ['latin'],
  weight: '400',
});

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
        threshold: 0
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
    <aside className="fixed left-0 top-0 flex h-full w-92 flex-col items-center bg-white py-10">
      {/* Top section: Profile */}
      <div className="flex flex-col items-center">
        <div className="mx-auto h-35 w-35 rounded-full bg-purple-100 p-1">
          <img
            src="yassine-nav.jpg"
            alt="Echadani Yassine"
            fill
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="relative text-center">
          <h1 className={`${kristi.className} text-[96px] font-bold text-gray-500/10`}>
            Yassine
          </h1>
          <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-gray-800 whitespace-nowrap">
            Echadani Yassine
          </h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col items-center justify-center space-y-6">
        {navLinks.map((link) => {
          const sectionId = link.href.replace('#', '');
          const isActive = sectionId === activeSection;

          return (
            <a
              key={link.name}
              href={link.href}
              className={`${karla.className} text-lg font-normal transition-colors duration-300 ${isActive ? 'text-purple-500 font-semibold' : 'text-gray-600 hover:text-purple-500'
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


      {/* Bottom: Social Icons and Copyright */}
      <div className="text-center pb-5">
        <div className="mb-4 flex flex-row items-center justify-center space-x-2">
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <FaFacebookF className="h-4 w-4 text-gray-700" />
          </a>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <FaTwitter className="h-4 w-4 text-gray-700" />
          </a>
          <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
            <FaYoutube className="h-4 w-4 text-gray-700" />
          </a>
        </div>

        <p className={`${karla.className} mt-6 text-lg text-[#130F49] leading-tight`}>
          © 2025 Yassine Echadani
        </p>
        <p className={`${karla.className} mt-2 text-lg text-[#130F49] leading-tight`}>
          All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
