import { NextRequest, NextResponse } from 'next/server';

// FR-022: double opt-in mandatory. This stub does NOT yet implement:
//   - confirmation email in subscriber's language
//   - consent record (timestamp, source page, locale, consent text version)
//   - 30-day purge of unconfirmed addresses
// ESP integration depends on OI-W03; keys via GCP Secret Manager only.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body.email !== 'string' || typeof body.locale !== 'string') {
    return NextResponse.json({ error: 'Invalid submission' }, { status: 400 });
  }

  // TODO: create pending-confirmation record, send localized double opt-in email.

  return NextResponse.json({ ok: true, status: 'pending_confirmation' });
}
