'use client';

import { useTranslations } from '@/i18n/compat';
import { BUSINESS_HOURS } from '@/lib/config';

function isOpenNow(): boolean {
  const now = new Date();
  // Convert to IST (UTC+5:30)
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const ist = new Date(utcMs + 5.5 * 60 * 60_000);
  const day = ist.getDay();
  const hour = ist.getHours();
  return (
    BUSINESS_HOURS.openDays.includes(day) &&
    hour >= BUSINESS_HOURS.openHour &&
    hour < BUSINESS_HOURS.closeHour
  );
}

export function BusinessHoursBadge() {
  const t = useTranslations('Header');
  const open = isOpenNow();

  return (
    <span className="hidden lg:flex items-center gap-1.5 text-xs text-governance-navy/60 select-none">
      <span
        className={`w-2 h-2 rounded-full ${open ? 'bg-green-500' : 'bg-gray-400'}`}
        aria-hidden="true"
      />
      <span>{open ? t('openNow') : t('closedNow')}</span>
      <span aria-hidden="true">·</span>
      <span>{t('businessHours')}</span>
    </span>
  );
}
