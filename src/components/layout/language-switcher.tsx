'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { locales, localeNames, type Locale } from '@/i18n/config';

// FR-003: persistent language switcher, each language shown in its own script.
// FR-004: next-intl's <Link>/router persist the NEXT_LOCALE cookie automatically,
// so the choice is honoured on the next visit and in engagement emails once
// that preference is synced server-side (see FR-004 note in newsletter form).
export function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function handleChange(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="sr-only">{t('label')}</span>
      <select
        aria-label={t('label')}
        value={activeLocale}
        onChange={(e) => handleChange(e.target.value as Locale)}
        className="border border-governance-navy/20 rounded px-2 py-1 bg-white"
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeNames[code]}
          </option>
        ))}
      </select>
    </label>
  );
}
