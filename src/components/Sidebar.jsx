'use client';

import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher';
import LanguageSwitcher from './LanguageSwitcher';
import { HomeIcon, UserIcon, WrenchScrewdriverIcon, BriefcaseIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Example using react-icons

const Sidebar = ({ lang, dictionary }) => {
  const navLinks = [
    { name: dictionary.home, href: `#home`, icon: HomeIcon },
    { name: dictionary.about, href: `#about`, icon: UserIcon },
    { name: dictionary.services, href: `#services`, icon: WrenchScrewdriverIcon },
    { name: dictionary.portfolio, href: `#portfolio`, icon: BriefcaseIcon },
    { name: dictionary.contact, href: `#contact`, icon: EnvelopeIcon },
  ];

  return (
    // Changed: Use new color classes
    <aside className="fixed left-0 top-0 h-full w-64 bg-card dark:bg-dark-card text-foreground dark:text-dark-foreground p-6 flex-col justify-between hidden md:flex border-r border-border dark:border-dark-border">
      <div>
        <div className="text-center mb-12">
            <img src="/yassine-avatar.png" alt="Echadani Yassine" className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary dark:border-dark-primary"/>
            <h1 className="text-xl font-bold">Echadani Yassine</h1>
        </div>
        <nav className="space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                // Changed: Improved hover effects and transitions
                className="flex items-center space-x-3 p-3 rounded-lg text-foreground/70 dark:text-dark-foreground/70 hover:bg-primary/10 hover:text-primary dark:hover:bg-dark-primary/10 dark:hover:text-dark-primary font-medium transition-all duration-200"
              >
                <Icon className="h-6 w-6" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>
      </div>

      <div className="space-y-6">
        <LanguageSwitcher lang={lang} />
        <ThemeSwitcher dictionary={dictionary} />
        <div className="flex justify-center space-x-4 pt-6 border-t border-border dark:border-dark-border">
            {/* New: Added real social icons with hover effects */}
            <a href="#" className="text-foreground/60 hover:text-primary dark:hover:text-dark-primary transition-transform hover:scale-110"><FaLinkedin size={20} /></a>
            <a href="#" className="text-foreground/60 hover:text-primary dark:hover:text-dark-primary transition-transform hover:scale-110"><FaGithub size={20} /></a>
            <a href="#" className="text-foreground/60 hover:text-primary dark:hover:text-dark-primary transition-transform hover:scale-110"><FaTwitter size={20} /></a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
// Note: You may need to install react-icons: npm install react-icons