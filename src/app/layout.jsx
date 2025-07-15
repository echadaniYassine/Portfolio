import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import Sidebar from '@/components/Sidebar';
import { getDictionary } from '@/lib/getDictionary';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({ params }) {
  const lang = params.lang;
  const dictionary = await getDictionary(lang);
  return {
    title: 'Echadani Yassine - Portfolio',
    description: dictionary.hero.title,

  };
}

export default async function RootLayout({ children, params }) {
  const lang = params.lang;
  const dictionary = await getDictionary(lang);

  return (
     <html lang={lang} className={`${inter.className} scroll-smooth`} suppressHydrationWarning>
      <head>
        {/* Add Google Fonts link here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kristi&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background dark:bg-dark-background text-foreground dark:text-dark-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen">
            <Sidebar lang={lang} dictionary={dictionary.sidebar} />
            <main className="ml-0 md:ml-96 flex-1 p-4 sm:p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
