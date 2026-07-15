import { NextRequest, NextResponse } from 'next/server';

// FR-032: contact form with routing by enquiry type (demo / partnership /
// press / careers / support). This is a structural stub only:
//   - spam protection (honeypot + rate limiting + Turnstile/reCAPTCHA) — TODO
//   - server-side storage + email forwarding — TODO, depends on OI-W03 (ESP)
//   - all credentials via GCP Secret Manager only, never in this file
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== 'string' || typeof body.enquiryType !== 'string') {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }

  // TODO: route to internal recipient based on body.enquiryType,
  // persist server-side, and forward by email (FR-032).

  return NextResponse.json({ ok: true });
}
