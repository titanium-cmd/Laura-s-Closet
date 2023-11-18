import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.75rem', //12px
      md: '0.875rem', //14px
      lg: '1.125rem', //18px
      xl: '1.5rem', //24px
      '2xl': '3.5rem' //56px
    },
    colors: {
      'custom-light-gray': '#FAFAFA',
      'custom-blue-black': '#145381',
      'custom-blue': '#0F4FCE',
      'custom-gray-50': '#F9FAFB',
      'custom-gray-100': '#F3F4F6',
      'custom-gray-200': '#E5E7EB',
      'custom-gray-300': '#D1D5DB',
      'custom-gray-400': '#9CA3AF',
      'custom-gray-500': '#6B7280',
      'custom-gray-600': '#4B5563',
      'custom-gray-700': '#374151',
      'custom-gray-800': '#1F2937',
      'custom-gray-900': '#111827',
      'custom-red': '#EB5757',
      'custom-yellow': '#FDDF12',
      'custom-orange': '#F7C59F',
    },
    extend: {},
    textShadow: {
      sm: '1px 1px 2px var(--tw-shadow-color)',
      DEFAULT: '2px 2px 4px var(--tw-shadow-color)',
      lg: '4px 4px 8px var(--tw-shadow-color)',
      xl: '4px 4px 16px var(--tw-shadow-color)',
    }
  },
  plugins: [plugin(function ({ matchUtilities, theme }: { matchUtilities: any, theme: any }) {
    matchUtilities(
      {
        'text-shadow': (value: any) => ({
          textShadow: value
        }),
      },
      { values: theme('textShadow') }
    )
  })]
}
export default config
