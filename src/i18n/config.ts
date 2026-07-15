/**
 * FR-001: Launch languages are English, Telugu, Hindi.
 * Architecture must support adding Tamil, Kannada, Marathi, Bengali, Odia
 * via configuration + translation files only — no code changes.
 *
 * To add a locale later:
 *   1. Add its code to `locales` and a label to `localeNames` below.
 *   2. Add a corresponding messages/<code>.json file.
 *   3. Run `pnpm i18n:check` to confirm completeness.
 * No other code changes should be required.
 */
export const locales = ['en', 'te', 'hi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// FR-003: each language must display in its own script in the switcher.
export const localeNames: Record<Locale, string> = {
  en: 'English',
  te: 'తెలుగు',
  hi: 'हिन्दी',
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
