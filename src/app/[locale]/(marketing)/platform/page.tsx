import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { modules } from '@/lib/modules';

export default function PlatformPage() {
  const t = useTranslations('Platform');

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-governance-navy">
        {t('overview.title')}
      </h1>
      <p className="mt-4 text-lg text-governance-navy/80 max-w-2xl">
        {t('overview.subtitle')}
      </p>

      <h2 className="mt-16 text-2xl font-semibold text-governance-navy">
        {t('overview.modulesHeading')}
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {modules.map((mod) => (
          <Link
            key={mod.slug}
            href={`/platform/modules/${mod.slug}` as `/platform/modules/${string}`}
            className="group block rounded-lg border border-governance-navy/10 bg-white p-6 shadow-sm transition-all hover:border-karyakarta-saffron hover:shadow-md"
          >
            <h3 className="font-semibold text-governance-navy transition-colors group-hover:text-karyakarta-saffron-700">
              {mod.title}
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-governance-navy/70">
              {mod.description}
            </p>
            <span className="mt-4 inline-block text-sm font-medium text-karyakarta-saffron-700">
              {t('overview.learnMore')} →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-16 rounded-lg bg-governance-navy-50 p-8">
        <Link
          href="/platform/elections-edition"
          className="font-medium text-governance-navy underline underline-offset-2 hover:text-karyakarta-saffron-700"
        >
          {t('overview.electionsEditionCta')}
        </Link>
      </div>
    </div>
  );
}
