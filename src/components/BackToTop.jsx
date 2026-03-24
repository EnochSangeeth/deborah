import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const RADIUS   = 50
const STRENGTH = 0.5
const isTouch  = () => window.matchMedia('(hover: none)').matches

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const wrapRef  = useRef(null)
  const btnRef   = useRef(null)
  const anchor   = useRef(null)
  const pulled   = useRef(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!visible || isTouch()) return
    const id = requestAnimationFrame(() => {
      const r = wrapRef.current?.getBoundingClientRect()
      if (r) anchor.current = { x: r.left + r.width / 2, y: r.top + r.height / 2 }
    })
    return () => cancelAnimationFrame(id)
  }, [visible])

  useEffect(() => {
    if (!visible || isTouch()) return
    const onMove = ({ clientX, clientY }) => {
      const el = btnRef.current, ac = anchor.current
      if (!el || !ac) return
      const dx = clientX - ac.x, dy = clientY - ac.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < RADIUS) {
        const t = 1 - dist / RADIUS
        el.style.transition = 'transform 0.08s linear'
        el.style.transform  = `translate(${dx * t * STRENGTH}px, ${dy * t * STRENGTH}px)`
        pulled.current = true
      } else if (pulled.current) {
        pulled.current = false
        el.style.transition = 'transform 0.55s cubic-bezier(.34,1.56,.64,1)'
        el.style.transform  = 'translate(0px,0px)'
      }
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (btnRef.current) { btnRef.current.style.transition = 'none'; btnRef.current.style.transform = 'translate(0,0)' }
    }
  }, [visible])

  const scrollToTop = () => {
    const lenis = window.__lenis
    if (lenis) lenis.scrollTo(0, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={wrapRef}
          initial={{ opacity: 0, scale: 0.4, y: 20 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{    opacity: 0, scale: 0.4, y: 20  }}
          transition={{ type: 'spring', stiffness: 300, damping: 26 }}
          style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 9998 }}
        >
          <div
            ref={btnRef}
            data-hover
            onClick={scrollToTop}
            style={{
              width:                48,
              height:               48,
              borderRadius:         '50%',
              background:           'var(--card)',
              backdropFilter:       'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border:               '1px solid var(--gold)',
              borderColor:          'rgba(160,120,32,0.5)',
              boxShadow:            '0 4px 24px rgba(0,0,0,0.2)',
              cursor:               'none',
              display:              'flex',
              alignItems:           'center',
              justifyContent:       'center',
              color:                'var(--gold)',
              willChange:           'transform',
              transition:           'border-color .2s, box-shadow .2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--gold)'
              e.currentTarget.style.boxShadow   = '0 0 24px rgba(160,120,32,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(160,120,32,0.5)'
              e.currentTarget.style.boxShadow   = '0 4px 24px rgba(0,0,0,0.2)'
            }}
          >
            <ArrowUp size={18} strokeWidth={2} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
