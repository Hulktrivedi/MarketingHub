'use client'

import { useState, useEffect, useId } from 'react'
import Link from 'next/link'
import clsx from 'clsx'

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuId = useId()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false)
    }
    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev)

  const isDark = !isScrolled

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/96 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className={clsx(
            'font-display text-xl font-bold uppercase tracking-tight transition-colors duration-300 hover:text-accent lg:text-2xl',
            isDark ? 'text-white' : 'text-black'
          )}
          aria-label="MarketingHub — Home"
        >
          {/* Placeholder — client logo to be provided */}
          MarketingHub
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'font-body text-sm font-medium uppercase tracking-wide transition-colors duration-300 hover:text-accent',
                isDark ? 'text-white/80' : 'text-black'
              )}
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className={clsx(
              'rounded px-6 py-3 font-body text-sm font-medium uppercase tracking-wide transition-all duration-300',
              isDark
                ? 'border border-white/30 text-white hover:border-white hover:bg-white hover:text-black'
                : 'bg-black text-white hover:bg-accent hover:text-black'
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center md:hidden"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls={mobileMenuId}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className="sr-only">
            {isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          </span>
          <div className="flex h-5 w-6 flex-col justify-between" aria-hidden="true">
            <span
              className={clsx(
                'block h-0.5 w-full origin-center transform transition-all duration-300',
                isDark ? 'bg-white' : 'bg-black',
                isMobileMenuOpen && 'translate-y-[9px] rotate-45'
              )}
            />
            <span
              className={clsx(
                'block h-0.5 w-full transition-all duration-300',
                isDark ? 'bg-white' : 'bg-black',
                isMobileMenuOpen && 'scale-x-0 opacity-0'
              )}
            />
            <span
              className={clsx(
                'block h-0.5 w-full origin-center transform transition-all duration-300',
                isDark ? 'bg-white' : 'bg-black',
                isMobileMenuOpen && '-translate-y-[9px] -rotate-45'
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id={mobileMenuId}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={clsx(
          'absolute inset-x-0 top-full bg-white transition-all duration-300 md:hidden',
          isMobileMenuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-2 opacity-0'
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="border-t border-black/5 px-6 py-6">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation links">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-body text-sm font-medium uppercase tracking-wide py-2 transition-colors hover:text-accent"
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Link
            href="/contact"
            className="mt-6 block rounded bg-black px-6 py-3 text-center font-body text-sm font-medium uppercase tracking-wide text-white transition-all hover:bg-accent hover:text-black"
            onClick={closeMobileMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}
