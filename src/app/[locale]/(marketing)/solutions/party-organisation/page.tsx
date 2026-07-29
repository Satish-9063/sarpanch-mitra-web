import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function PartyOrganisationSolutionsPage() {
  const t = useTranslations('Solutions');

  const painPoints = [
    {
      title: t('partyPainPoint1Title'),
      description: t('partyPainPoint1Description'),
    },
    {
      title: t('partyPainPoint2Title'),
      description: t('partyPainPoint2Description'),
    },
    {
      title: t('partyPainPoint3Title'),
      description: t('partyPainPoint3Description'),
    },
    {
      title: t('partyPainPoint4Title'),
      description: t('partyPainPoint4Description'),
    },
  ];

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16">
      <section className="rounded-3xl border border-governance-navy/10 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-karyakarta-saffron">
          {t('partyTitle')}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-governance-navy md:text-4xl">
          {t('partyTitle')}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-governance-navy/80">{t('partyIntro')}</p>
        <div className="mt-8">
          <Link
            href="/demo"
            className="inline-flex rounded bg-karyakarta-saffron px-5 py-3 font-medium text-governance-navy"
          >
            {t('partyCta')}
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {painPoints.map((item) => (
          <article key={item.title} className="rounded-2xl border border-governance-navy/10 bg-governance-navy/5 p-6">
            <h2 className="text-lg font-semibold text-governance-navy">{item.title}</h2>
            <p className="mt-2 text-sm leading-7 text-governance-navy/80">{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
