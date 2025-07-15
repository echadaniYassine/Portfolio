import { NextResponse } from 'next/server';
import Negotiator from 'negotiator';
import { match } from '@formatjs/intl-localematcher';

const locales = ['en', 'fr'];
const defaultLocale = 'en';

// Get the preferred locale from the request headers.
function getLocale(request) {
  const headers = {};
  request.headers.forEach((value, key) => (headers[key] = value));

  // Get the list of languages from the 'accept-language' header.
  const languages = new Negotiator({ headers }).languages();

  // Find the best match between browser languages and our supported locales.
  return match(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if the path already has a locale prefix (e.g., /en/about).
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // If the path already has a locale, do nothing.
  if (pathnameHasLocale) {
    return;
  }

  // If the path does NOT have a locale, redirect to the preferred locale.
  // e.g., if a user visits /about, redirect them to /en/about.
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  // Use a 308 permanent redirect.
  return NextResponse.redirect(request.nextUrl);
}

// Define which paths the middleware should run on.
export const config = {
  matcher: [
    // Skip paths that are used by Next.js or for static assets.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};