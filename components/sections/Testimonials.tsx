import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

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
    <section className="bg-white py-56 lg:py-80">
      <Container>
        {/* Section header */}
        <Reveal className="mb-16 flex flex-col items-center text-center">
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
        </Reveal>

        {/* Testimonials grid */}
        <Reveal stagger className="grid grid-cols-1 gap-px bg-black/8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author + t.role}
              className="group relative bg-white p-8 lg:p-10"
            >
              {/* Accent bar — draws in from left on hover */}
              <div
                className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
                aria-hidden="true"
              />

              {/* Star rating */}
              <div className="mb-5 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-accent"
                    aria-hidden="true"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

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
        </Reveal>
      </Container>
    </section>
  )
}
