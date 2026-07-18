import { useParams } from 'react-router-dom';
import { useTranslations } from '@/i18n/compat';
import { Link } from '@/i18n/routing';
import { getModuleBySlug } from '@/lib/modules';
import { NotFoundPage } from '@/pages/not-found';

export default function ModulePage() {
  const { module: slug } = useParams<{ module: string }>();
  const t = useTranslations('Platform');
  const mod = slug ? getModuleBySlug(slug) : undefined;

  if (!mod) {
    return <NotFoundPage />;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <Link
        href="/platform"
        className="text-sm text-governance-navy/60 hover:text-governance-navy"
      >
        ← {t('module.back')}
      </Link>
      <h1 className="mt-8 text-3xl font-bold text-governance-navy md:text-4xl">
        {mod.title}
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-governance-navy/80">
        {mod.description}
      </p>
      <p className="mt-16 text-sm text-governance-navy/40">
        {mod.slug} — detailed content pending Gate 2 sign-off (SM-WEB-001)
      </p>
    </div>
  );
}
