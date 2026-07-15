/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // CR-01: Governance Navy + Karyakarta Saffron palette per brand guidelines.
      // Exact hex values pending SarpanchMitra_Brand_Guidelines.docx — placeholders below,
      // swap in real values before any content goes live (Gate 2 sign-off).
      colors: {
        'governance-navy': {
          DEFAULT: '#0B2545',
          50: '#EEF2F7',
          100: '#D3DEEA',
          500: '#0B2545',
          700: '#071A33',
          900: '#040F1D',
        },
        'karyakarta-saffron': {
          DEFAULT: '#F2A93B',
          50: '#FDF3E3',
          100: '#FBE6C2',
          500: '#F2A93B',
          700: '#C77F1E',
        },
      },
      fontFamily: {
        // NFR-04 / FR-008: Noto Sans Telugu & Devanagari must be loaded with no
        // font-fallback tofu. Actual @font-face declarations go in globals.css.
        sans: ['Inter', 'system-ui', 'sans-serif'],
        telugu: ['"Noto Sans Telugu"', 'sans-serif'],
        devanagari: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
