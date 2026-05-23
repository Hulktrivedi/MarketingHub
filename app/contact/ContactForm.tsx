'use client'

import { useState, useId } from 'react'
import { Button } from '@/components/ui/Button'

type Status = 'idle' | 'submitting' | 'success'

const fieldClasses =
  'w-full border border-white/10 bg-white/[0.04] px-4 py-3 font-body text-sm text-white placeholder-white/25 outline-none transition-all duration-200 focus:border-accent focus:bg-white/[0.07]'

const labelClasses =
  'mb-2 block font-body text-xs font-medium uppercase tracking-[0.15em] text-white/40'

const selectArrow =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E\")"

const selectClasses = `${fieldClasses} appearance-none cursor-pointer`

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const nameId = useId()
  const emailId = useId()
  const phoneId = useId()
  const companyId = useId()
  const serviceId = useId()
  const budgetId = useId()
  const timelineId = useId()
  const messageId = useId()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 1000)
  }

  if (status === 'success') {
    return (
      <div className="flex min-h-[500px] flex-col items-center justify-center gap-6 py-16 text-center">
        <div className="flex h-20 w-20 items-center justify-center bg-accent">
          <svg
            width="36"
            height="36"
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
        <div>
          <h2 className="font-display text-2xl font-bold uppercase text-white">
            Message Received
          </h2>
          <p className="mx-auto mt-3 max-w-sm font-body text-sm leading-relaxed text-white/50">
            Thank you for reaching out. A member of our team will be in touch
            within one business day.
          </p>
        </div>
        <Button href="/" variant="ghost" size="md">
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <fieldset
        disabled={status === 'submitting'}
        className="space-y-5 disabled:opacity-60"
        style={{ border: 'none', padding: 0, margin: 0 }}
      >
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={nameId} className={labelClasses}>
              Full Name <span aria-hidden="true">*</span>
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              required
              autoComplete="name"
              className={fieldClasses}
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor={emailId} className={labelClasses}>
              Email Address <span aria-hidden="true">*</span>
            </label>
            <input
              id={emailId}
              name="email"
              type="email"
              required
              autoComplete="email"
              className={fieldClasses}
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Row 2: Company + Phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={companyId} className={labelClasses}>
              Company
            </label>
            <input
              id={companyId}
              name="company"
              type="text"
              autoComplete="organization"
              className={fieldClasses}
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor={phoneId} className={labelClasses}>
              Phone Number
            </label>
            <input
              id={phoneId}
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClasses}
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        {/* Row 3: Service Interest */}
        <div>
          <label htmlFor={serviceId} className={labelClasses}>
            Service Interest
          </label>
          <div className="relative">
            <select
              id={serviceId}
              name="service"
              className={selectClasses}
              style={{
                backgroundImage: selectArrow,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 1rem center',
                paddingRight: '2.5rem',
              }}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service…
              </option>
              <option value="brand-strategy">Brand Strategy</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="content-creation">Content Creation</option>
              <option value="seo-analytics">SEO &amp; Analytics</option>
              <option value="paid-media">Paid Media</option>
              <option value="social-media">Social Media</option>
              <option value="multiple">Multiple Services</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
        </div>

        {/* Row 4: Budget + Timeline */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={budgetId} className={labelClasses}>
              Estimated Budget
            </label>
            <div className="relative">
              <select
                id={budgetId}
                name="budget"
                className={selectClasses}
                style={{
                  backgroundImage: selectArrow,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  paddingRight: '2.5rem',
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select range…
                </option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 – $15,000</option>
                <option value="15k-50k">$15,000 – $50,000</option>
                <option value="50k-100k">$50,000 – $100,000</option>
                <option value="100k-plus">$100,000+</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor={timelineId} className={labelClasses}>
              Project Timeline
            </label>
            <div className="relative">
              <select
                id={timelineId}
                name="timeline"
                className={selectClasses}
                style={{
                  backgroundImage: selectArrow,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 1rem center',
                  paddingRight: '2.5rem',
                }}
                defaultValue=""
              >
                <option value="" disabled>
                  Select timeline…
                </option>
                <option value="asap">ASAP (within 1 month)</option>
                <option value="1-3-months">1 – 3 Months</option>
                <option value="3-6-months">3 – 6 Months</option>
                <option value="6-plus-months">6+ Months</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>
          </div>
        </div>

        {/* Row 5: Message */}
        <div>
          <label htmlFor={messageId} className={labelClasses}>
            Tell Us About Your Project <span aria-hidden="true">*</span>
          </label>
          <textarea
            id={messageId}
            name="message"
            required
            rows={6}
            className={`${fieldClasses} resize-none`}
            placeholder="Describe your goals, challenges, and what success looks like for you…"
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

        <p className="font-body text-xs text-white/25 text-center">
          We respond to all enquiries within one business day.
        </p>
      </fieldset>
    </form>
  )
}
