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
    'Full-service digital marketing agency delivering brand strategy, digital marketing, content creation, SEO, paid media, and social media solutions.',
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
    name: 'Marketing Services',
    itemListElement: [
      'Brand Strategy',
      'Digital Marketing',
      'Content Creation',
      'SEO & Analytics',
      'Paid Media',
      'Social Media',
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
