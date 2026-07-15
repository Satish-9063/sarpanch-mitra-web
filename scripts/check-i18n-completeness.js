/**
 * Fails with a non-zero exit code if any locale under /messages is missing
 * keys present in the English (source) file, or has extra/orphaned keys.
 * Wired as `npm run i18n:check` and intended to run in CI (Section 7 CI/CD row)
 * and as a local pre-commit hook (Section 7.1).
 */
const fs = require('fs');
const path = require('path');

const messagesDir = path.join(__dirname, '..', 'messages');
const sourceLocale = 'en';

function flattenKeys(obj, prefix = '') {
  return Object.entries(obj).flatMap(([key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      return flattenKeys(value, fullKey);
    }
    return [fullKey];
  });
}

function loadLocale(locale) {
  const filePath = path.join(messagesDir, `${locale}.json`);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function main() {
  const files = fs
    .readdirSync(messagesDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''));

  const sourceKeys = new Set(flattenKeys(loadLocale(sourceLocale)));
  let hasError = false;

  for (const locale of files) {
    if (locale === sourceLocale) continue;

    const localeKeys = new Set(flattenKeys(loadLocale(locale)));
    const missing = [...sourceKeys].filter((k) => !localeKeys.has(k));
    const extra = [...localeKeys].filter((k) => !sourceKeys.has(k));

    if (missing.length > 0) {
      hasError = true;
      console.error(`[i18n:check] "${locale}" is missing keys:\n  ${missing.join('\n  ')}`);
    }
    if (extra.length > 0) {
      hasError = true;
      console.error(`[i18n:check] "${locale}" has orphaned keys:\n  ${extra.join('\n  ')}`);
    }
  }

  if (hasError) {
    process.exit(1);
  }

  console.log(`[i18n:check] OK — ${files.length} locales, ${sourceKeys.size} keys each.`);
}

main();
