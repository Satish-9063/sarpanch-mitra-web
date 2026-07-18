import { useEffect } from 'react';
import { Outlet, useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isValidLocale, defaultLocale } from '@/i18n/config';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { FeedbackButton } from '@/components/feedback/feedback-button';

/** Detects the user's preferred locale per FR-002 priority order. */
function detectLocale(): string {
  const saved = localStorage.getItem('LOCALE_PREFERENCE');
  if (saved && isValidLocale(saved)) return saved;

  const browser = navigator.language.split('-')[0];
  if (isValidLocale(browser)) return browser;

  return defaultLocale;
}

/**
 * Wraps every /:locale/* route.
 * - Validates the locale param and redirects to the detected locale if invalid.
 * - Syncs the i18next language and html[lang] whenever the locale changes.
 * - Renders the shared chrome (header / footer / feedback widget).
 */
export function LocaleLayout() {
  const { locale } = useParams<{ locale: string }>();
  const { i18n } = useTranslation();

  const validLocale = locale && isValidLocale(locale) ? locale : null;

  useEffect(() => {
    if (!validLocale) return;
    if (i18n.language !== validLocale) {
      i18n.changeLanguage(validLocale);
    }
    document.documentElement.lang = validLocale;
  }, [validLocale, i18n]);

  if (!validLocale) {
    return <Navigate to={`/${detectLocale()}`} replace />;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FeedbackButton />
    </div>
  );
}
