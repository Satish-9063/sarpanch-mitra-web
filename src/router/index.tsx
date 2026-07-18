import { createBrowserRouter, Navigate } from 'react-router-dom';
import { LocaleLayout } from '@/layout/locale-layout';
import { NotFoundPage } from '@/pages/not-found';
import { PlaceholderPage } from '@/pages/placeholder';
import { defaultLocale } from '@/i18n/config';

// Pages — keep original file paths; they are plain React components after migration
import HomePage from '@/app/[locale]/(marketing)/page';
import PlatformPage from '@/app/[locale]/(marketing)/platform/page';
import ElectionsEditionPage from '@/app/[locale]/(marketing)/platform/elections-edition/page';
import ModulePage from '@/app/[locale]/(marketing)/platform/modules/[module]/page';
import SarpanchSolutionsPage from '@/app/[locale]/(marketing)/solutions/sarpanch/page';
import MpMlaOfficeSolutionsPage from '@/app/[locale]/(marketing)/solutions/mp-mla-office/page';
import PartyOrganisationSolutionsPage from '@/app/[locale]/(marketing)/solutions/party-organisation/page';
import AboutPage from '@/app/[locale]/(company)/about/page';
import CareersPage from '@/app/[locale]/(company)/careers/page';
import PartnersPage from '@/app/[locale]/(company)/partners/page';
import PrivacyPage from '@/app/[locale]/(legal)/privacy/page';
import TermsPage from '@/app/[locale]/(legal)/terms/page';
import CookiePolicyPage from '@/app/[locale]/(legal)/cookie-policy/page';
import DpdpaNoticePage from '@/app/[locale]/(legal)/dpdpa-notice/page';

function detectLocale(): string {
  const saved = localStorage.getItem('LOCALE_PREFERENCE');
  if (saved && ['en', 'te', 'hi'].includes(saved)) return saved;
  const browser = navigator.language.split('-')[0];
  if (['en', 'te', 'hi'].includes(browser)) return browser;
  return defaultLocale;
}

function RootRedirect() {
  return <Navigate to={`/${detectLocale()}`} replace />;
}

export const router = createBrowserRouter([
  // Root: redirect / to /{detected-locale}/ per FR-002
  { path: '/', element: <RootRedirect /> },

  // Locale-prefixed routes
  {
    path: '/:locale',
    element: <LocaleLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'platform', element: <PlatformPage /> },
      { path: 'platform/elections-edition', element: <ElectionsEditionPage /> },
      { path: 'platform/modules/:module', element: <ModulePage /> },
      { path: 'solutions/sarpanch', element: <SarpanchSolutionsPage /> },
      { path: 'solutions/mp-mla-office', element: <MpMlaOfficeSolutionsPage /> },
      { path: 'solutions/party-organisation', element: <PartyOrganisationSolutionsPage /> },
      { path: 'why/karyakarta-first', element: <PlaceholderPage title="Karyakarta First" /> },
      { path: 'why/neutrality', element: <PlaceholderPage title="Neutrality" /> },
      { path: 'why/security-dpdpa', element: <PlaceholderPage title="Security & DPDPA" /> },
      { path: 'pricing', element: <PlaceholderPage title="Pricing" /> },
      { path: 'blog', element: <PlaceholderPage title="Blog" /> },
      { path: 'case-studies', element: <PlaceholderPage title="Case Studies" /> },
      { path: 'guides', element: <PlaceholderPage title="Guides" /> },
      { path: 'press', element: <PlaceholderPage title="Press" /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'careers', element: <CareersPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'cookie-policy', element: <CookiePolicyPage /> },
      { path: 'dpdpa-notice', element: <DpdpaNoticePage /> },
      { path: 'contact', element: <PlaceholderPage title="Contact Us" /> },
      { path: 'demo', element: <PlaceholderPage title="Book a Demo" /> },
      { path: 'newsletter', element: <PlaceholderPage title="Newsletter" /> },
      { path: 'webinars', element: <PlaceholderPage title="Webinars" /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },

  // Catch-all outside locale context
  { path: '*', element: <Navigate to="/" replace /> },
]);
