import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { JoinForm } from './_join-form';

export default async function JoinPage() {
  const t = await getTranslations('Join');

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-governance-navy md:text-5xl">
        {t('headline')}
      </h1>
      <p className="mt-5 text-lg leading-8 text-governance-navy/80">
        {t('subhead')}
      </p>

      <Suspense>
        <JoinForm />
      </Suspense>
    </div>
  );
}
