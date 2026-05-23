import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Portfolio } from '@/components/sections/Portfolio'
import { CTABlock } from '@/components/sections/CTABlock'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Explore MarketingHub's portfolio — brand identities, digital campaigns, and marketing systems built to drive measurable growth for leading businesses.",
  openGraph: {
    title: 'Portfolio | MarketingHub',
    description:
      'Brand identities, digital campaigns, and marketing systems built to perform.',
  },
}

const clients = [
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
  'Client Logo',
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Our Work"
        title={
          <>
            Built to Last,
            <br />
            Designed to Perform.
          </>
        }
        subtitle="Explore a selection of our work — brand identities, digital campaigns, and full-funnel marketing systems that drive real, measurable growth."
      />

      {/* Portfolio grid — header suppressed; page hero provides context */}
      <Portfolio showHeader={false} />

      {/* Client logos */}
      <section className="bg-black py-20">
        <Container>
          <div className="mb-12 text-center">
            <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-white/30">
              Trusted By Leading Brands
            </span>
          </div>

          <div className="grid grid-cols-2 gap-px bg-white/[0.05] sm:grid-cols-4 lg:grid-cols-8">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex aspect-[2/1] items-center justify-center bg-black px-4"
                aria-label={`${client} — placeholder`}
              >
                <span className="font-display text-xs font-bold uppercase tracking-wide text-white/15">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABlock />
    </>
  )
}
