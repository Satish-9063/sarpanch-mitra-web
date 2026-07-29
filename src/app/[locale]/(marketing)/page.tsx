import { Link } from '@/i18n/routing';

const checkItems = [
  'Track every citizen request from complaint to resolution - nothing falls through the cracks.',
  'Know what schemes your villagers are eligible for, before they even ask.',
  'See what\'s pending, what\'s overdue, and what needs your attention today - in one place.',
  'Keep a record of everything you\'ve delivered, so your work speaks for itself.',
] as const;

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="w-full bg-governance-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            A new generation is leading India&apos;s villages.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            Sarpanch Mitra gives every Sarpanch the tools, knowledge, and AI
            support to lead with confidence&nbsp;&mdash; and build the village
            India needs for 2047.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/vision-2047"
              className="rounded border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              See how it works
            </Link>
            <Link
              href="/join"
              className="rounded bg-karyakarta-saffron px-6 py-3 font-medium text-governance-navy transition hover:bg-karyakarta-saffron-700"
            >
              Join the movement
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 1 · The Moment ──────────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
        <h3 className="text-2xl font-semibold text-governance-navy md:text-3xl">
          Villages are where Viksit Bharat is won.
        </h3>
        <p className="mt-5 max-w-3xl leading-8 text-governance-navy/80">
          India&apos;s 2047 vision for a developed nation rests on 2.5 lakh gram
          panchayats. The Sarpanch is not a ceremonial post&nbsp;&mdash; it is
          the frontline of India&apos;s development story. When a village
          thrives, the nation moves forward.
        </p>
      </section>

      {/* ── Section 2 · Generational Shift ─────────────────────────────────── */}
      <section className="w-full bg-governance-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl font-semibold text-governance-navy md:text-3xl">
            You are not the Sarpanch your predecessor was.
          </h3>
          <p className="mt-5 max-w-3xl leading-8 text-governance-navy/80">
            Today&apos;s Sarpanches are younger, more digitally fluent, and more
            ambitious for their villages than any generation before. But most
            are still running a panchayat the same way it was run twenty years
            ago&nbsp;&mdash; paper registers, personal diaries, and WhatsApp
            groups standing in for a proper system.
          </p>
          <p className="mt-6 max-w-3xl italic leading-8 text-governance-navy/80">
            That gap between ambition and tools is not your failure. It is the
            problem Sarpanch Mitra exists to close.
          </p>
        </div>
      </section>

      {/* ── Section 3 · The Gap (data-backed) ──────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
        <h3 className="text-2xl font-semibold text-governance-navy md:text-3xl">
          Only 7 in 100 Sarpanches choose their own priorities.
        </h3>
        <p className="mt-5 max-w-3xl leading-8 text-governance-navy/80">
          A survey of 800 panchayats found that just 7% of Sarpanches
          independently set their own development-planning themes&nbsp;&mdash;
          the rest follow priorities set elsewhere. And panchayats raise only
          1.1% of their revenue from their own local sources. Real
          self-reliance&nbsp;&mdash; real Atmanirbhar Panchayats&nbsp;&mdash;
          starts with Sarpanches who have the tools to lead independently.
        </p>
      </section>

      {/* ── Section 4 · What Sarpanch Mitra Gives You ──────────────────────── */}
      <section className="w-full bg-governance-navy/5">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl font-semibold text-governance-navy md:text-3xl">
            Everything you need to run your panchayat like an institution.
          </h3>
          <ul className="mt-8 max-w-3xl space-y-5" role="list">
            {checkItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-karyakarta-saffron text-governance-navy">
                  <CheckIcon />
                </span>
                <span className="leading-8 text-governance-navy/80">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link
              href="/tools"
              className="inline-block rounded bg-karyakarta-saffron px-6 py-3 font-medium text-governance-navy transition hover:bg-karyakarta-saffron-700"
            >
              Explore the tools
            </Link>
          </div>
        </div>
      </section>

      {/* ── Section 5 · AI as Enabler ───────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-6xl px-4 py-16 md:py-20">
        <h3 className="text-2xl font-semibold text-governance-navy md:text-3xl">
          AI handles the paperwork. You handle the leadership.
        </h3>
        <p className="mt-5 max-w-3xl leading-8 text-governance-navy/80">
          You didn&apos;t become a Sarpanch to spend your evenings drafting
          messages and sorting complaints. Sarpanch Mitra&apos;s AI quietly
          takes care of the repetitive work&nbsp;&mdash; categorising requests,
          drafting citizen updates, matching villagers to the right government
          scheme&nbsp;&mdash; so your time goes where it matters: with your
          people.
        </p>
      </section>

      {/* ── Section 6 · The Invitation ──────────────────────────────────────── */}
      <section className="w-full bg-governance-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <h3 className="text-2xl font-semibold md:text-3xl">
            Start with the 2026 Andhra Pradesh Panchayat Elections.
          </h3>
          <p className="mt-5 max-w-2xl leading-8 text-white/80">
            Sarpanch Mitra&apos;s Elections Edition is built for candidates
            standing in the 2026 AP panchayat elections&nbsp;&mdash; a simple,
            mobile-first tool to organise your campaign and prepare to lead
            from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/ap-2026"
              className="rounded bg-karyakarta-saffron px-6 py-3 font-medium text-governance-navy transition hover:bg-karyakarta-saffron-700"
            >
              Join the AP 2026 pilot
            </Link>
            <Link
              href="/join"
              className="rounded border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Request early access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
