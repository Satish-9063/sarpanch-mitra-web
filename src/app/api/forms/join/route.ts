import { NextRequest, NextResponse } from 'next/server';

// Join / early-access intake. Structural stub only:
//   - spam protection (honeypot, rate-limiting, Turnstile) — TODO
//   - persistence + CRM sync — TODO, depends on vendor selection (OI-W03)
//   - all credentials via GCP Secret Manager only, never in this file
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (
    !body ||
    typeof body.name !== 'string' ||
    typeof body.panchayat !== 'string' ||
    typeof body.district !== 'string' ||
    typeof body.state !== 'string' ||
    typeof body.phone !== 'string' ||
    typeof body.language !== 'string' ||
    body.consent !== true
  ) {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }

  // TODO: persist lead, tag with body.source, route to CRM / ESP.

  return NextResponse.json({ ok: true });
}
