import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 2000)
  }

  return (
    <section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required placeholder="Name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/40"/>
              <input required type="email" placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/40"/>
            </div>
            <textarea required placeholder="Message" rows={5} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-400/40"/>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition-colors">
              <Send size={16}/> Send Message
            </button>
          </form>
          <div className="mt-6 flex items-center gap-4 text-white/80">
            <a href="https://github.com" className="inline-flex items-center gap-2 hover:text-white"><Github size={18}/> GitHub</a>
            <a href="https://linkedin.com" className="inline-flex items-center gap-2 hover:text-white"><Linkedin size={18}/> LinkedIn</a>
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 hover:text-white"><Mail size={18}/> Email</a>
          </div>
        </div>
        <Animate sent={sent} />
      </div>
    </section>
  )
}

function Animate({ sent }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: sent ? 1 : 0, y: sent ? 0 : -10, scale: sent ? 1 : 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="pointer-events-none fixed inset-0 z-50 flex items-start justify-center pt-20"
    >
      <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/15 px-4 py-2 text-emerald-200 shadow-lg backdrop-blur">
        Message sent. I’ll get back to you soon!
      </div>
    </motion.div>
  )
}
