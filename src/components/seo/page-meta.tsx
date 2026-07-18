/**
 * SEO NOTICE (FR-007, NFR-03):
 *
 * This SPA uses react-helmet-async for per-page <head> tags. However, a
 * client-rendered SPA cannot produce server-side hreflang or locale-specific
 * sitemaps without an additional step. Options (in order of preference):
 *
 *   1. Add a prerender step — e.g. vite-plugin-ssr or @preact/prerender — to
 *      generate static HTML shells for each /:locale/* route at build time.
 *      This restores hreflang correctness and sitemap generation without a
 *      runtime server.
 *
 *   2. Deploy a lightweight SSR proxy (Cloud Run + @hattip/express) that
 *      server-renders the initial HTML and delegates subsequent navigation
 *      to the SPA. Recommended for DPDPA consent pages (NFR-03).
 *
 *   3. Serve the SPA as-is and generate a static sitemap.xml out-of-band.
 *      SEO suffers for locale discovery; acceptable only for private/beta.
 *
 * Until one of the above is implemented, hreflang tags are injected
 * client-side by this component (crawlers that execute JS will pick them up;
 * Googlebot does, but it's async). This is a known gap — track as a
 * follow-on task before public launch.
 */
import { Helmet } from 'react-helmet-async';
import { useLocale } from '@/i18n/compat';
import { locales } from '@/i18n/config';

interface PageMetaProps {
  title: string;
  description?: string;
  canonicalPath?: string;
}

export function PageMeta({ title, description, canonicalPath }: PageMetaProps) {
  const locale = useLocale();
  const origin = window.location.origin;
  const path = canonicalPath ?? window.location.pathname;

  return (
    <Helmet>
      <title>{title} — Sarpanch Mitra</title>
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={`${origin}/${locale}${path}`} />
      {locales.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={`${origin}/${l}${path}`}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${origin}/en${path}`} />
    </Helmet>
  );
}
