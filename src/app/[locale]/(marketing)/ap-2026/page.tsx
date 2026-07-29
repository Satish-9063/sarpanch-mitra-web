import { Link } from '@/i18n/routing';

const bullets = [
  "Set up your candidate profile in minutes",
  "Track promises you make to voters, so you can deliver on them if elected",
  "Built to work on a basic smartphone, even with patchy signal in the field",
] as const;

export default function Ap2026Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-governance-navy md:text-5xl">
        Standing for Sarpanch in 2026? Start here.
      </h1>

      <p className="mt-6 text-lg leading-8 text-governance-navy/80">
        A simple, mobile-first tool built for candidates in the 2026 Andhra
        Pradesh Panchayat Elections&nbsp;&mdash; so you can organise now, and
        lead from day one if you win.
      </p>

      <ul className="mt-10 space-y-4 text-governance-navy/80">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-7">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-karyakarta-saffron"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      {/*
        SM-ELECT-MVP-BRD-001 dedicated intake form not found in codebase.
        Fallback per spec: /join with ap2026_candidate source flag.
      */}
      <div className="mt-10">
        <Link
          href={{ pathname: '/join', query: { source: 'ap2026_candidate' } }}
          className="inline-block rounded bg-karyakarta-saffron px-6 py-3 font-medium text-governance-navy transition hover:bg-karyakarta-saffron-700"
        >
          Sign up for AP 2026
        </Link>
      </div>
    </div>
  );
}
