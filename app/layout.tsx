import type { Metadata } from 'next'
import { Unbounded, DM_Sans } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const unbounded = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marketinghub.com'

export const metadata: Metadata = {
  title: {
    default: 'MarketingHub | World-Class Marketing Solutions',
    template: '%s | MarketingHub',
  },
  description:
    'Transform your brand with data-driven marketing strategies. MarketingHub delivers exceptional results through innovative digital solutions.',
  keywords: [
    'marketing agency',
    'digital marketing',
    'brand strategy',
    'content creation',
    'SEO',
    'paid media',
    'social media marketing',
  ],
  authors: [{ name: 'MarketingHub' }],
  creator: 'MarketingHub',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: 'MarketingHub | World-Class Marketing Solutions',
    description:
      'Transform your brand with data-driven marketing strategies that deliver exceptional results.',
    siteName: 'MarketingHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MarketingHub | World-Class Marketing Solutions',
    description:
      'Transform your brand with data-driven marketing strategies that deliver exceptional results.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${dmSans.variable}`}>
      <body>
        {/* Skip to main content — WCAG 2.1 Level A */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[200] focus:bg-accent focus:px-6 focus:py-3 focus:font-body focus:text-sm focus:font-medium focus:uppercase focus:tracking-wide focus:text-black focus:outline-none"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
