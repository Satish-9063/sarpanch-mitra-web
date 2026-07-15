import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import type { Locale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale: Locale =
    requested && (routing.locales as readonly string[]).includes(requested)
      ? (requested as Locale)
      : routing.defaultLocale;

  // FR-006: fallback chain (missing Telugu -> English). Individual pages/components
  // should still surface a visible "available in English" notice where content,
  // rather than UI strings, is missing for a locale.
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages,
  };
});
