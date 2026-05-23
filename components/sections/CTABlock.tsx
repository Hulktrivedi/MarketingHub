'use client'

import { useState, useId } from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

type Status = 'idle' | 'submitting' | 'success'

const inputClasses =
  'w-full border border-white/10 bg-white/[0.04] px-4 py-3 font-body text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-accent focus:bg-white/[0.07]'

const labelClasses =
  'mb-2 block font-body text-xs font-medium uppercase tracking-[0.15em] text-white/40'

export function CTABlock() {
  const [status, setStatus] = useState<Status>('idle')
  const nameId = useId()
  const emailId = useId()
  const companyId = useId()
  const messageId = useId()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 1000)
  }

  return (
    <section id="contact" className="bg-black py-24 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left — CTA copy */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-10 bg-accent" aria-hidden="true" />
              <span className="font-body text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Get In Touch
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold uppercase leading-[0.92] tracking-tight text-white lg:text-5xl">
              Ready to
              <br />
              Transform
              <br />
              Your Brand?
            </h2>

            <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-white/50">
              Let&apos;s talk about your goals. Our team is ready to build a
              strategy that puts your brand ahead of the competition.
            </p>

            <address className="mt-10 space-y-3 not-italic">
              <a
                href="mailto:hello@marketinghub.com"
                className="flex items-center gap-3 font-body text-sm text-white/45 transition-colors hover:text-accent"
              >
                hello@marketinghub.com
              </a>
              <a
                href="tel:+11234567890"
                className="flex items-center gap-3 font-body text-sm text-white/45 transition-colors hover:text-accent"
              >
                +1 (123) 456-7890
              </a>
            </address>
          </div>

          {/* Right — Form */}
          <div>
            {status === 'success' ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center bg-accent">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold uppercase text-white">
                  Message Sent
                </h3>
                <p className="max-w-xs font-body text-sm text-white/50">
                  Thank you. We&apos;ll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
              >
                <fieldset
                  disabled={status === 'submitting'}
                  className="space-y-4 disabled:opacity-60"
                  style={{ border: 'none', padding: 0, margin: 0 }}
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor={nameId} className={labelClasses}>
                        Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id={nameId}
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className={inputClasses}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor={emailId} className={labelClasses}>
                        Email <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id={emailId}
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={inputClasses}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={companyId} className={labelClasses}>
                      Company
                    </label>
                    <input
                      id={companyId}
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={inputClasses}
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor={messageId} className={labelClasses}>
                      Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id={messageId}
                      name="message"
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    className="w-full"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </Button>
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
