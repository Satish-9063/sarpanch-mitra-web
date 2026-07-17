import { useTranslations } from 'next-intl';

const COOKIE_TYPES = [
  {
    name: 'Strictly Necessary',
    purpose:
      'Session management, authentication state, locale preference (NEXT_LOCALE). Cannot be disabled without breaking core functionality.',
    examples: 'Session cookie, locale cookie.',
    retention: 'Session / up to 1 year.',
  },
  {
    name: 'Analytics',
    purpose: '[PLACEHOLDER — legal review required] Usage statistics to improve the platform.',
    examples: '[PLACEHOLDER]',
    retention: '[PLACEHOLDER]',
  },
  {
    name: 'Functional',
    purpose: '[PLACEHOLDER — legal review required] Enhanced features such as saved preferences.',
    examples: '[PLACEHOLDER]',
    retention: '[PLACEHOLDER]',
  },
];

const TRAILING_SECTIONS = [
  {
    heading: '4. Managing Cookies',
    body: '[PLACEHOLDER — legal review required] How to disable or delete cookies via browser settings, and the impact of doing so on platform functionality.',
  },
  {
    heading: '5. Updates to This Policy',
    body: '[PLACEHOLDER — legal review required] We may update this policy. Continued use after an update constitutes acceptance.',
  },
  {
    heading: '6. Contact',
    body: 'For cookie-related enquiries: legal@sarikitechnologies.com',
  },
];

export default function CookiePolicyPage() {
  const t = useTranslations('Legal');

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-governance-navy">{t('CookiePolicy.title')}</h1>
      <p className="mt-2 text-sm text-governance-navy/50">{t('lastUpdated')}</p>

      <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-5 py-4 text-sm text-amber-800">
        {t('placeholder')}
      </div>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">1. What Are Cookies</h2>
        <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">
          [PLACEHOLDER — legal review required] Cookies are small text files stored on your device
          when you visit a website. They help the site remember your preferences and understand how
          you use it.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">2. Cookies We Use</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-governance-navy/10">
                <th className="text-left py-2 pr-4 font-semibold text-governance-navy">Type</th>
                <th className="text-left py-2 pr-4 font-semibold text-governance-navy">Purpose</th>
                <th className="text-left py-2 pr-4 font-semibold text-governance-navy">Examples</th>
                <th className="text-left py-2 font-semibold text-governance-navy">Retention</th>
              </tr>
            </thead>
            <tbody>
              {COOKIE_TYPES.map((row) => (
                <tr key={row.name} className="border-b border-governance-navy/5">
                  <td className="py-3 pr-4 font-medium text-governance-navy align-top">{row.name}</td>
                  <td className="py-3 pr-4 text-governance-navy/70 align-top">{row.purpose}</td>
                  <td className="py-3 pr-4 text-governance-navy/70 align-top">{row.examples}</td>
                  <td className="py-3 text-governance-navy/70 align-top">{row.retention}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">3. Third-Party Cookies</h2>
        <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">
          [PLACEHOLDER — legal review required] Any third-party services embedded in the platform
          and the cookies they set.
        </p>
      </section>

      {TRAILING_SECTIONS.map(({ heading, body }) => (
        <section key={heading} className="mt-8">
          <h2 className="text-base font-semibold text-governance-navy">{heading}</h2>
          <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">{body}</p>
        </section>
      ))}
    </div>
  );
}
