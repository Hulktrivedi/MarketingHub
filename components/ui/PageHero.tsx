import { Container } from '@/components/ui/Container'

interface PageHeroProps {
  label: string
  title: React.ReactNode
  subtitle?: string
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative bg-black pb-20 pt-36 lg:pb-24 lg:pt-44">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-0 select-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 25% 60%, rgba(255,188,125,0.07) 0%, transparent 65%)',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-10 bg-accent" aria-hidden="true" />
            <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
              {label}
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-white/50 md:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
