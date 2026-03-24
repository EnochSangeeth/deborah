import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Education', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: 'rgba(13,13,26,0.88)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        borderBottom: '1px solid rgba(108,99,255,0.14)',
        padding: '12px 0',
      } : { padding: '20px 0' }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white text-xs font-black"
            style={{ background: 'linear-gradient(135deg, #6C63FF, #E8A598)' }}>
            DK
          </div>
          <span className="text-sm font-bold text-cream hidden sm:block tracking-wide">Deborah Keren</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-muted hover:text-cream text-sm font-medium transition-colors duration-200 relative group">
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, #6C63FF, #E8A598)' }} />
              </a>
            </li>
          ))}
          <li>
            <a href="/cv.pdf" download className="btn-violet !py-2 !px-5 !text-xs">Download CV</a>
          </li>
        </ul>

        <button className="md:hidden text-muted hover:text-cream transition-colors"
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-4 mt-3 rounded-2xl p-6"
            style={{ background: 'rgba(18,18,42,0.97)', backdropFilter: 'blur(24px)', border: '1px solid rgba(108,99,255,0.15)' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-5">
              {links.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                    className="text-muted hover:text-cream font-medium transition-colors text-sm"
                    onClick={() => setOpen(false)}>{l}</a>
                </li>
              ))}
              <li><a href="/cv.pdf" download className="btn-violet w-full justify-center">Download CV</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
