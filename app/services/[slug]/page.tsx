import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceBySlug, services } from '@/lib/services'
import { PageHero } from '@/components/ui/PageHero'
import { CTABlock } from '@/components/sections/CTABlock'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.intro[0],
    keywords: service.seoKeywords,
    openGraph: {
      title: `${service.title} | MarketingHub`,
      description: service.intro[0],
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const titleNode = (
    <>
      {service.displayTitle.map((line, i) => (
        <span key={i}>
          {line}
          {i < service.displayTitle.length - 1 && <br />}
        </span>
      ))}
    </>
  )

  return (
    <>
      <PageHero
        label="Our Services"
        title={titleNode}
        subtitle={service.tagline}
      />

      {/* Overview */}
      <section className="bg-white py-32 lg:py-44">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[2fr_1fr] lg:gap-24">
            {/* Left — intro paragraphs */}
            <Reveal className="space-y-6">
              {service.intro.map((paragraph, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? 'font-body text-lg leading-relaxed text-black md:text-xl'
                      : 'font-body text-base leading-relaxed text-black/60'
                  }
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>

            {/* Right — at a glance */}
            <Reveal delay={120}>
              <div className="border-l-2 border-accent pl-8">
                <p className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                  At a Glance
                </p>
                <ul className="mt-5 space-y-3" role="list">
                  {service.subServices.slice(0, 4).map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 font-body text-sm leading-snug text-black/65"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-accent"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* What We Include */}
      <section className="bg-gray-100 py-32 lg:py-44">
        <Container>
          <Reveal className="mb-14">
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-black" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                What We Include
              </span>
            </div>
            <h2 className="max-w-xl font-display text-3xl font-bold uppercase leading-[0.92] tracking-tight lg:text-4xl">
              Everything You Need
              <br />
              to Succeed.
            </h2>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {service.subServices.map((item) => (
              <div
                key={item}
                className="group relative bg-gray-100 p-6 transition-colors duration-300 hover:bg-white"
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <div className="flex items-start gap-4">
                  <div
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-black transition-colors duration-300 group-hover:bg-accent"
                    aria-hidden="true"
                  >
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-colors duration-300 group-hover:text-black"
                      style={{ color: 'white' }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="font-body text-sm font-medium leading-snug text-black">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <CTABlock />
    </>
  )
}
