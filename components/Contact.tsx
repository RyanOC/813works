'use client'

import { useState } from 'react'

const inputClass = "w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-white/50 transition-colors text-sm"
const labelClass = "block text-xs tracking-widest uppercase text-neutral-300 mb-2"

export default function Contact() {
  const [result, setResult] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setResult('')

    const formData = new FormData(e.currentTarget)
    formData.append('access_key', '9059fcde-52a6-405d-89ab-d287f33a5845')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()
    setSubmitting(false)
    setResult(data.success ? 'success' : 'error')
  }

  return (
    <section id="contact" className="px-8 lg:px-16 py-24">
      <div className="max-w-5xl">
        <p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg">
          Open to integration projects, internal tools, dashboards, and exploratory work. If you have systems that need to talk to each other, reach out.
        </p>

        {result === 'success' ? (
          <p className="text-white text-lg">Message received. We'll be in touch.</p>
        ) : (
          <form onSubmit={onSubmit} className="space-y-8 max-w-lg">
            <div>
              <label htmlFor="name" className={labelClass}>Name</label>
              <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input type="email" id="email" name="email" required className={inputClass} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="company" className={labelClass}>Company (optional)</label>
              <input type="text" id="company" name="company" className={inputClass} placeholder="Organization name" />
            </div>
            <div>
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea id="message" name="message" rows={4} required className={inputClass} placeholder="What's on your mind?" />
            </div>
            {result === 'error' && <p className="text-neutral-500 text-xs">Something went wrong. Please try again.</p>}
            <button
              type="submit"
              disabled={submitting}
              className="bg-white text-black text-sm font-semibold px-7 py-3 hover:bg-neutral-200 transition-colors tracking-wide disabled:opacity-50"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
