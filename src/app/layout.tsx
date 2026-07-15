import type { ReactNode } from 'react';

// This root layout is intentionally minimal: the real <html lang> and
// locale-aware providers live in src/app/[locale]/layout.tsx, since every
// route is locale-prefixed per FR-002. Next.js still requires a root layout
// file to exist at this level.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
