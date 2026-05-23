import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Stats } from '@/components/sections/Stats'
import { CTABlock } from '@/components/sections/CTABlock'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about MarketingHub — our mission, values, and the team dedicated to building market-leading brands through strategy, creativity, and relentless execution.',
  openGraph: {
    title: 'About Us | MarketingHub',
    description:
      'Full-service marketing agency built on strategic clarity, relentless quality, and transparent partnership.',
  },
}

const values = [
  {
    title: 'Results First',
    description:
      'Every decision we make is driven by measurable outcomes. Vanity metrics are irrelevant — what matters is tangible, documented impact on your business.',
  },
  {
    title: 'Strategic Clarity',
    description:
      'We cut through complexity to deliver focused, coherent strategies. Clear thinking at the top produces clear results at every level of execution.',
  },
  {
    title: 'Relentless Quality',
    description:
      'We hold our work to an exceptionally high standard across every deliverable — because the brands we build deserve nothing less than the best.',
  },
  {
    title: 'Transparent Partnership',
    description:
      'We operate as a genuine extension of your team. No black boxes, no vague reporting. Full visibility into strategy, execution, and performance at all times.',
  },
]

const team = [
  { name: 'Placeholder', role: 'Chief Executive Officer' },
  { name: 'Placeholder', role: 'Head of Strategy' },
  { name: 'Placeholder', role: 'Creative Director' },
  { name: 'Placeholder', role: 'Head of Digital' },
  { name: 'Placeholder', role: 'Head of Analytics' },
  { name: 'Placeholder', role: 'Head of Content' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title={
          <>
            The Strategy
            <br />
            Behind Your Growth.
          </>
        }
        subtitle="We are a full-service marketing agency built on one conviction: great strategy, executed with precision, produces extraordinary results."
      />

      {/* Mission statement */}
      <section className="bg-white py-32 lg:py-44">
        <Container>
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-10 bg-black" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                Our Mission
              </span>
            </div>
            <p className="font-display text-3xl font-bold uppercase leading-[1.1] tracking-tight text-black md:text-4xl lg:text-5xl">
              We exist to transform ambitious brands into market leaders through
              strategy, creativity, and relentless execution.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-black/10 pt-16 md:grid-cols-2">
            <p className="font-body text-base leading-relaxed text-black/60">
              Placeholder — client content coming soon. This section will
              describe the founding story, the team&apos;s background, and the
              agency&apos;s evolution from its origins to where it stands today
              as a trusted partner for leading brands.
            </p>
            <p className="font-body text-base leading-relaxed text-black/60">
              Placeholder — client content coming soon. This section will
              highlight key milestones, landmark campaigns, and the philosophy
              that drives every client engagement — from first brief to final
              report.
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-black py-32 lg:py-44">
        <Container>
          <div className="mb-16">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Our Values
              </span>
            </div>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white lg:text-5xl">
              How We Operate.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/[0.06] sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="bg-black p-8 lg:p-10">
                <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
                  {value.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-relaxed text-white/50">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats */}
      <Stats />

      {/* Team */}
      <section className="bg-white py-32 lg:py-44">
        <Container>
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-black" aria-hidden="true" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                  Our Team
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight lg:text-5xl">
                The People
                <br />
                Behind the Work.
              </h2>
            </div>
            <p className="max-w-xs font-body text-sm leading-relaxed text-black/55 lg:text-right">
              Placeholder — team profiles and photography will be provided by
              the client.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                {/* Photo placeholder */}
                <div className="mx-auto flex aspect-square w-full flex-col items-center justify-center gap-2 bg-gray-100 transition-colors group-hover:bg-gray-200">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black/15"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="mt-3 font-display text-xs font-bold uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="mt-1 font-body text-xs text-black/45">
                  {member.role}
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
