import { useTranslations } from '@/i18n/compat';

const BUSINESS_LINES = [
  {
    name: 'R&D Products',
    detail:
      'FarmTally (agri-fintech), Sarpanch Mitra (gram panchayat governance), K12 Career Guidance AI, Sariki Campus AI, Farm Robotics.',
  },
  {
    name: 'GenAI SDLC Programme',
    detail:
      'Cohort-based intern training and product delivery engine — 28 active interns per cohort building production-grade AI software.',
  },
  {
    name: 'Client AI Implementation',
    detail:
      'Enterprise and government AI transformation projects across Andhra Pradesh and beyond.',
  },
];

const TEAM_ROLES = [
  'Leadership & Strategy',
  'Product & Delivery Management',
  'Technical Architecture & Engineering',
  'Cloud Infrastructure & Security',
  'Business Analysis & Scrum',
  'Business Development & Partnerships',
  'System Administration',
];

export default function AboutPage() {
  const t = useTranslations('Company');

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-governance-navy">
        {t('About.title')}
      </h1>
      <p className="mt-3 text-lg text-governance-navy/70">{t('About.subtitle')}</p>

      {/* Who We Are */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-governance-navy">{t('About.overviewTitle')}</h2>
        <div className="mt-4 space-y-3 text-governance-navy/80 leading-relaxed">
          <p>
            Sariki Technologies is an AI-native software company founded by Prasad Sariki (CEO),
            headquartered in Visakhapatnam, Andhra Pradesh, India.
          </p>
          <p>
            We build AI infrastructure for civic governance, agriculture, and education — designed
            for the Indian context from day one, with multi-language support (Telugu, Hindi, English)
            and DPDPA compliance at the core.
          </p>
          <p>
            Our primary cloud is GCP (Vertex AI, Cloud Run, BigQuery, Firebase) in the Mumbai
            region, with AWS for DR and Azure for government compliance workloads.
          </p>
        </div>
      </section>

      {/* What We Build */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-governance-navy">
          {t('About.businessLinesTitle')}
        </h2>
        <div className="mt-4 grid gap-4">
          {BUSINESS_LINES.map((line) => (
            <div key={line.name} className="border border-governance-navy/10 rounded-lg p-5">
              <h3 className="font-semibold text-governance-navy">{line.name}</h3>
              <p className="mt-1 text-sm text-governance-navy/70">{line.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GenAI SDLC Programme */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-governance-navy">{t('About.genAiTitle')}</h2>
        <p className="mt-3 text-governance-navy/80 leading-relaxed">{t('About.genAiBody')}</p>
        <p className="mt-3 text-governance-navy/80 leading-relaxed">
          Every intern follows a four-gate AI coding discipline before any implementation code is
          written: Ubiquitous Language → Interface Design → Test Contract → Scope Boundary. Gate
          compliance target is ≥ 80%. All output is traceable to a sprint task.
        </p>
      </section>

      {/* The Team */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold text-governance-navy">{t('About.teamTitle')}</h2>
        <p className="mt-2 text-sm text-governance-navy/70">
          Our team spans the following functional areas:
        </p>
        <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
          {TEAM_ROLES.map((role) => (
            <li key={role} className="flex items-center gap-2 text-sm text-governance-navy/80">
              <span
                className="w-1.5 h-1.5 rounded-full bg-karyakarta-saffron shrink-0"
                aria-hidden="true"
              />
              {role}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
