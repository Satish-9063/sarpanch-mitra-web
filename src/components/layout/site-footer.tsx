import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export function SiteFooter() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-governance-navy/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-governance-navy/70 flex flex-col gap-4">
        {/* Positioning constraint carried over from SM-DPR-001 — must remain
            visible; do not remove without CEO sign-off (Section 1 of SM-WEB-001). */}
        <p>{t('neutralityNote')}</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/dpdpa-notice">DPDPA Notice</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Sariki Technologies. {t('rightsReserved')}</p>
      </div>
    </footer>
  );
}
