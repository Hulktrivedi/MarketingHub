import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import type { ReactNode } from 'react'

interface Service {
  index: string
  icon: ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    index: '01',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Brand Strategy',
    description:
      'Define your market position, brand voice, and visual identity with strategic clarity that resonates with your audience and sets you apart.',
  },
  {
    index: '02',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Digital Marketing',
    description:
      'Full-funnel digital campaigns across every channel — engineered for measurable growth, precision targeting, and maximum return on investment.',
  },
  {
    index: '03',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: 'Content Creation',
    description:
      'Compelling content that captures attention, builds authority, and converts prospects into loyal customers — across every format and platform.',
  },
  {
    index: '04',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'SEO & Analytics',
    description:
      'Data-driven search optimization and analytics frameworks that surface your brand to the right audience at precisely the right moment.',
  },
  {
    index: '05',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: 'Paid Media',
    description:
      'Precision-targeted advertising across Google, Meta, LinkedIn, and beyond — every dollar optimized toward your highest-value outcomes.',
  },
  {
    index: '06',
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    title: 'Social Media',
    description:
      'Strategic social presence that builds community, drives engagement, and amplifies your brand story to audiences that convert.',
  },
]

export function Services({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="services" className="bg-gray-100 py-24 lg:py-32">
      <Container>
        {/* Section header */}
        {showHeader && (
          <Reveal className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-px w-10 bg-black" aria-hidden="true" />
                <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
                  Our Services
                </span>
              </div>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight lg:text-5xl">
                Everything You Need
                <br />
                to Grow.
              </h2>
            </div>
            <p className="max-w-sm font-body text-sm leading-relaxed text-black/55 lg:text-right">
              Comprehensive marketing solutions built for modern businesses.
              Strategy, execution, and measurable results — all under one roof.
            </p>
          </Reveal>
        )}

        {/* Grid with 1px divider pattern */}
        <Reveal
          stagger
          className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group bg-gray-100 p-8 transition-colors duration-300 ease-out hover:bg-white"
            >
              <span className="font-body text-xs font-medium text-black/25">
                {service.index}
              </span>

              <div className="mb-5 mt-6 flex h-11 w-11 items-center justify-center bg-black text-white transition-[colors,transform] duration-300 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-black">
                {service.icon}
              </div>

              <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                {service.title}
              </h3>

              <p className="mt-3 font-body text-sm leading-relaxed text-black/55">
                {service.description}
              </p>

              <Link
                href="/services"
                className="group/link mt-6 inline-flex items-center gap-2 font-body text-xs font-medium uppercase tracking-wide transition-colors duration-300 ease-out hover:text-accent"
                aria-label={`Learn more about ${service.title}`}
              >
                Learn More
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-out group-hover/link:translate-x-1"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
