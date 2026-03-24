import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function WelcomeToast() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000)
    return () => clearTimeout(t)
  }, [])

  const connect = () => {
    setVisible(false)
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-6 right-6 z-[9990] w-80 rounded-2xl p-5 shadow-2xl"
          style={{
            background: 'rgba(15,14,28,0.97)',
            border: '1px solid rgba(212,175,55,0.35)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,175,55,0.08)',
          }}
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={{ opacity: 1, y: 0,  scale: 1 }}
          exit={{    opacity: 0, y: 40, scale: 0.94 }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
        >
          {/* Gold top accent line */}
          <div className="absolute top-0 left-6 right-6 h-px rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

          {/* Close */}
          <button
            onClick={() => setVisible(false)}
            className="absolute top-3.5 right-3.5 w-6 h-6 flex items-center justify-center rounded-full transition-colors duration-200"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            aria-label="Close"
          >
            <X size={13} />
          </button>

          {/* Avatar + heading */}
          <div className="flex items-center gap-3 mb-3 pr-6">
            <div className="w-9 h-9 rounded-xl shrink-0 flex items-center justify-center text-white text-xs font-black"
              style={{ background: 'linear-gradient(135deg, #6C63FF, #E8A598)' }}>
              CK
            </div>
            <p className="font-bold text-sm leading-tight" style={{ color: '#F5F0EB' }}>
              Welcome to my professional space.
            </p>
          </div>

          {/* Body */}
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
            I'm Chansi Keren Ramachandren, an HR professional dedicated to organisational growth.
            How can I help you today?
          </p>

          {/* CTA */}
          <button
            onClick={connect}
            className="w-full py-2.5 rounded-xl text-xs font-semibold tracking-widest uppercase transition-all duration-250"
            style={{
              background: 'rgba(212,175,55,0.12)',
              border: '1px solid rgba(212,175,55,0.35)',
              color: '#D4AF37',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.2)'; e.currentTarget.style.borderColor = '#D4AF37' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(212,175,55,0.12)'; e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)' }}
          >
            Let's Connect →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
