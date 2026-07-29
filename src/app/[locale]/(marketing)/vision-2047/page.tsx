const bullets = [
  'Independent decision-making—setting your own development priorities, not just implementing someone else’s plan',
  'Financial self-reliance—building local revenue capacity over time, not depending entirely on transfers',
  'Accountable delivery—a visible record of promises made and promises kept',
] as const;

export default function Vision2047Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <h1 className="text-3xl font-bold leading-tight tracking-tight text-governance-navy md:text-5xl">
        Viksit Bharat begins in the village.
      </h1>

      <p className="mt-8 leading-8 text-governance-navy/80">
        India&apos;s journey to a developed nation by 2047 will not be written
        only in cities and industries&nbsp;&mdash; it will be written in 2.5
        lakh gram panchayats, by the Sarpanches who lead them. The Government
        of India&apos;s own framing of Atmanirbhar Panchayats places
        self-reliant villages at the centre of the Viksit Bharat mission.
      </p>

      <p className="mt-6 leading-8 text-governance-navy/80">
        But self-reliance requires capability. A Sarpanch cannot build an
        independent, thriving village using tools designed for a different era.
        Sarpanch Mitra exists to close that gap&nbsp;&mdash; giving today&apos;s
        rural leaders the same calibre of tools that any modern institution
        would expect.
      </p>

      <h3 className="mt-12 text-xl font-semibold text-governance-navy md:text-2xl">
        What Atmanirbhar Panchayat really means
      </h3>

      <ul className="mt-6 space-y-4" role="list">
        {bullets.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-karyakarta-saffron"
              aria-hidden="true"
            />
            <span className="leading-8 text-governance-navy/80">{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-10 font-medium text-governance-navy">
        This is the generational mission Sarpanch Mitra was built to support.
      </p>
    </div>
  );
}
