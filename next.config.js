const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // NFR-01: keep marketing pages statically generated (SSG/ISR).
  // Server routes are reserved for /api/forms/* (FR-030..FR-032) and ESP/CRM sync only.
};

module.exports = withNextIntl(nextConfig);
