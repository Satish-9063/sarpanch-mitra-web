'use client';

import { useState } from 'react';
import { useTranslations } from '@/i18n/compat';

export function NotifyForm() {
  const t = useTranslations('Platform');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email) setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-sm text-governance-navy/80">
        {t('electionsEdition.notifySuccess')}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="notify-email" className="sr-only">
        {t('electionsEdition.emailLabel')}
      </label>
      <input
        id="notify-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('electionsEdition.emailLabel')}
        className="flex-1 rounded border border-governance-navy/20 px-4 py-2 text-sm text-governance-navy focus:outline-none focus:ring-2 focus:ring-karyakarta-saffron"
      />
      <button
        type="submit"
        className="rounded bg-karyakarta-saffron px-5 py-2 text-sm font-medium text-governance-navy transition-colors hover:bg-karyakarta-saffron-700"
      >
        {t('electionsEdition.notifySubmit')}
      </button>
    </form>
  );
}
