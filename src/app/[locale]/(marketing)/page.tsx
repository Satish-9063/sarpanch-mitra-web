'use client';

import { type FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

type Persona = 'leader' | 'office' | 'party';

export default function HomePage({ params }: { params: { locale: string } }) {
  const t = useTranslations('Home');
  const [activePersona, setActivePersona] = useState<Persona>('leader');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [audienceSegment, setAudienceSegment] = useState('');
  const [status, setStatus] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const personaCopy = {
    leader: {
      badge: t('heroLeaderBadge'),
      title: t('heroLeaderTitle'),
      subtitle: t('heroLeaderSubtitle'),
      points: [t('heroLeaderPoint1'), t('heroLeaderPoint2'), t('heroLeaderPoint3')],
    },
    office: {
      badge: t('heroOfficeBadge'),
      title: t('heroOfficeTitle'),
      subtitle: t('heroOfficeSubtitle'),
      points: [t('heroOfficePoint1'), t('heroOfficePoint2'), t('heroOfficePoint3')],
    },
    party: {
      badge: t('heroPartyBadge'),
      title: t('heroPartyTitle'),
      subtitle: t('heroPartySubtitle'),
      points: [t('heroPartyPoint1'), t('heroPartyPoint2'), t('heroPartyPoint3')],
    },
  };

  const valuePillars = [
    { title: t('valuePillar1Title'), description: t('valuePillar1Body') },
    { title: t('valuePillar2Title'), description: t('valuePillar2Body') },
    { title: t('valuePillar3Title'), description: t('valuePillar3Body') },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setStatus(null);

    if (!email.trim()) {
      setError(t('newsletterEmailRequired'));
      return;
    }

    const response = await fetch('/api/forms/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.trim(),
        name: name.trim() || undefined,
        locale: params.locale,
        audienceSegment: audienceSegment || undefined,
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      setError(data?.error ?? t('newsletterGenericError'));
      return;
    }

    setStatus(t('newsletterSuccessMessage'));
    setEmail('');
    setName('');
    setAudienceSegment('');
  };

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
      <section className="rounded-3xl border border-governance-navy/10 bg-white p-8 shadow-sm md:p-12">
        <div className="flex flex-wrap gap-3">
          {(['leader', 'office', 'party'] as Persona[]).map((persona) => (
            <button
              key={persona}
              type="button"
              onClick={() => setActivePersona(persona)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                activePersona === persona
                  ? 'border-karyakarta-saffron bg-karyakarta-saffron/15 text-governance-navy'
                  : 'border-governance-navy/10 text-governance-navy/80 hover:border-governance-navy/30'
              }`}
            >
              {t(`hero${persona.charAt(0).toUpperCase() + persona.slice(1)}Badge`)}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-karyakarta-saffron">
              {personaCopy[activePersona].badge}
            </p>
            <h1 className="mt-3 text-3xl font-semibold text-governance-navy md:text-5xl">
              {personaCopy[activePersona].title}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-governance-navy/80">
              {personaCopy[activePersona].subtitle}
            </p>
            <ul className="mt-6 space-y-2 text-left text-governance-navy/80">
              {personaCopy[activePersona].points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-karyakarta-saffron" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/demo"
                className="rounded bg-karyakarta-saffron px-5 py-3 font-medium text-governance-navy"
              >
                {t('ctaBookDemo')}
              </Link>
              <Link
                href="/platform"
                className="rounded border border-governance-navy/20 px-5 py-3 font-medium text-governance-navy"
              >
                {t('ctaLearnMore')}
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-governance-navy p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-karyakarta-saffron">
              {t('heroInsightLabel')}
            </p>
            <h2 className="mt-3 text-xl font-semibold">{t('heroInsightTitle')}</h2>
            <p className="mt-3 text-sm leading-7 text-white/80">{t('heroInsightBody')}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {valuePillars.map((pillar) => (
          <article key={pillar.title} className="rounded-2xl border border-governance-navy/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-governance-navy">{pillar.title}</h3>
            <p className="mt-2 text-sm leading-7 text-governance-navy/80">{pillar.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-governance-navy/10 bg-governance-navy/5 p-8">
        <h2 className="text-2xl font-semibold text-governance-navy">{t('socialProofTitle')}</h2>
        <p className="mt-3 max-w-3xl text-governance-navy/80">{t('socialProofPlaceholder')}</p>
      </section>

      <section className="rounded-3xl border border-governance-navy/10 bg-white p-8 shadow-sm">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-karyakarta-saffron">
              {t('newsletterEyebrow')}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-governance-navy">{t('newsletterTitle')}</h2>
            <p className="mt-3 text-governance-navy/80">{t('newsletterDescription')}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="newsletter-name" className="mb-2 block text-sm font-medium text-governance-navy">
                {t('newsletterNameLabel')}
              </label>
              <input
                id="newsletter-name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded border border-governance-navy/20 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="newsletter-email" className="mb-2 block text-sm font-medium text-governance-navy">
                {t('newsletterEmailLabel')}
              </label>
              <input
                id="newsletter-email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded border border-governance-navy/20 px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="newsletter-audience" className="mb-2 block text-sm font-medium text-governance-navy">
                {t('newsletterAudienceLabel')}
              </label>
              <select
                id="newsletter-audience"
                name="audienceSegment"
                value={audienceSegment}
                onChange={(event) => setAudienceSegment(event.target.value)}
                className="w-full rounded border border-governance-navy/20 px-3 py-2"
              >
                <option value="">{t('newsletterAudiencePlaceholder')}</option>
                <option value="leader">{t('heroLeaderBadge')}</option>
                <option value="office">{t('heroOfficeBadge')}</option>
                <option value="party">{t('heroPartyBadge')}</option>
              </select>
            </div>
            <button
              type="submit"
              className="rounded bg-governance-navy px-5 py-3 font-medium text-white"
            >
              {t('newsletterSubmit')}
            </button>
            {error ? <p className="text-sm text-red-600">{error}</p> : null}
            {status ? <p className="text-sm text-governance-navy/80">{status}</p> : null}
          </form>
        </div>
      </section>
    </main>
  );
}
