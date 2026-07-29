'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { localeNames } from '@/i18n/config';

// Telugu and Hindi content is not yet translated.
// Clicking those options would land users on English pages served under a
// non-English URL prefix — a misleading experience. Instead, they are shown
// as "coming soon" to be honest about readiness without removing the options.
// Wire them to real navigation once translations land (FR-003 follow-up).
const COMING_SOON_LOCALES = ['te', 'hi'] as const;

export function FooterLanguageSwitcher() {
  const t = useTranslations('Footer');
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="text-governance-navy/50">{t('languageLabel')}:</span>

      {/* English — always navigable */}
      {activeLocale === 'en' ? (
        <span className="font-medium text-governance-navy">
          {localeNames['en']}
        </span>
      ) : (
        <button
          type="button"
          onClick={() => router.replace(pathname, { locale: 'en' })}
          className="text-governance-navy/70 underline underline-offset-2 transition hover:text-governance-navy"
        >
          {localeNames['en']}
        </button>
      )}

      {COMING_SOON_LOCALES.map((code) => (
        <span key={code} className="flex items-baseline gap-1">
          <span className="text-governance-navy/35">{localeNames[code]}</span>
          <span className="text-xs text-governance-navy/35">
            ({t('languageComingSoon')})
          </span>
        </span>
      ))}
    </div>
  );
}
