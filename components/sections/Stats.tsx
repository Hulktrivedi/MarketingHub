import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const stats = [
  { number: '200+', label: 'Clients Served' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Client Retention' },
]

export function Stats() {
  return (
    <section
      className="border-t border-white/[0.07] bg-black py-20"
      aria-label="Company statistics"
    >
      <Container>
        <Reveal stagger as="dl" className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((stat) => (
            /*
             * flex-col-reverse: DOM order is dt (label) → dd (number),
             * reversed visually so the number renders above the label.
             */
            <div
              key={stat.label}
              className="flex flex-col-reverse items-center gap-2 text-center"
            >
              <dt className="font-body text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                {stat.label}
              </dt>
              <dd className="font-display text-5xl font-bold tracking-tight text-accent lg:text-6xl">
                {stat.number}
              </dd>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
