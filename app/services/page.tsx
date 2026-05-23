import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Services } from '@/components/sections/Services'
import { CTABlock } from '@/components/sections/CTABlock'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive marketing services including brand strategy, digital marketing, content creation, SEO & analytics, paid media, and social media management.',
  openGraph: {
    title: 'Services | MarketingHub',
    description:
      'Comprehensive marketing services built for measurable growth. Strategy, execution, and results — all under one roof.',
  },
}

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'We conduct a thorough audit of your current position, competitive landscape, and market opportunities to establish a clear strategic baseline.',
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'We develop a data-driven, channel-specific roadmap precisely tailored to your goals, budget, and competitive environment.',
  },
  {
    number: '03',
    title: 'Execution',
    description:
      'We implement with precision across every channel — on-brand, on-budget, and on-schedule. Every deliverable is held to the highest standard.',
  },
  {
    number: '04',
    title: 'Optimisation',
    description:
      'We measure, test, and iterate continuously — scaling what works and eliminating what doesn\'t. Your results improve every cycle.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title={
          <>
            Comprehensive
            <br />
            Marketing Solutions.
          </>
        }
        subtitle="Every service we offer is built around a single goal: measurable growth for your business. Strategy, execution, and results — delivered at the highest level."
      />

      {/* Services grid — header suppressed; page hero provides the context */}
      <Services showHeader={false} />

      {/* Process section */}
      <section className="bg-black py-32 lg:py-44">
        <Container>
          <div className="mb-16">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                How We Work
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white lg:text-5xl">
              Our Process.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.number} className="group bg-black p-8 lg:p-10">
                <span className="font-body text-xs font-medium text-accent/50">
                  {step.number}
                </span>
                <h3 className="mt-6 font-display text-base font-bold uppercase tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABlock />
    </>
  )
}
