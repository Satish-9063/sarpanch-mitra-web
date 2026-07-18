import { useTranslations } from '@/i18n/compat';
import { Link } from '@/i18n/routing';

export default function CareersPage() {
  const t = useTranslations('Company');

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-governance-navy">
        {t('Careers.title')}
      </h1>
      <p className="mt-3 text-lg text-governance-navy/70">{t('Careers.subtitle')}</p>

      <div className="mt-8 border border-governance-navy/10 rounded-xl p-8">
        <p className="text-governance-navy/80 leading-relaxed">{t('Careers.body')}</p>

        <div className="mt-6 space-y-3 text-sm text-governance-navy/70">
          <p>
            <strong className="text-governance-navy">What we look for:</strong> Engineers who care
            about correctness, researchers excited by real-world deployment, and domain experts in
            agriculture, civic governance, or education technology.
          </p>
          <p>
            <strong className="text-governance-navy">How we work:</strong> Every role participates
            in the GenAI SDLC discipline — gate-cleared, sprint-tracked, and production-focused.
          </p>
          <p>
            <strong className="text-governance-navy">Location:</strong> Visakhapatnam, AP (primary).
            Remote considered for senior roles.
          </p>
        </div>

        <Link
          href="/contact?enquiryType=careers"
          className="mt-8 inline-block bg-karyakarta-saffron text-governance-navy font-medium px-6 py-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-karyakarta-saffron"
        >
          {t('Careers.applyButton')}
        </Link>
      </div>
    </div>
  );
}
