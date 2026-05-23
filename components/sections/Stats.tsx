'use client'

import { useEffect, useRef, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const stats = [
  { number: 200, suffix: '+', label: 'Clients Served' },
  { number: 500, suffix: '+', label: 'Projects Delivered' },
  { number: 15, suffix: '+', label: 'Years Experience' },
  { number: 98, suffix: '%', label: 'Client Retention' },
]

function StatNumber({
  target,
  suffix,
  delay,
}: {
  target: number
  suffix: string
  delay: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) {
      setCount(target)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          setTimeout(() => {
            const duration = 1600
            const startTime = performance.now()
            const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1)
              setCount(Math.round(easeOut(progress) * target))
              if (progress < 1) requestAnimationFrame(tick)
            }
            requestAnimationFrame(tick)
          }, delay)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, delay])

  return (
    <dd
      ref={ref as React.RefObject<HTMLElement>}
      className="font-display text-5xl font-bold tracking-tight text-accent lg:text-6xl"
    >
      {count}
      {suffix}
    </dd>
  )
}

export function Stats() {
  return (
    <section
      className="border-t border-white/[0.07] bg-charcoal py-28 lg:py-36"
      aria-label="Company statistics"
    >
      <Container>
        <Reveal stagger as="dl" className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col-reverse items-center gap-2 text-center"
            >
              <dt className="font-body text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                {stat.label}
              </dt>
              <StatNumber target={stat.number} suffix={stat.suffix} delay={i * 80} />
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
