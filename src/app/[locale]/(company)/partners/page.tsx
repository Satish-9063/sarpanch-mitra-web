import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const PARTNER_TYPES = [
  {
    label: 'Government & Public Sector',
    desc: 'State and central government departments deploying AI in civic services, agriculture extension, and constituency management.',
  },
  {
    label: 'Research Institutions',
    desc: 'Universities and R&D labs collaborating on agri-AI, governance AI, or educational technology.',
  },
  {
    label: 'NGOs & Civil Society',
    desc: 'Organisations delivering last-mile citizen services who need AI-native operational tools.',
  },
  {
    label: 'Enterprises',
    desc: 'Companies undergoing AI transformation who need a trusted implementation partner with deep domain context.',
  },
];

export default function PartnersPage() {
  const t = useTranslations('Company');

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-governance-navy">
        {t('Partners.title')}
      </h1>
      <p className="mt-3 text-lg text-governance-navy/70">{t('Partners.subtitle')}</p>

      <p className="mt-6 text-governance-navy/80 leading-relaxed">{t('Partners.body')}</p>

      <div className="mt-8 grid gap-4">
        {PARTNER_TYPES.map((type) => (
          <div key={type.label} className="border border-governance-navy/10 rounded-lg p-5">
            <h2 className="font-semibold text-governance-navy">{type.label}</h2>
            <p className="mt-1 text-sm text-governance-navy/70">{type.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 border border-governance-navy/10 rounded-xl p-8 bg-governance-navy/[0.02]">
        <p className="text-sm text-governance-navy/70">
          Partnership enquiries are reviewed by our CEO and Business Development team. Please
          include your organisation name, type, and a brief description of the collaboration you
          have in mind.
        </p>
        <Link
          href="/contact?enquiryType=partnership"
          className="mt-6 inline-block bg-karyakarta-saffron text-governance-navy font-medium px-6 py-3 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-karyakarta-saffron"
        >
          {t('Partners.enquireButton')}
        </Link>
      </div>
    </div>
  );
}
