import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Services } from '@/components/sections/Services'
import { CTABlock } from '@/components/sections/CTABlock'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Complete IT and digital marketing services including SEO, website development, app development, graphic design, Google My Business, paid advertising, social media management, email marketing, video editing, and content writing.',
  openGraph: {
    title: 'Services | MarketingHub',
    description:
      'Complete technology and marketing solutions designed to help businesses grow online and improve operational efficiency.',
  },
}

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Consultation',
    description:
      'We begin with a thorough consultation to understand your business goals, current challenges, and target audience — establishing a clear strategic baseline.',
  },
  {
    number: '02',
    title: 'Strategy Planning',
    description:
      'We develop a data-driven, channel-specific roadmap precisely tailored to your goals, budget, and competitive environment.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description:
      'We execute with precision across every deliverable — on-brand, on-budget, and on-schedule. Every output is held to the highest standard.',
  },
  {
    number: '04',
    title: 'Testing & Quality Assurance',
    description:
      'Rigorous quality checks across all deliverables ensure everything performs flawlessly before it reaches your audience.',
  },
  {
    number: '05',
    title: 'Launch & Deployment',
    description:
      'We manage the full launch process — carefully deploying your solution and monitoring performance to ensure a smooth, successful go-live.',
  },
  {
    number: '06',
    title: 'Ongoing Support',
    description:
      'Our relationship doesn\'t end at launch. We provide continuous support, optimization, and improvement to keep your results growing.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title={
          <>
            Complete Technology
            <br />& Marketing Solutions.
          </>
        }
        subtitle="We provide complete IT and digital marketing solutions designed to help businesses grow online, increase visibility, and improve operational efficiency."
      />

      {/* Services grid — header suppressed; page hero provides context */}
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

          <div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
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
