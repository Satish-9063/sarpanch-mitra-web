import { useTranslations } from '@/i18n/compat';

const SECTIONS = [
  {
    heading: '1. Who We Are',
    body: '[PLACEHOLDER — legal review required] Data Fiduciary: Sariki Technologies, Visakhapatnam, Andhra Pradesh, India.',
  },
  {
    heading: '2. Data We Collect',
    body: '[PLACEHOLDER — legal review required] Categories of personal data collected across Sarpanch Mitra (civic data) and FarmTally (farmer PII), including name, contact information, location, and usage data.',
  },
  {
    heading: '3. How We Use Your Data',
    body: '[PLACEHOLDER — legal review required] Purposes of processing, legal bases, and retention periods.',
  },
  {
    heading: '4. Data Sharing',
    body: '[PLACEHOLDER — legal review required] Circumstances in which data may be shared with third parties, processors, and government bodies.',
  },
  {
    heading: '5. Your Rights',
    body: '[PLACEHOLDER — legal review required] Rights under DPDPA (access, correction, erasure, grievance) and GDPR where applicable. See DPDPA Notice for the deletion request procedure.',
  },
  {
    heading: '6. Data Security',
    body: '[PLACEHOLDER — legal review required] Technical and organisational measures, including GCP encryption at rest/in transit, access controls, and audit logging.',
  },
  {
    heading: '7. International Transfers',
    body: '[PLACEHOLDER — legal review required] Any transfers outside India and the safeguards applied (GDPR-equivalent protections).',
  },
  {
    heading: '8. Contact',
    body: 'For privacy enquiries: legal@sarikitechnologies.com',
  },
];

export default function PrivacyPage() {
  const t = useTranslations('Legal');

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-governance-navy">{t('Privacy.title')}</h1>
      <p className="mt-2 text-sm text-governance-navy/50">{t('lastUpdated')}</p>

      <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-5 py-4 text-sm text-amber-800">
        {t('placeholder')}
      </div>

      <div className="mt-8 space-y-8">
        {SECTIONS.map(({ heading, body }) => (
          <section key={heading}>
            <h2 className="text-base font-semibold text-governance-navy">{heading}</h2>
            <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
