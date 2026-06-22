import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { services } from '@/lib/services'
import type { ReactNode } from 'react'

const icons: Record<string, ReactNode> = {
  seo: (
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
  'website-development': (
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  'app-development': (
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
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  'graphic-designing': (
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
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  'google-my-business': (
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
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  'google-meta-ads': (
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
  'social-media-management': (
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
  'email-marketing': (
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  'video-editing': (
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
      <polygon points="23 7 16 12 23 17 23 7" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  ),
  'content-writing': (
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
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
}

export function Services({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="services" className="bg-gray-100 py-32 lg:py-44">
      <Container>
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
                Complete Technology
                <br />
                & Marketing Solutions.
              </h2>
            </div>
            <p className="max-w-sm font-body text-sm leading-relaxed text-black/55 lg:text-right">
              We provide complete technology and marketing solutions designed to
              help businesses grow online and improve operational efficiency.
            </p>
          </Reveal>
        )}

        <Reveal
          stagger
          className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-5"
        >
          {services.map((service, i) => (
            <article
              key={service.slug}
              className="group relative bg-gray-100 p-8 transition-colors duration-300 ease-out hover:bg-white"
            >
              <div
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />
              <span className="font-body text-xs font-medium text-black/25">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="mb-5 mt-6 flex h-11 w-11 items-center justify-center bg-black text-white transition-[colors,transform] duration-300 ease-out group-hover:scale-110 group-hover:bg-accent group-hover:text-black">
                {icons[service.slug]}
              </div>

              <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                {service.shortTitle}
              </h3>

              <p className="mt-3 font-body text-sm leading-relaxed text-black/55">
                {service.description}
              </p>

              <Link
                href={`/services/${service.slug}`}
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
