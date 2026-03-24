import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from './ThemeToggle'

const links = ['About', 'Experience', 'Education', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  const { light, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={scrolled ? {
        background: 'var(--bg)',
        backdropFilter: 'blur(28px)',
        WebkitBackdropFilter: 'blur(28px)',
        borderBottom: '1px solid var(--card-border)',
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
            style={{ background: 'linear-gradient(135deg, var(--violet), var(--rose))' }}>
            CK
          </div>
          <span className="text-sm font-bold hidden sm:block tracking-wide" style={{ color: 'var(--text)' }}>Chansi Keren</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-sm font-medium transition-colors duration-200 relative group"
                style={{ color: 'var(--text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {l}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background: 'linear-gradient(90deg, var(--violet), var(--rose))' }} />
              </a>
            </li>
          ))}
          <li>
            <a href="/cv.pdf" download className="btn-violet !py-2 !px-5 !text-xs">Download CV</a>
          </li>
          <li>
            <button
              data-hover
              onClick={toggle}
              aria-label="Toggle theme"
              style={{
                width:                32,
                height:               32,
                borderRadius:         '50%',
                display:              'flex',
                alignItems:           'center',
                justifyContent:       'center',
                background:           light ? 'rgba(28,26,46,0.1)' : 'rgba(255,255,255,0.07)',
                border:               `1px solid ${light ? 'rgba(28,26,46,0.25)' : 'rgba(212,175,55,0.45)'}`,
                color:                light ? '#1C1A2E' : '#D4AF37',
                flexShrink:           0,
                transition:           'background .3s, border-color .3s, color .3s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background   = light ? 'rgba(28,26,46,0.18)' : 'rgba(212,175,55,0.12)'
                e.currentTarget.style.borderColor  = light ? 'rgba(28,26,46,0.45)' : '#D4AF37'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background   = light ? 'rgba(28,26,46,0.1)' : 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderColor  = light ? 'rgba(28,26,46,0.25)' : 'rgba(212,175,55,0.45)'
              }}
            >
              {light ? <Moon size={14} strokeWidth={1.8} /> : <Sun size={14} strokeWidth={1.8} />}
            </button>
          </li>
        </ul>

        <button className="md:hidden transition-colors" style={{ color: 'var(--text-muted)' }}
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden mx-4 mt-3 rounded-2xl p-6"
            style={{ background: 'var(--card)', backdropFilter: 'blur(24px)', border: '1px solid var(--card-border)' }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ul className="flex flex-col gap-5">
              {links.map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`}
                    className="font-medium transition-colors text-sm"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    onClick={() => setOpen(false)}>{l}</a>
                </li>
              ))}
              <li><a href="/cv.pdf" download className="btn-violet w-full justify-center">Download CV</a></li>
              <li>
                <button
                  data-hover
                  onClick={toggle}
                  aria-label="Toggle theme"
                  className="flex items-center gap-3 text-sm font-medium"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {light ? <Moon size={15} strokeWidth={1.8} /> : <Sun size={15} strokeWidth={1.8} />}
                  {light ? 'Switch to Dark' : 'Switch to Light'}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
