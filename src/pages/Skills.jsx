import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Zap } from 'lucide-react'

const categories = [
  { title: 'Core', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript'] },
  { title: 'Frameworks', items: ['React', 'Next.js', 'Vite', 'Astro'] },
  { title: 'Styling', items: ['Tailwind', 'Framer Motion', 'Radix UI'] },
  { title: 'Data', items: ['TanStack Query', 'Zustand', 'REST'] },
]

export default function Skills() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex items-center gap-3 mb-8">
          <Code2 className="text-cyan-400"/>
          <h2 className="text-3xl font-bold">Skills</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2"><Zap size={18} className="text-cyan-400"/>{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((s, idx) => (
                  <span key={idx} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 hover:bg-white/10 transition-colors">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
