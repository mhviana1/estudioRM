import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Estúdio de Fotografia — Ensaios, Mentorias e Workshops',
  description:
    'Ensaios fotográficos de gestante, feminino e newborn, além de mentorias individuais e workshops presenciais para fotógrafos.',
  generator: 'Mauricio Viana',
  icons: {
    icon: [
      {
        url: '/icon-rm.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-rm.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-rm.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/icon-rm.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
