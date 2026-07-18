'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslations } from '@/i18n/compat';
import { Link } from '@/i18n/routing';

const NAV_LINKS = [
  { href: '/', key: 'home' },
  { href: '/platform', key: 'platform' },
  { href: '/pricing', key: 'pricing' },
  { href: '/about', key: 'about' },
] as const;

export function MobileNav() {
  const tNav = useTranslations('Nav');
  const tHeader = useTranslations('Header');
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    requestAnimationFrame(() => btnRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    // Auto-focus first link for keyboard users
    const firstLink = wrapperRef.current?.querySelector<HTMLAnchorElement>('a');
    firstLink?.focus();
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    const onPointer = (e: MouseEvent) => {
      if (open && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointer);
    };
  }, [open, close]);

  return (
    <div ref={wrapperRef} className="md:hidden">
      <button
        ref={btnRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        aria-label={open ? tHeader('menuClose') : tHeader('menuOpen')}
        onClick={() => setOpen((v) => !v)}
        className="p-2 rounded text-governance-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-karyakarta-saffron"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        )}
      </button>

      {open && (
        <nav
          id="mobile-nav-menu"
          aria-label="Primary mobile"
          className="absolute left-0 right-0 top-full bg-white border-b border-governance-navy/10 shadow-lg z-50"
        >
          <ul role="list" className="py-2">
            {NAV_LINKS.map(({ href, key }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="block px-6 py-3 text-sm text-governance-navy hover:bg-governance-navy/5 focus:outline-none focus-visible:bg-governance-navy/5 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-karyakarta-saffron"
                >
                  {tNav(key)}
                </Link>
              </li>
            ))}
            <li className="px-4 py-2">
              <Link
                href="/demo"
                onClick={close}
                className="block w-full px-4 py-2.5 text-sm font-medium text-center text-governance-navy bg-karyakarta-saffron rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-karyakarta-saffron"
              >
                {tNav('bookDemo')}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
