import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

// FR-002: root URL redirects based on (a) saved preference, (b) browser
// Accept-Language, (c) default English — in that order. next-intl's
// middleware handles (b) and (c) automatically; saved-preference (a) is
// layered on top via the `NEXT_LOCALE` cookie it also manages (FR-004).
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except static assets, API routes, and Next internals.
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
