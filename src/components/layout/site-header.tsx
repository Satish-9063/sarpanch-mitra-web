import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { LanguageSwitcher } from './language-switcher';
import { MobileNav } from './mobile-nav';
import { BusinessHoursBadge } from './business-hours-badge';

export function SiteHeader() {
  const t = useTranslations('Nav');

  return (
    <header className="border-b border-governance-navy/10 relative">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
        <Link href="/" className="font-semibold text-governance-navy shrink-0">
          Sarpanch Mitra
        </Link>

        {/* NFR-04: keyboard-navigable nav. MobileNav delivers hamburger + focus management on small viewports. */}
        <nav aria-label="Primary" className="hidden md:flex gap-6 text-sm flex-1 justify-center">
          <Link href="/">{t('home')}</Link>
          <Link href="/platform">{t('platform')}</Link>
          <Link href="/pricing">{t('pricing')}</Link>
          <Link href="/about">{t('about')}</Link>
        </nav>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center gap-3 ml-auto">
          <BusinessHoursBadge />
          <LanguageSwitcher />
          <Link
            href="/demo"
            className="bg-karyakarta-saffron text-governance-navy text-sm font-medium px-3 py-2 rounded"
          >
            {t('bookDemo')}
          </Link>
        </div>

        {/* Mobile right actions */}
        <div className="flex md:hidden items-center gap-2 ml-auto">
          <LanguageSwitcher />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
