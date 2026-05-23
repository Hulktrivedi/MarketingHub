import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center bg-black"
      aria-label="Hero"
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 8% 55%, rgba(255,188,125,0.09) 0%, transparent 65%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at 90% 10%, rgba(255,188,125,0.05) 0%, transparent 60%)',
        }}
      />

      <Container className="relative z-10 py-24">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div
            className="animate-fade-up mb-8 flex items-center gap-4"
            style={{ animationDelay: '0ms' }}
          >
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Full-Service Marketing Agency
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up font-display text-5xl font-bold uppercase leading-[0.88] tracking-[-0.02em] text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            style={{ animationDelay: '80ms' }}
          >
            We Build
            <br />
            Brands That
            <br />
            <span className="text-accent">Dominate.</span>
          </h1>

          {/* Descriptor */}
          <p
            className="animate-fade-up mt-8 max-w-lg font-body text-base leading-relaxed text-white/50 md:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            Strategic marketing solutions that transform businesses into market
            leaders. From brand strategy to full digital execution — we deliver
            results that move the needle.
          </p>

          {/* CTAs */}
          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '240ms' }}
          >
            <Button href="/contact" variant="secondary" size="lg">
              Start Your Project
            </Button>
            <Button href="/portfolio" variant="ghost" size="lg">
              View Our Work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                →
              </span>
            </Button>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <div
        className="animate-fade-up absolute bottom-10 left-1/2 -translate-x-1/2"
        style={{ animationDelay: '500ms' }}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
            <div className="animate-bounce-subtle h-1.5 w-0.5 rounded-full bg-white/45" />
          </div>
          <span className="font-body text-[10px] uppercase tracking-[0.25em] text-white/20">
            Scroll
          </span>
        </div>
      </div>
    </section>
  )
}
