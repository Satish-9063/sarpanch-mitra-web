import { Link } from '@/i18n/routing';

const features = [
  {
    heading: 'Citizen request tracking',
    body: 'Every complaint, every request, every promise—logged, tracked, and followed up automatically. No more relying on memory or a notebook that can be lost.',
  },
  {
    heading: 'Government scheme matching',
    body: 'Know which of your villagers are eligible for which government scheme, without having to chase down department-by-department information yourself.',
  },
  {
    heading: 'Follow-up and escalation',
    body: 'Nothing sits untouched. Sarpanch Mitra reminds you what’s due, and escalates automatically if something is at risk of being missed.',
  },
  {
    heading: 'A record of your work',
    body: 'Every resolved issue, every scheme delivered, every follow-up completed—kept as a running record. When it’s time to show your village what you’ve achieved, the evidence is already there.',
  },
] as const;

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      {/* Page header */}
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-governance-navy md:text-5xl">
          The tools your village deserves.
        </h1>
        <p className="mt-5 text-lg leading-8 text-governance-navy/80">
          Everything you need to move from reacting to problems, to running
          your panchayat with a plan.
        </p>
      </div>

      {/* Feature grid — four equal-weight cards */}
      <ul
        className="mt-14 grid gap-6 sm:grid-cols-2"
        role="list"
      >
        {features.map(({ heading, body }) => (
          <li
            key={heading}
            className="flex flex-col gap-3 rounded-2xl border border-governance-navy/10 bg-white p-8 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-governance-navy">
              {heading}
            </h3>
            <p className="leading-7 text-governance-navy/80">{body}</p>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-14">
        <Link
          href={{ pathname: '/join', query: { source: 'walkthrough_request' } }}
          className="inline-block rounded bg-karyakarta-saffron px-6 py-3 font-medium text-governance-navy transition hover:bg-karyakarta-saffron-700"
        >
          See a walkthrough
        </Link>
      </div>
    </div>
  );
}
