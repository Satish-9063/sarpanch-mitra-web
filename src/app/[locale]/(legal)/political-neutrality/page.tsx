const commitments = [
  "We do not display any party name, symbol, colour, or slogan anywhere on this site.",
  "No candidate or elected official is named or pictured without their explicit written consent.",
  "Every testimonial is reviewed for unintended party association before it is published.",
  "Every statistic we publish is sourced from neutral government or research bodies, never from a party-affiliated source.",
  "Our AP 2026 Elections Edition is open and equally worded for candidates.",
] as const;

export default function PoliticalNeutralityPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-governance-navy md:text-5xl">
        Every Sarpanch, every party, one platform.
      </h1>

      <p className="mt-6 leading-8 text-governance-navy/80">
        Sarpanch Mitra is built for every Sarpanch in India, regardless of
        party, symbol, or political affiliation. This page exists so every
        visitor can see exactly how we hold that line.
      </p>

      <ul className="mt-10 space-y-5" role="list">
        {commitments.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span
              className="mt-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-governance-navy/20 text-xs font-semibold text-governance-navy/60"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <span className="leading-8 text-governance-navy/80">{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-10 leading-8 text-governance-navy/80">
        If you ever believe a page on this site falls short of this standard,
        write to us and we will review and correct it.
      </p>
    </div>
  );
}
