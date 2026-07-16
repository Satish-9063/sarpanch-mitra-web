# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server
pnpm build        # production build
pnpm lint         # ESLint via next lint
pnpm type-check   # tsc --noEmit (no emitted files)
pnpm i18n:check   # verify all locale JSON files have identical key sets
```

No test framework is configured. Quality gates are lint, type-check, and i18n:check.

## Architecture

**Stack:** Next.js 14 App Router · next-intl 3 · Tailwind CSS 3 · TypeScript (strict)

**Rendering contract:** All marketing pages are statically generated (SSG). `generateStaticParams` in `src/app/[locale]/layout.tsx` emits all three locales at build time. Only `src/app/api/forms/*` routes run on the server at request time.

**Route structure:** Every real route lives under `src/app/[locale]/`. Three route groups — `(marketing)`, `(engagement)`, `(company)`, `(legal)` — organise pages without affecting URLs. The root `src/app/layout.tsx` intentionally renders only `{children}` (no `<html>/<body>`) because every visitor hits a locale-prefixed URL. `src/app/not-found.tsx` provides the fallback 404 with full `<html>/<body>` for unmatched paths.

**Path alias:** `@/*` → `src/*`

## i18n Rules (critical)

Never import `Link`, `useRouter`, `usePathname`, or `redirect` from `next/link` or `next/navigation`. Always import them from `@/i18n/routing`, which wraps next-intl's locale-aware navigation.

```ts
import { Link, useRouter, usePathname } from '@/i18n/routing';
```

Locales: `en` (default), `te` (Telugu), `hi` (Hindi). All user-visible strings must come from `useTranslations()` with keys defined in `messages/*.json`. Run `pnpm i18n:check` after touching any translation file — it enforces key parity across all locales.

The locale switcher uses `router.replace(pathname, { locale })` — see `src/components/layout/language-switcher.tsx` for the canonical pattern.

## Brand Tokens

Defined in `tailwind.config.js`:

| Token | Hex | Usage |
|-------|-----|-------|
| `governance-navy` (DEFAULT `#0B2545`) | shades 50/100/500/700/900 | primary |
| `karyakarta-saffron` (DEFAULT `#F2A93B`) | shades 50/100/500/700 | accent |

Font families: `font-sans` (Inter), `font-telugu` (Noto Sans Telugu), `font-devanagari` (Noto Sans Devanagari). Fonts are self-hosted under `/public/fonts/` (woff2); never load them from a CDN.

## Environment Variables

See `.env.example`. All four vars are pending vendor decisions and must not be hard-coded. In production, secrets are managed via GCP Secret Manager only.

## Form API Stubs

`src/app/api/forms/contact/route.ts` and `src/app/api/forms/newsletter/route.ts` are structural stubs with input validation but no persistence or email forwarding. Both are pending ESP vendor selection (OI-W03).

## Requirement Traceability

Code comments reference IDs from spec SM-WEB-001 (e.g. `FR-032`, `NFR-01`, `CR-*`). New features must pass four gates before implementation: Ubiquitous Language → Interface Design → Test Contract → Scope Boundary.
