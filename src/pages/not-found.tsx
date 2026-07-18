import { Link } from '@/i18n/routing';

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-32 text-center">
      <h1 className="text-6xl font-bold text-governance-navy">404</h1>
      <p className="mt-4 text-lg text-governance-navy/70">Page not found.</p>
      <Link
        href="/"
        className="mt-8 inline-block rounded bg-karyakarta-saffron px-5 py-3 font-medium text-governance-navy"
      >
        Back to home
      </Link>
    </div>
  );
}
