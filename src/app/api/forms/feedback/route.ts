import { NextResponse } from 'next/server';

// Stub — no persistence; pending OI-W04 feedback channel decision.
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  void (body as { message?: string }).message;

  return NextResponse.json({ ok: true });
}
