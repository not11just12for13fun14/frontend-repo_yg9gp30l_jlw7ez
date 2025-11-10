import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'UI Analytics Dashboard',
    img: 'https://images.unsplash.com/photo-1551281044-8b89aacd0e3e?q=80&w=1400&auto=format&fit=crop',
    desc: 'A modular dashboard with data viz, theming, and role-based access.',
    stack: ['React', 'TypeScript', 'Tailwind', 'Recharts'],
    live: '#',
    code: '#',
  },
  {
    title: 'E-commerce Frontend',
    img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
    desc: 'Product gallery, filters, and cart with smooth transitions.',
    stack: ['Next.js', 'Zustand', 'Stripe'],
    live: '#',
    code: '#',
  },
  {
    title: 'Portfolio Template',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1400&auto=format&fit=crop',
    desc: 'Multi-page portfolio with animations and CMS support.',
    stack: ['React', 'Framer Motion', 'Contentful'],
    live: '#',
    code: '#',
  },
  {
    title: 'Design System Library',
    img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop',
    desc: 'Composable components with tokens and docs site.',
    stack: ['Storybook', 'TypeScript'],
    live: '#',
    code: '#',
  },
]

export default function Projects() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative">
                <img src={p.img} alt={p.title} className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-white/70">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s, idx) => (
                    <span key={idx} className="text-xs rounded-full border border-white/10 bg-white/5 px-2 py-1 text-white/80">{s}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a href={p.live} className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300"><ExternalLink size={16}/>Live</a>
                  <a href={p.code} className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white"><Github size={16}/>Code</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
