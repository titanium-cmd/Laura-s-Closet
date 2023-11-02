import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '0.875rem', //14px
      md: '1.125rem', //18px
      xl: '1.5rem', //24px
      '2xl': '3.5rem' //56px
    },
    colors: {
      'custom-light-gray': '#FAFAFA',
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
    extend: {
      backgroundImage: {
        'arrival-bg': "url('/images/arrival-bg.png')",
        'arrival-lady': "url('/images/arrival-bg.png')",
      },
    },
  },
  plugins: [],
}
export default config
