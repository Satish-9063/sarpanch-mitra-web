const capabilities = [
  "Reads and sorts incoming citizen requests into the right category automatically",
  "Drafts status updates to citizens so you're not writing every message from scratch",
  "Flags which government scheme a request is likely eligible for",
  "Summarises what's pending each morning, in plain language, in your own language",
] as const;

export default function AiPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-governance-navy md:text-5xl">
        You lead. The AI handles the rest.
      </h1>

      <p className="mt-6 text-lg leading-8 text-governance-navy/80">
        Sarpanch Mitra&apos;s AI is not something you need to learn to operate.
        It works in the background, so you never have to think about
        it&nbsp;&mdash; you just notice that the admin burden is lighter.
      </p>

      <ul className="mt-10 space-y-4 text-governance-navy/80">
        {capabilities.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-7">
            <span
              className="mt-2.5 h-1 w-4 shrink-0 rounded-full bg-governance-navy/30"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-10 italic leading-8 text-governance-navy/60">
        No jargon, no dashboards full of numbers you need a training session to
        understand. Just less work, so you have more time for your village.
      </p>
    </div>
  );
}
