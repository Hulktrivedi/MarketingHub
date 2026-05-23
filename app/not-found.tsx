import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: "The page you're looking for doesn't exist or may have moved.",
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-[100svh] items-center bg-black"
      aria-labelledby="not-found-heading"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,188,125,0.06) 0%, transparent 70%)',
        }}
      />

      <Container className="relative z-10 py-24">
        <div className="relative text-center">
          {/* Background 404 numeral */}
          <span
            className="pointer-events-none select-none font-display font-bold leading-none text-white/[0.04]"
            aria-hidden="true"
            style={{ fontSize: 'clamp(8rem, 30vw, 22rem)' }}
          >
            404
          </span>

          {/* Foreground content */}
          <div className="-mt-12 lg:-mt-20">
            <div className="mb-6 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Page Not Found
              </span>
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
            </div>

            <h1
              id="not-found-heading"
              className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-white md:text-4xl lg:text-5xl"
            >
              This Page Doesn&apos;t Exist.
            </h1>

            <p className="mx-auto mt-5 max-w-md font-body text-sm leading-relaxed text-white/50 md:text-base">
              The page you&apos;re looking for may have moved or no longer
              exists. Let&apos;s get you back on track.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/" variant="secondary" size="lg">
                Back to Home
              </Button>
              <Button href="/contact" variant="ghost" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
