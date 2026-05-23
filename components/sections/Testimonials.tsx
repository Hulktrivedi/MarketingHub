import { Container } from '@/components/ui/Container'

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  initials: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'MarketingHub transformed our brand from a local business into a recognizable market leader. The results exceeded every expectation we had going in.',
    author: 'Client Name',
    role: 'CEO',
    company: 'Company Name',
    initials: 'CN',
  },
  {
    quote:
      "The team's strategic approach to our digital marketing doubled our qualified leads within the first quarter. Exceptional thinking, exceptional execution.",
    author: 'Client Name',
    role: 'Marketing Director',
    company: 'Company Name',
    initials: 'CN',
  },
  {
    quote:
      'Working with MarketingHub is like having an entire world-class marketing department on call. Responsive, creative, and relentlessly results-focused.',
    author: 'Client Name',
    role: 'Founder',
    company: 'Company Name',
    initials: 'CN',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <Container>
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-black" aria-hidden="true" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.2em]">
              Client Testimonials
            </span>
            <span className="h-px w-10 bg-black" aria-hidden="true" />
          </div>
          <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight lg:text-5xl">
            What Our Clients Say.
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-px bg-black/8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author + t.role}
              className="bg-white p-8 lg:p-10"
            >
              <span
                className="font-display text-5xl font-bold leading-none text-accent"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="mt-1">
                <p className="font-body text-sm leading-relaxed text-black/65 lg:text-base">
                  {t.quote}
                </p>
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center bg-black font-body text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="font-body text-sm font-semibold not-italic text-black">
                    {t.author}
                  </cite>
                  <p className="font-body text-xs text-black/45">
                    {t.role}, {t.company}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
