import Link from 'next/link'
import { NewsletterForm } from '@/components/layout/NewsletterForm'

const footerLinks = {
  services: [
    { name: 'SEO', href: '/services/seo' },
    { name: 'Website Development', href: '/services/website-development' },
    { name: 'App Development', href: '/services/app-development' },
    { name: 'Google & Meta Ads', href: '/services/google-meta-ads' },
    { name: 'Social Media Management', href: '/services/social-media-management' },
    { name: 'Email Marketing', href: '/services/email-marketing' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: '#',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-36 lg:py-52 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-bold uppercase tracking-tight transition-colors hover:text-accent lg:text-2xl"
              aria-label="MarketingHub — Home"
            >
              MarketingHub
            </Link>
            <p className="mt-4 font-body text-sm leading-relaxed text-white/45">
              Transform your business with innovative technology solutions and
              digital marketing strategies that deliver exceptional, measurable
              results.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white/40 transition-colors hover:text-accent"
                  aria-label={`${social.name} — opens in new tab`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.15em]">
              Services
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/45 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="font-body text-sm text-accent/70 transition-colors hover:text-accent"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.15em]">
              Company
            </h3>
            <ul className="mt-5 space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/45 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xs font-bold uppercase tracking-[0.15em]">
              Stay Updated
            </h3>
            <p className="mt-5 font-body text-sm leading-relaxed text-white/45">
              Technology insights and digital marketing tips — delivered to your
              inbox.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.07] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-body text-xs text-white/30">
              © {currentYear} MarketingHub. All rights reserved.
            </p>
            <nav aria-label="Legal links">
              <ul className="flex flex-wrap gap-6" role="list">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="font-body text-xs text-white/30 transition-colors hover:text-white/70"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
