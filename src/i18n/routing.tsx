/**
 * Locale-aware navigation helpers — same public API as the old next-intl/navigation
 * wrappers so import sites are unchanged after the Vite migration.
 *
 * FR-002: every internal link must carry the active locale prefix (/en/, /te/, /hi/).
 * FR-003: language switching preserves the current route.
 * FR-004: locale preference is persisted in localStorage ('LOCALE_PREFERENCE').
 */
import { Link as RouterLink, useNavigate, useLocation, useParams } from 'react-router-dom';
import type { ComponentPropsWithoutRef } from 'react';

// ------------------------------------------------------------------
// Link
// ------------------------------------------------------------------

type LinkProps = Omit<ComponentPropsWithoutRef<typeof RouterLink>, 'to'> & {
  href: string;
};

/** Locale-aware <Link>. Prepends /:locale to relative hrefs automatically. */
export function Link({ href, ...props }: LinkProps) {
  const { locale } = useParams<{ locale: string }>();
  const to = href.startsWith('/') ? `/${locale ?? 'en'}${href}` : href;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <RouterLink to={to} {...(props as any)} />;
}

// ------------------------------------------------------------------
// useRouter
// ------------------------------------------------------------------

interface RouterInstance {
  push(href: string): void;
  replace(href: string, options?: { locale?: string }): void;
  back(): void;
}

/**
 * Mimics next-intl's useRouter.
 * router.replace(pathname, { locale }) switches language while staying on the
 * same route and also persists the choice to localStorage (FR-004).
 */
export function useRouter(): RouterInstance {
  const navigate = useNavigate();
  const { locale } = useParams<{ locale: string }>();
  const currentLocale = locale ?? 'en';

  return {
    push: (href: string) => navigate(`/${currentLocale}${href}`),
    replace: (href: string, options?: { locale?: string }) => {
      const target = options?.locale ?? currentLocale;
      if (options?.locale) {
        localStorage.setItem('LOCALE_PREFERENCE', target);
      }
      navigate(`/${target}${href}`, { replace: true });
    },
    back: () => navigate(-1),
  };
}

// ------------------------------------------------------------------
// usePathname
// ------------------------------------------------------------------

/**
 * Returns the pathname without the locale prefix, matching next-intl's
 * behaviour so the language switcher can call router.replace(pathname, { locale }).
 */
export function usePathname(): string {
  const { pathname } = useLocation();
  const { locale } = useParams<{ locale: string }>();
  if (locale && pathname.startsWith(`/${locale}`)) {
    return pathname.slice(locale.length + 1) || '/';
  }
  return pathname;
}

// ------------------------------------------------------------------
// Rarely-used helpers kept for API surface parity
// ------------------------------------------------------------------

export function redirect(_href: string): never {
  throw new Error('redirect() is not supported in the Vite SPA — use useNavigate() instead');
}

export function getPathname({ href, locale }: { href: string; locale: string }): string {
  return `/${locale}${href}`;
}
