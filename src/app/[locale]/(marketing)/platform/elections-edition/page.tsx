import { useTranslations } from '@/i18n/compat';
import { Link } from '@/i18n/routing';
import { NotifyForm } from './_notify-form';

// FR-034: Elections Edition landing — hero, SM-EE onboarding CTA, notify-me capture
export default function ElectionsEditionPage() {
  const t = useTranslations('Platform');

  return (
    <div>
      <section className="bg-governance-navy px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-white md:text-6xl">
            {t('electionsEdition.heroTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            {t('electionsEdition.heroSubtitle')}
          </p>
          <div className="mt-10">
            {/* SM-EE onboarding — placeholder until the onboarding flow is live */}
            <Link
              href="/elections-edition/onboarding"
              className="inline-block rounded bg-karyakarta-saffron px-8 py-4 text-lg font-semibold text-governance-navy transition-colors hover:bg-karyakarta-saffron-700"
            >
              {t('electionsEdition.ctaOnboarding')}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h2 className="text-2xl font-semibold text-governance-navy">
          {t('electionsEdition.notifyHeading')}
        </h2>
        <p className="mt-3 text-governance-navy/70">
          {t('electionsEdition.notifyDescription')}
        </p>
        <div className="mt-8">
          <NotifyForm />
        </div>
      </section>
    </div>
  );
}
