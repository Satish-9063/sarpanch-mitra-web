/**
 * Centralised API client for server-side form endpoints.
 *
 * STEP 5 — OPEN QUESTION (no clean SPA equivalent):
 *
 * The three Next.js route handlers (contact, newsletter, feedback) must run
 * on the server because:
 *   - ESP_API_KEY and CMS_API_TOKEN cannot be bundled into the SPA
 *     (Secret Manager policy — see .env.example)
 *   - Consent records (FR-022) require server-side timestamps and storage
 *   - Double opt-in confirmation emails (FR-021) require server execution
 *
 * These endpoints must be deployed as a separate Cloud Run service.
 * Set VITE_API_BASE_URL to the Cloud Run service URL before enabling forms.
 * Until that service is deployed, form submissions will fail (404/CORS error)
 * in both local dev and staging — this is expected.
 *
 * Recommended implementation:
 *   - Hono (hono.dev) on Cloud Run — minimal, TypeScript-native
 *   - Mount under /api/forms/contact, /api/forms/newsletter, /api/forms/feedback
 *   - All secrets via GCP Secret Manager (never in environment variables)
 */

const BASE = import.meta.env.VITE_API_BASE_URL ?? '';

export const api = {
  post: (path: string, body: unknown): Promise<Response> =>
    fetch(`${BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }),
};
