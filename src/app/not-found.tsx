/**
 * Next.js requires the tree rendered for an unmatched route to contain
 * <html> and <body> somewhere. Since those live in src/app/[locale]/layout.tsx
 * (because every real route is locale-prefixed per FR-002), any request that
 * doesn't resolve into the [locale] segment falls back to the ROOT layout,
 * which is intentionally bare — so it needs its own not-found with the
 * required tags, or Next throws "Missing required html tags".
 *
 * This should rarely be hit in normal use (the middleware redirects "/" to
 * "/en" etc.), but covers genuinely unmatched paths and dev-mode edge cases.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>
        <h1>Page not found</h1>
        <p>
          <a href="/en">Return to the English homepage</a>
        </p>
      </body>
    </html>
  );
}
