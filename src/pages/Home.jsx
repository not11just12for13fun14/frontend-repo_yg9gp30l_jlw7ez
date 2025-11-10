import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

export default function Home() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 py-8">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight"
            >
              Alex Carter
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                Front-End Developer
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-white/70 max-w-xl"
            >
              I craft fast, accessible, and delightful web experiences with React, TypeScript, and modern tooling.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-4"
            >
              <a href="/projects" className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition-colors">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors">
                Contact Me
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors">
                <Download size={16} /> Download CV
              </a>
            </motion.div>
          </div>
          <div className="h-[420px] sm:h-[520px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
