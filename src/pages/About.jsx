import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start gap-8">
            <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=600&auto=format&fit=crop" alt="Portrait" className="w-32 h-32 rounded-2xl object-cover border border-white/10" />
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">About Me</h2>
              <p className="text-white/70">
                I’m Alex, a front-end developer who loves turning ideas into polished interfaces. I care about performance, accessibility, and developer experience, and I enjoy building systems that scale with clean, reusable components.
              </p>
              <p className="text-white/70">
                When I’m not pushing pixels, you’ll find me exploring motion design, learning about UX psychology, or tinkering with new tools in the React ecosystem.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
