// ✅ middleware.js
import { NextResponse } from 'next/server';
import Negotiator from 'negotiator';

const locales = ['en', 'fr'];
const defaultLocale = 'en';

function getLocale(request) {
  const headers = {};
  for (const [key, value] of request.headers.entries()) {
    headers[key] = value;
  }
  const negotiator = new Negotiator({ headers });
  const languages = negotiator.languages();
  return locales.find((locale) => languages.includes(locale)) || defaultLocale;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;
  if (pathname === '/') {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }
  if (locales.some((locale) => pathname.startsWith(`/${locale}`))) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, request.url));
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
