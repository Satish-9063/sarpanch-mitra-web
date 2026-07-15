import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
import { locales, defaultLocale } from './config';

// FR-002: locale-prefixed URL strategy (/en/, /te/, /hi/) on every route.
export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

// Typed, locale-aware Link / useRouter / usePathname / redirect helpers.
// Use these instead of next/link and next/navigation everywhere in the app,
// so switching locale (FR-003) always preserves the current route.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
