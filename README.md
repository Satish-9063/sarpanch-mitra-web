# Sarpanch Mitra — Marketing Website

Reference doc: **SM-WEB-001** (Requirements Specification, v1.0).
Sponsor: Prasad Sariki · BA Owner: Bhavya Kandregula · Tech Lead: Uday Kiran Chappidi · PM: Butu Satish

This is the public marketing & commercial website — separate from the product
apps (Track A core platform, Track B AP Elections Edition). It shares brand
identity and infra standards with them but has **no access to product data or
citizen PII** (Section 9).

## Stack

- **Next.js (App Router)** + **next-intl** for i18n — consistent with the
  Elections Edition codebase (Section 7)
- **Tailwind CSS** with Governance Navy / Karyakarta Saffron brand tokens
- Locale-prefixed routing: `/en/`, `/te/`, `/hi/` on every route (FR-002)
- Static generation (SSG/ISR) for marketing pages; server routes reserved for
  form handling only (NFR-01)

## Local Development Setup (Section 7.1)

Per Sariki practice, the project must run fully on a developer laptop
**before any cloud provisioning request is raised.**

1. **Install Node.js LTS + pnpm**, then install dependencies:
   ```bash
   pnpm install
   ```

2. **Run the dev server** — this serves all three locales against the local
   messages fixtures in `/messages`:
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000/en`, `/te`, and `/hi` and confirm each locale
   renders end-to-end with no missing keys and no font-fallback tofu.

3. **Copy environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   Never put real secrets in `.env.local` for anything beyond local
   experimentation — production credentials are GCP Secret Manager only.

4. **Firebase Emulator Suite** (once form-handling routes are implemented):
   run `firebase emulators:start` for hosting/functions/firestore as
   applicable. For any ADC-dependent local testing:
   ```bash
   gcloud auth application-default login
   ```

5. **i18n completeness check** (also runs as a pre-commit hook once configured):
   ```bash
   pnpm i18n:check
   ```
   Fails the build if any locale is missing (or has orphaned) keys relative
   to English.

6. **Only after the local run is demonstrated** (checklist signed by Tech
   Lead) is the Terraform provisioning PR for staging raised. Do not request
   cloud provisioning before this step.

## Project Structure

```
src/
  app/
    layout.tsx                 # minimal root layout (Next.js requirement)
    globals.css                 # Tailwind entry + Telugu/Devanagari @font-face
    [locale]/
      layout.tsx                # sets <html lang>, mounts header/footer, next-intl provider
      (marketing)/               # home, platform, solutions, why, pricing, blog, etc.
      (engagement)/               # newsletter, demo, contact, webinars
      (company)/                  # about, careers, partners
      (legal)/                    # privacy, terms, dpdpa-notice, cookie-policy
    api/
      forms/                    # server-side form handling (contact, newsletter, demo)
  components/
    layout/                     # header, footer, language switcher
    ui/                         # shared primitives (buttons, cards, etc.)
    forms/                      # form components
  i18n/
    config.ts                   # locales, default locale, display names (FR-001)
    routing.ts                  # next-intl routing + locale-aware Link/router (FR-002)
    request.ts                  # per-locale message loading with EN fallback (FR-006)
  lib/                          # shared utilities
messages/
  en.json / te.json / hi.json   # UI strings per locale (FR-005)
scripts/
  check-i18n-completeness.js    # CI + pre-commit i18n key parity check
middleware.ts                  # locale detection: saved pref -> Accept-Language -> EN (FR-002)
```

## Adding a New Locale (FR-001)

No code changes required:

1. Add the locale code to `src/i18n/config.ts` (`locales` + `localeNames`).
2. Add `messages/<code>.json` with the same key structure as `en.json`.
3. Run `pnpm i18n:check` to confirm completeness before merging.

## Conventions

- **No hard-coded user-visible strings** — everything goes through
  `useTranslations()` / the `messages/*.json` files (FR-005). Hard-coded
  strings are a code-review reject.
- **Use `Link`/`useRouter`/`usePathname` from `@/i18n/routing`**, not
  `next/link` / `next/navigation` directly, so locale-prefixing and
  preference persistence (FR-003/FR-004) stay correct everywhere.
- **No secrets in client code.** All credentials via GCP Secret Manager only.
- Every new page/feature should be traceable to an FR-/NFR-/CR- ID in
  SM-WEB-001 and cleared through the four gates (Ubiquitous Language →
  Interface Design → Test Contract → Scope Boundary) before merging.

## Out of Scope — v1 (Section 9)

Do not build: customer login/billing, public comments, in-site chatbot,
locales beyond en/te/hi, any read access to product data or citizen PII,
native mobile app / PWA installability.
