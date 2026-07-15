import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

// TODO (Gate 2/3): segmented hero (leader / office / party), value pillars,
// social proof, newsletter capture — see Section 4 "Home" row. This is the
// bare structural skeleton only.
export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-governance-navy">
        {t('heroTitle')}
      </h1>
      <p className="mt-4 text-lg text-governance-navy/80 max-w-2xl mx-auto">
        {t('heroSubtitle')}
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/demo"
          className="bg-karyakarta-saffron text-governance-navy font-medium px-5 py-3 rounded"
        >
          {t('ctaBookDemo')}
        </Link>
        <Link
          href="/platform"
          className="border border-governance-navy/20 text-governance-navy font-medium px-5 py-3 rounded"
        >
          {t('ctaLearnMore')}
        </Link>
      </div>
    </section>
  );
}
