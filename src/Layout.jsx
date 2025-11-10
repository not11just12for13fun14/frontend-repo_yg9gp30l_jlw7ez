import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-white hover:bg-white/10 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{theme === 'dark' ? 'Light' : 'Dark'}</span>
    </button>
  )
}

function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => { setOpen(false) }, [location.pathname])

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-cyan-400' : 'text-white/80 hover:text-white'}`

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/education', label: 'Education' },
    { to: '/experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <Link to="/" className="text-white font-semibold tracking-tight">
              <span className="text-cyan-400">&lt;/&gt;</span> Dev Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
              ))}
              <ThemeToggle theme={theme} setTheme={setTheme} />
            </div>
            <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden border-t border-white/10 px-4 pb-4"
              >
                <div className="flex flex-col gap-2 pt-2">
                  {links.map((l) => (
                    <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>
                  ))}
                  <div className="pt-2"><ThemeToggle theme={theme} setTheme={setTheme} /></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 py-10 text-center text-sm text-white/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p>
          Built with React, Tailwind, and a splash of Framer Motion. © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  const location = useLocation()
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'dark'
    setTheme(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <Navbar theme={theme} setTheme={setTheme} />

      <main className="relative z-10 pt-28">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {children || <Outlet />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
