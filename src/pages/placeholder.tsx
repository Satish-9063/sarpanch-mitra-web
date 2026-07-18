/** Stub page rendered for routes that are not yet implemented. */
export function PlaceholderPage({ title }: { title?: string }) {
  return (
    <div className="mx-auto max-w-4xl px-4 py-24 text-center">
      <h1 className="text-3xl font-semibold text-governance-navy">
        {title ?? 'Coming soon'}
      </h1>
      <p className="mt-4 text-governance-navy/60">
        This page is under construction.
      </p>
    </div>
  );
}
