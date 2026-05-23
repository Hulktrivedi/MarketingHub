import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghost-light'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary: 'bg-black text-white hover:bg-accent hover:text-black',
  secondary: 'bg-accent text-black hover:bg-accent-bright',
  ghost: 'border border-white/30 text-white hover:bg-white hover:text-black hover:border-white',
  'ghost-light':
    'border border-black/20 text-black hover:bg-black hover:text-white hover:border-black',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-sm',
}

const base =
  'group inline-flex cursor-pointer select-none items-center justify-center gap-2 rounded font-body font-medium uppercase tracking-wide transition-all duration-300 ease-out active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent whitespace-nowrap disabled:pointer-events-none disabled:opacity-50'

interface SharedProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

interface AsLink extends SharedProps {
  href: string
  external?: boolean
  onClick?: never
  type?: never
  disabled?: never
  'aria-label'?: string
}

interface AsButton extends SharedProps {
  href?: never
  external?: never
  onClick?: ComponentPropsWithoutRef<'button'>['onClick']
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  'aria-label'?: string
}

type ButtonProps = AsLink | AsButton

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href != null) {
    const { href, external, 'aria-label': ariaLabel } = props as AsLink
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  const {
    onClick,
    type = 'button',
    disabled,
    'aria-label': ariaLabel,
  } = props as AsButton
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
