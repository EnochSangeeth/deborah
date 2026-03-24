import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const RADIUS   = 60
const STRENGTH = 0.42

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const btnRef = useRef(null)
  const pulled = useRef(false)

  /* ── show after Hero (~100vh) ── */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ── magnetic gravity pull ── */
  useEffect(() => {
    if (!visible) return

    const onMove = ({ clientX, clientY }) => {
      const el = btnRef.current
      if (!el) return

      const rect = el.getBoundingClientRect()
      const cx   = rect.left + rect.width  / 2
      const cy   = rect.top  + rect.height / 2
      const dx   = clientX - cx
      const dy   = clientY - cy
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < RADIUS) {
        const t = 1 - dist / RADIUS
        const ox = dx * t * STRENGTH * 2.4
        const oy = dy * t * STRENGTH * 2.4
        el.style.transition = 'transform 0.1s ease-out'
        el.style.transform  = `translate(${ox}px, ${oy}px)`
        pulled.current = true
      } else if (pulled.current) {
        pulled.current = false
        el.style.transition = 'transform 0.5s cubic-bezier(.34,1.56,.64,1)'
        el.style.transform  = 'translate(0px, 0px)'
      }
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      /* reset on unmount */
      if (btnRef.current) btnRef.current.style.transform = 'translate(0px,0px)'
    }
  }, [visible])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 24 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          exit={{    opacity: 0, scale: 0.5, y: 24  }}
          transition={{ type: 'spring', stiffness: 280, damping: 24 }}
          style={{ position: 'fixed', bottom: '2.5rem', right: '2.5rem', zIndex: 9998 }}
        >
          <div
            ref={btnRef}
            data-hover
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              width:           48,
              height:          48,
              borderRadius:    '50%',
              background:      'rgba(13,13,26,0.6)',
              backdropFilter:  'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border:          '1px solid rgba(212,175,55,0.5)',
              boxShadow:       '0 4px 28px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.15)',
              cursor:          'none',
              display:         'flex',
              alignItems:      'center',
              justifyContent:  'center',
              color:           '#D4AF37',
              willChange:      'transform',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(212,175,55,0.9)'
              e.currentTarget.style.boxShadow   = '0 6px 36px rgba(212,175,55,0.25), inset 0 1px 0 rgba(212,175,55,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'
              e.currentTarget.style.boxShadow   = '0 4px 28px rgba(0,0,0,0.5), inset 0 1px 0 rgba(212,175,55,0.15)'
            }}
          >
            <ArrowUp size={18} strokeWidth={2} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
