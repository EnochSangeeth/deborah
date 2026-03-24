import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['About', 'Experience', 'Education', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-lg shadow-black/20 py-3' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        <a href="#" className="text-lg font-extrabold gold-text tracking-tight">CK</a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-slate-300 hover:text-gold text-sm font-medium transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              download
              className="glow-btn px-5 py-2 rounded-full bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold text-xs"
            >
              Download CV
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gold"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden glass mt-2 mx-4 rounded-2xl p-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="flex flex-col gap-5">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-slate-200 hover:text-gold font-medium transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {l}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-block glow-btn px-6 py-2.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold text-sm"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
