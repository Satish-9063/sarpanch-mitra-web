import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { FooterLanguageSwitcher } from './footer-language-switcher';
import { WhatsAppFab } from './whatsapp-fab';

const NAV_LINKS = [
  { key: 'navVision', href: '/vision-2047' },
  { key: 'navTools',  href: '/tools' },
  { key: 'navAi',    href: '/ai' },
  { key: 'navAp2026', href: '/ap-2026' },
  { key: 'navJoin',  href: '/join' },
  { key: 'navContact', href: '/contact' },
] as const;

const LEGAL_LINKS = [
  { key: 'legalPrivacy',    href: '/privacy' },
  { key: 'legalTerms',      href: '/terms' },
  { key: 'legalNeutrality', href: '/political-neutrality' },
] as const;

export function SiteFooter() {
  const t = useTranslations('Footer');

  return (
    <footer className="mt-16 border-t border-governance-navy/10">
      <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">

        {/* Tagline */}
        <p className="text-base font-medium text-governance-navy">
          {t('tagline')}
        </p>

        {/* Nav + legal in two columns on md+ */}
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          {/* Page nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-governance-navy/70">
              {NAV_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="transition hover:text-governance-navy"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-governance-navy/70">
              {LEGAL_LINKS.map(({ key, href }) => (
                <li key={key}>
                  <Link
                    href={href}
                    className="transition hover:text-governance-navy"
                  >
                    {t(key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Language switcher */}
        <FooterLanguageSwitcher />

        {/* Bottom bar */}
        <div className="space-y-1 text-xs text-governance-navy/50">
          {/* SM-DPR-001 §1: neutrality note must remain visible; no removal without CEO sign-off. */}
          <p>{t('neutralityNote')}</p>
          <p>&copy; {new Date().getFullYear()} Sariki Technologies. {t('rightsReserved')}</p>
        </div>
      </div>

      {/* FR-031: WhatsApp click-to-chat FAB — fixed position, visible across all pages */}
      <WhatsAppFab />
    </footer>
  );
}
