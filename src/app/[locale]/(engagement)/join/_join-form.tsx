'use client';

import { useState, type FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/routing';

const INDIAN_STATES = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
] as const;

const PHONE_RE = /^[6-9][0-9]{9}$/;

function fieldClass(hasError: boolean) {
  return `w-full rounded border px-3 py-2 text-governance-navy focus:outline-none focus:ring-2 focus:ring-karyakarta-saffron/50 ${
    hasError ? 'border-red-500' : 'border-governance-navy/20'
  }`;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-red-600">{message}</p>;
}

export function JoinForm() {
  const t = useTranslations('Join');
  const searchParams = useSearchParams();
  const source = searchParams.get('source') ?? '';

  const [name, setName] = useState('');
  const [panchayat, setPanchayat] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [phone, setPhone] = useState('');
  const [language, setLanguage] = useState('');
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  function validate(): Record<string, string> {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = t('requiredError');
    if (!panchayat.trim()) next.panchayat = t('requiredError');
    if (!district.trim()) next.district = t('requiredError');
    if (!state) next.state = t('requiredError');
    if (!PHONE_RE.test(phone.replace(/\s/g, ''))) next.phone = t('phoneError');
    if (!language) next.language = t('requiredError');
    if (!consent) next.consent = t('consentError');
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitStatus('submitting');

    const response = await fetch('/api/forms/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: name.trim(),
        panchayat: panchayat.trim(),
        district: district.trim(),
        state,
        phone: phone.replace(/\s/g, ''),
        language,
        consent,
        source: source || undefined,
      }),
    });

    setSubmitStatus(response.ok ? 'success' : 'error');
  }

  // NEXT_PUBLIC_WHATSAPP_NUMBER — System Admin must confirm real number before launch.
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '';
  const waHref = `https://wa.me/${waNumber}`;

  if (submitStatus === 'success') {
    return (
      <div className="mt-10 rounded-2xl border border-governance-navy/10 bg-governance-navy/5 px-8 py-10 text-center">
        <p className="font-semibold text-governance-navy">{t('successMessage')}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-10 space-y-5">
      {/* 1. Name */}
      <div>
        <label htmlFor="join-name" className="mb-1.5 block text-sm font-medium text-governance-navy">
          {t('nameLabel')} <span aria-hidden="true">*</span>
        </label>
        <input
          id="join-name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldClass(!!errors.name)}
        />
        <FieldError message={errors.name} />
      </div>

      {/* 2. Panchayat / village */}
      <div>
        <label htmlFor="join-panchayat" className="mb-1.5 block text-sm font-medium text-governance-navy">
          {t('panchayatLabel')} <span aria-hidden="true">*</span>
        </label>
        <input
          id="join-panchayat"
          type="text"
          required
          value={panchayat}
          onChange={(e) => setPanchayat(e.target.value)}
          className={fieldClass(!!errors.panchayat)}
        />
        <FieldError message={errors.panchayat} />
      </div>

      {/* 3. District — free text, no dropdown */}
      <div>
        <label htmlFor="join-district" className="mb-1.5 block text-sm font-medium text-governance-navy">
          {t('districtLabel')} <span aria-hidden="true">*</span>
        </label>
        <input
          id="join-district"
          type="text"
          required
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          className={fieldClass(!!errors.district)}
        />
        <FieldError message={errors.district} />
      </div>

      {/* 4. State — dropdown */}
      <div>
        <label htmlFor="join-state" className="mb-1.5 block text-sm font-medium text-governance-navy">
          {t('stateLabel')} <span aria-hidden="true">*</span>
        </label>
        <select
          id="join-state"
          required
          value={state}
          onChange={(e) => setState(e.target.value)}
          className={fieldClass(!!errors.state)}
        >
          <option value="">{t('statePlaceholder')}</option>
          {INDIAN_STATES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <FieldError message={errors.state} />
      </div>

      {/* 5. Phone */}
      <div>
        <label htmlFor="join-phone" className="mb-1.5 block text-sm font-medium text-governance-navy">
          {t('phoneLabel')} <span aria-hidden="true">*</span>
        </label>
        <input
          id="join-phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="numeric"
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={fieldClass(!!errors.phone)}
        />
        <FieldError message={errors.phone} />
      </div>

      {/* 6. Preferred language */}
      <div>
        <label htmlFor="join-language" className="mb-1.5 block text-sm font-medium text-governance-navy">
          {t('languageLabel')} <span aria-hidden="true">*</span>
        </label>
        <select
          id="join-language"
          required
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className={fieldClass(!!errors.language)}
        >
          <option value="">{t('languagePlaceholder')}</option>
          <option value="en">{t('languageEn')}</option>
          <option value="te">{t('languageTe')}</option>
          <option value="hi">{t('languageHi')}</option>
        </select>
        <FieldError message={errors.language} />
      </div>

      {/* Consent checkbox */}
      <div>
        <label htmlFor="join-consent" className="flex cursor-pointer items-start gap-3">
          <input
            id="join-consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-governance-navy/30 accent-karyakarta-saffron"
          />
          <span className="text-sm leading-6 text-governance-navy/80">
            {t('consentLabel')}{' '}
            <Link href="/consent-terms" className="underline underline-offset-2 hover:text-governance-navy">
              {t('consentTermsLink')}
            </Link>
          </span>
        </label>
        <FieldError message={errors.consent} />
      </div>

      {/* Error banner */}
      {submitStatus === 'error' && (
        <p className="text-sm text-red-600">{t('errorGeneric')}</p>
      )}

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={submitStatus === 'submitting'}
          className="rounded bg-karyakarta-saffron px-6 py-3 font-medium text-governance-navy transition hover:bg-karyakarta-saffron-700 disabled:opacity-60"
        >
          {t('submitLabel')}
        </button>

        {waNumber && (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-governance-navy/20 px-6 py-3 font-medium text-governance-navy transition hover:border-governance-navy/40"
          >
            {t('whatsappLabel')}
          </a>
        )}
      </div>
    </form>
  );
}
