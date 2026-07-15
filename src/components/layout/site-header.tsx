import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './language-switcher';

export function SiteHeader() {
  const t = useTranslations('Nav');

  return (
    <header className="border-b border-governance-navy/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-governance-navy">
          Sarpanch Mitra
        </Link>

        {/* NFR-04: nav must remain keyboard-navigable; this is a placeholder
            structure — full mobile nav / hamburger pattern is a Gate 2 item. */}
        <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm">
          <Link href="/">{t('home')}</Link>
          <Link href="/platform">{t('platform')}</Link>
          <Link href="/pricing">{t('pricing')}</Link>
          <Link href="/about">{t('about')}</Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link
            href="/demo"
            className="bg-karyakarta-saffron text-governance-navy text-sm font-medium px-3 py-2 rounded"
          >
            {t('bookDemo')}
          </Link>
        </div>
      </div>
    </header>
  );
}
