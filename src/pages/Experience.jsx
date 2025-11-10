import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'

const experiences = [
  { role: 'Front-End Developer', company: 'Creative Studio', period: '2022 — Present', desc: 'Leading UI development, design systems, and performance optimization across client projects.' },
  { role: 'UI Engineer', company: 'SaaS Startup', period: '2020 — 2022', desc: 'Built dashboard components, data visualizations, and onboarding flows with React + TypeScript.' },
  { role: 'Freelance Developer', company: 'Self-Employed', period: '2018 — 2020', desc: 'Delivered landing pages, portfolios, and e-commerce front-ends for small businesses.' },
]

export default function Experience() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><Briefcase className="text-cyan-400"/>Experience</h2>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="relative rounded-xl border border-white/10 bg-white/5 p-5">
                <div className="absolute -left-1 top-6 h-2 w-2 rounded-full bg-cyan-400" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">{exp.role} · <span className="text-white/70">{exp.company}</span></h3>
                  <span className="text-xs text-white/60">{exp.period}</span>
                </div>
                <p className="mt-2 text-white/70">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
