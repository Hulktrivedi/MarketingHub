import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { Container } from '@/components/ui/Container'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with MarketingHub. Tell us about your project and we'll build a strategy that puts your brand ahead of the competition.",
  openGraph: {
    title: 'Contact | MarketingHub',
    description:
      "Start a conversation. We respond to all enquiries within one business day.",
  },
}

const contactDetails = [
  {
    label: 'Email',
    value: 'hello@marketinghub.com',
    href: 'mailto:hello@marketinghub.com',
  },
  {
    label: 'Phone',
    value: '+1 (123) 456-7890',
    href: 'tel:+11234567890',
  },
]

const expectations = [
  'Response within one business day',
  'A dedicated point of contact from day one',
  'A no-obligation strategy consultation',
  'Complete confidentiality and discretion',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get In Touch"
        title={
          <>
            Let&apos;s Build
            <br />
            Something
            <br />
            Extraordinary.
          </>
        }
        subtitle="Ready to elevate your brand? Tell us about your project and our team will craft a strategy built to dominate your market."
      />

      <section className="bg-black py-56 lg:py-80">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">
            {/* Left — Contact info */}
            <aside>
              <div className="space-y-10">
                {/* Contact details */}
                <div>
                  <h2 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                    Contact
                  </h2>
                  <address className="mt-4 space-y-3 not-italic">
                    {contactDetails.map((detail) => (
                      <div key={detail.label}>
                        <p className="font-body text-xs uppercase tracking-wide text-white/30">
                          {detail.label}
                        </p>
                        <a
                          href={detail.href}
                          className="mt-1 block font-body text-sm text-white/70 transition-colors hover:text-accent"
                        >
                          {detail.value}
                        </a>
                      </div>
                    ))}
                  </address>
                </div>

                {/* What to expect */}
                <div>
                  <h2 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                    What to Expect
                  </h2>
                  <ul className="mt-4 space-y-3" role="list">
                    {expectations.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center bg-accent"
                          aria-hidden="true"
                        >
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="font-body text-sm leading-snug text-white/55">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Office hours */}
                <div>
                  <h2 className="font-display text-xs font-bold uppercase tracking-[0.15em] text-white/40">
                    Office Hours
                  </h2>
                  <div className="mt-4 space-y-1">
                    <p className="font-body text-sm text-white/55">
                      Monday – Friday
                    </p>
                    <p className="font-body text-sm font-medium text-white/70">
                      9:00 AM – 6:00 PM (EST)
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right — Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
