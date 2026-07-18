'use client';

import { useState } from 'react';
import { useTranslations } from '@/i18n/compat';

type State = 'idle' | 'open' | 'submitting' | 'success';

export function FeedbackButton() {
  const t = useTranslations('Feedback');
  const [state, setState] = useState<State>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    await fetch(`${import.meta.env.VITE_API_BASE_URL ?? ''}/api/forms/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    setState('success');
  }

  function handleClose() {
    setState('idle');
    setMessage('');
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {state !== 'idle' && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t('widgetLabel')}
          className="w-72 rounded-lg border border-governance-navy/20 bg-white p-4 shadow-lg"
        >
          {state === 'success' ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-governance-navy font-medium">{t('successMessage')}</p>
              <button
                onClick={handleClose}
                className="text-sm text-governance-navy/70 underline"
              >
                {t('close')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <label className="flex flex-col gap-1 text-sm font-medium text-governance-navy">
                {t('messageLabel')}
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="mt-1 resize-none rounded border border-governance-navy/20 px-2 py-1 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-karyakarta-saffron"
                />
              </label>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded border border-governance-navy/20 px-3 py-1.5 text-sm text-governance-navy/70"
                >
                  {t('cancel')}
                </button>
                <button
                  type="submit"
                  disabled={state === 'submitting'}
                  className="rounded bg-karyakarta-saffron px-3 py-1.5 text-sm font-medium text-governance-navy disabled:opacity-50"
                >
                  {t('submit')}
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      <button
        onClick={() => setState((s) => (s === 'idle' ? 'open' : 'idle'))}
        aria-expanded={state !== 'idle'}
        aria-label={t('triggerLabel')}
        className="rounded-full bg-governance-navy px-4 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-governance-navy-700"
      >
        {t('trigger')}
      </button>
    </div>
  );
}
