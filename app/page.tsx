import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { Portfolio } from '@/components/sections/Portfolio'
import { Stats } from '@/components/sections/Stats'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTABlock } from '@/components/sections/CTABlock'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://marketinghub.com'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MarketingHub',
  url: siteUrl,
  description:
    'Full-service IT and digital marketing company delivering web development, SEO, app development, graphic design, paid advertising, social media management, email marketing, video editing, and content writing.',
  email: 'hello@marketinghub.com',
  telephone: '+1-123-456-7890',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-123-456-7890',
    contactType: 'customer service',
    email: 'hello@marketinghub.com',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://linkedin.com/company/marketinghub',
    'https://twitter.com/marketinghub',
    'https://instagram.com/marketinghub',
    'https://facebook.com/marketinghub',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services & Digital Marketing',
    itemListElement: [
      'Search Engine Optimization',
      'Website Development',
      'App Development',
      'Graphic Designing',
      'Google My Business',
      'Google & Meta Ads',
      'Social Media Management',
      'Email Marketing',
      'Video Editing',
      'Content Writing',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
}

export default function Home() {
  return (
    <>
      {/* Organisation structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <CTABlock />
    </>
  )
}
