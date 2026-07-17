import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

/**
 * NFR-06: Documents the data-subject deletion path per DPDPA.
 * Products covered: Sarpanch Mitra (civic data), FarmTally (farmer PII).
 * Do not remove or stub Section 5 without DPO sign-off.
 */
export default function DpdpaNoticePage() {
  const t = useTranslations('Legal');

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-governance-navy">{t('DpdpaNotice.title')}</h1>
      <p className="mt-2 text-sm text-governance-navy/50">{t('lastUpdated')}</p>

      <div className="mt-4 rounded-lg bg-amber-50 border border-amber-200 px-5 py-4 text-sm text-amber-800">
        {t('placeholder')}
      </div>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">1. Applicability</h2>
        <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">
          This notice applies to personal data processed by Sariki Technologies under the Digital
          Personal Data Protection Act, 2023 (DPDPA). Products covered:{' '}
          <strong>Sarpanch Mitra</strong> (civic data — panchayat leaders and constituents) and{' '}
          <strong>FarmTally</strong> (farmer PII). Intern HR records are processed under a separate
          internal HR policy.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">2. Data Fiduciary</h2>
        <address className="mt-2 text-sm text-governance-navy/75 not-italic leading-relaxed">
          Sariki Technologies<br />
          Visakhapatnam, Andhra Pradesh, India<br />
          Contact:{' '}
          <a href="mailto:dpo@sarikitechnologies.com" className="underline">
            dpo@sarikitechnologies.com
          </a>
        </address>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">
          3. Categories of Personal Data Collected
        </h2>
        <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">
          [PLACEHOLDER — legal review required] Categories to be enumerated per product after data
          mapping exercise. Expected categories: identity data, contact data, location data, usage
          logs, and device identifiers.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">4. Purpose of Processing</h2>
        <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">
          [PLACEHOLDER — legal review required] Specific purposes per product, consent basis, and
          legitimate interest assessments where applicable.
        </p>
      </section>

      {/* NFR-06: Deletion path — mandatory, do not stub out */}
      <section className="mt-8 border-2 border-governance-navy/20 rounded-xl p-6">
        <h2 className="text-base font-semibold text-governance-navy">
          5. {t('DpdpaNotice.deletionTitle')}
        </h2>
        <p className="mt-2 text-sm text-governance-navy/75">
          Under DPDPA Sections 12 and 14, you have the right to request erasure of your personal
          data. Follow the steps below:
        </p>

        <ol className="mt-4 space-y-4 text-sm text-governance-navy/80">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-karyakarta-saffron text-governance-navy text-xs font-bold flex items-center justify-center">
              1
            </span>
            <div>
              <strong>Submit a deletion request.</strong>{' '}
              {t('DpdpaNotice.deletionContact')}{' '}
              <a href="mailto:dpo@sarikitechnologies.com" className="underline">
                dpo@sarikitechnologies.com
              </a>{' '}
              or use our{' '}
              <Link href="/contact?enquiryType=data-deletion" className="underline">
                data deletion form
              </Link>
              . Include your full name, registered email address, the product (Sarpanch Mitra /
              FarmTally), and any account identifiers.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-karyakarta-saffron text-governance-navy text-xs font-bold flex items-center justify-center">
              2
            </span>
            <div>
              <strong>Identity verification.</strong> We will send a verification email to the
              address on file within 3 business days. Processing begins only after verification is
              complete.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-karyakarta-saffron text-governance-navy text-xs font-bold flex items-center justify-center">
              3
            </span>
            <div>
              <strong>Processing timeline.</strong> Upon verified request, deletion is completed
              within <strong>30 days</strong> as required by DPDPA Section 14(3). A confirmation
              email is sent when deletion is complete.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-karyakarta-saffron text-governance-navy text-xs font-bold flex items-center justify-center">
              4
            </span>
            <div>
              <strong>Scope of deletion.</strong> [PLACEHOLDER — legal review required] All personal
              data associated with your account will be deleted from active systems. Anonymised
              aggregate analytics that cannot be re-identified are not subject to erasure.
            </div>
          </li>

          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-karyakarta-saffron text-governance-navy text-xs font-bold flex items-center justify-center">
              5
            </span>
            <div>
              <strong>Retention exceptions.</strong> Data required by law will be retained (e.g.,
              financial records under GST obligations, audit logs required by CERT-In rules). You
              will be notified of any such exceptions at the time of your request.
            </div>
          </li>
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">
          6. Other Data Subject Rights
        </h2>
        <ul className="mt-2 space-y-1 text-sm text-governance-navy/75 list-disc list-inside">
          <li>Right to access your data (DPDPA Section 11)</li>
          <li>Right to correction of inaccurate data (DPDPA Section 12)</li>
          <li>Right to nominate a person for data access (DPDPA Section 14)</li>
          <li>Right to grievance redressal (DPDPA Section 13)</li>
        </ul>
        <p className="mt-3 text-sm text-governance-navy/75">
          Contact{' '}
          <a href="mailto:dpo@sarikitechnologies.com" className="underline">
            dpo@sarikitechnologies.com
          </a>{' '}
          to exercise any of the above rights.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">7. Grievance Officer</h2>
        <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">
          [PLACEHOLDER — appoint Grievance Officer per DPDPA Section 13(6) before launch]<br />
          Name: [PLACEHOLDER]<br />
          Email:{' '}
          <a href="mailto:grievance@sarikitechnologies.com" className="underline">
            grievance@sarikitechnologies.com
          </a>
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-base font-semibold text-governance-navy">
          8. Updates to This Notice
        </h2>
        <p className="mt-2 text-sm text-governance-navy/75 leading-relaxed">
          [PLACEHOLDER — legal review required] Material changes will be communicated to registered
          users before taking effect.
        </p>
      </section>
    </div>
  );
}
