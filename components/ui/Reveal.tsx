'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Transition delay in ms — only applies in block mode */
  delay?: number
  /** stagger: animates direct children with cascading delay; block: animates the wrapper itself */
  stagger?: boolean
  /** HTML element to render as (default: 'div') */
  as?: React.ElementType
}

/**
 * Scroll-triggered reveal. Uses IntersectionObserver to fire once when the
 * element enters the viewport. The CSS motion-safe: variant ensures users who
 * prefer reduced motion always see content immediately, with no animation.
 *
 * - block mode (default): the wrapper element fades up
 * - stagger mode: the wrapper is transparent; its direct children fade up
 *   with cascading delays via the .reveal-stagger CSS class in globals.css
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const Tag = as

  if (stagger) {
    return (
      <Tag
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        data-revealed={visible || undefined}
        className={cn('reveal-stagger', className)}
      >
        {children}
      </Tag>
    )
  }

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={cn(
        'motion-safe:transition motion-safe:duration-700',
        visible
          ? 'translate-y-0 opacity-100'
          : 'motion-safe:translate-y-8 motion-safe:opacity-0',
        className,
      )}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </Tag>
  )
}
