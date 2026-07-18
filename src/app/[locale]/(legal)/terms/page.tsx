import { useTranslations } from '@/i18n/compat';

const SECTIONS = [
  {
    heading: '1. Acceptance',
    body: '[PLACEHOLDER — legal review required] By accessing or using Sarpanch Mitra, you agree to these Terms of Service.',
  },
  {
    heading: '2. Description of Service',
    body: '[PLACEHOLDER — legal review required] Sarpanch Mitra is a digital governance platform for panchayat leaders and constituency offices operated by Sariki Technologies.',
  },
  {
    heading: '3. Permitted Use',
    body: '[PLACEHOLDER — legal review required] Authorised use cases, prohibited activities, and user responsibilities.',
  },
  {
    heading: '4. Accounts & Access',
    body: '[PLACEHOLDER — legal review required] Account creation, credentials, and responsibilities for account security.',
  },
  {
    heading: '5. Intellectual Property',
    body: '[PLACEHOLDER — legal review required] Ownership of the platform, content, and any user-generated data.',
  },
  {
    heading: '6. Limitation of Liability',
    body: '[PLACEHOLDER — legal review required] Disclaimers, caps on liability, and exclusions.',
  },
  {
    heading: '7. Termination',
    body: '[PLACEHOLDER — legal review required] Grounds and process for account suspension or termination.',
  },
  {
    heading: '8. Governing Law',
    body: '[PLACEHOLDER — legal review required] Jurisdiction: Visakhapatnam, Andhra Pradesh, India. Applicable law: Indian IT Act, DPDPA, and relevant state legislation.',
  },
  {
    heading: '9. Changes to Terms',
    body: '[PLACEHOLDER — legal review required] Process for updating these terms and notification to users.',
  },
  {
    heading: '10. Contact',
    body: 'For terms-related enquiries: legal@sarikitechnologies.com',
  },
];

export default function TermsPage() {
  const t = useTranslations('Legal');

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-governance-navy">{t('Terms.title')}</h1>
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
