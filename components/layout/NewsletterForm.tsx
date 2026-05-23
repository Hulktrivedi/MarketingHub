'use client'

import { useState, useId } from 'react'

type Status = 'idle' | 'submitting' | 'success'

export function NewsletterForm() {
  const [status, setStatus] = useState<Status>('idle')
  const emailId = useId()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 800)
  }

  if (status === 'success') {
    return (
      <p className="font-body text-sm text-accent">
        You&apos;re subscribed. Thank you!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4" aria-label="Newsletter signup">
      <div className="flex gap-0">
        <label htmlFor={emailId} className="sr-only">
          Email address
        </label>
        <input
          id={emailId}
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          disabled={status === 'submitting'}
          className="min-w-0 flex-1 rounded-l bg-white/8 px-4 py-2.5 font-body text-sm text-white placeholder-white/30 outline-none transition-colors focus:bg-white/12 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="shrink-0 rounded-r bg-accent px-4 py-2.5 font-body text-xs font-medium uppercase tracking-wide text-black transition-colors hover:bg-accent-bright disabled:opacity-50"
        >
          {status === 'submitting' ? '…' : 'Join'}
        </button>
      </div>
    </form>
  )
}
