import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Laura Closet',
  description: 'Laura\'s ecommerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/euclid-circular-a" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
