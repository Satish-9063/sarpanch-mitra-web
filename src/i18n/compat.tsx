/**
 * Drop-in shims for next-intl APIs so page components keep the same
 * call-sites after migrating to react-i18next.
 */
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

/**
 * Mimics next-intl's useTranslations(namespace).
 * Returns a scoped t(key) that resolves Namespace.key in the translation JSON.
 */
export function useTranslations(namespace: string): (key: string) => string {
  const { t } = useTranslation();
  return (key: string) => t(`${namespace}.${key}`) as string;
}

/** Returns the current locale from the URL param. */
export function useLocale(): string {
  const { locale } = useParams<{ locale: string }>();
  return locale ?? 'en';
}
