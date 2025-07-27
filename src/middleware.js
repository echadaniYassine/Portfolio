import { NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/
const locales = ['en', 'fr']
const defaultLocale = 'en'

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip public files and API routes
  if (
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname) ||
    pathname.includes('/_next/')
  ) {
    return NextResponse.next()
  }

  // If path already includes a locale, continue
  const hasLocale = locales.some((locale) =>
    pathname.startsWith(`/${locale}`)
  )
  if (hasLocale) {
    return NextResponse.next()
  }

  // Redirect `/` or unknown path to `/en` (default)
  const url = request.nextUrl.clone()
  url.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(url)
}
