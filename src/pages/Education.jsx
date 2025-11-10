import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'

const items = [
  { title: 'B.Sc. in Computer Science', place: 'State University', year: '2016 — 2020' },
  { title: 'Frontend Engineer Nanodegree', place: 'Udacity', year: '2020' },
  { title: 'TypeScript Mastery', place: 'Online Course', year: '2021' },
  { title: 'Design Systems & Accessibility', place: 'Workshop', year: '2022' },
]

export default function Education() {
  return (
    <section>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-3"><GraduationCap className="text-cyan-400"/>Education</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/60">{item.year}</p>
              <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
              <p className="text-white/70">{item.place}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
