import { motion } from 'framer-motion'
import { Mail, MapPin, Download, Phone } from 'lucide-react'
import Reveal from './Reveal'

const details = [
  { icon: Mail,   label: 'Email',    value: 'deborackeren@gmail.com', colorVar: 'var(--violet)',       colorRaw: '#6C63FF' },
  { icon: Phone,  label: 'Phone',    value: '+94 76 835 2345',        colorVar: 'var(--rose)',         colorRaw: '#E8A598' },
  { icon: MapPin, label: 'Location', value: 'Negombo, Sri Lanka 🇱🇰', colorVar: 'var(--violet-light)', colorRaw: '#8B85FF' },
]

function NegomboPin() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="120" height="160" viewBox="0 0 120 160" fill="none">
        <motion.path
          d="M10 130 Q20 118 30 125 Q40 132 50 120 Q60 108 70 116 Q80 124 90 112 Q100 100 110 108"
          stroke="var(--rose)" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 2.2, ease: 'easeInOut', delay: 0.3 }}
        />
        <motion.path
          d="M10 145 Q25 133 38 140 Q52 147 65 135 Q78 123 92 131 Q105 139 115 128"
          stroke="var(--rose)" strokeOpacity="0.25" strokeWidth="1" strokeLinecap="round" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.6 }}
        />
        <motion.path
          d="M60 10 C42 10 28 24 28 42 C28 62 60 100 60 100 C60 100 92 62 92 42 C92 24 78 10 60 10 Z"
          stroke="var(--violet)" strokeWidth="1.5" fill="none" strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        />
        <motion.circle cx="60" cy="42" r="10" stroke="var(--violet-light)" strokeWidth="1.5" fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.6 }}
        />
        <motion.circle cx="60" cy="42" r="4" fill="var(--violet)"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 2.2 }}
        />
        <motion.circle cx="60" cy="42" r="18" stroke="var(--violet)" strokeOpacity="0.2" strokeWidth="1" fill="none"
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: [0.6, 1.4, 0.6], opacity: [0, 0.6, 0] }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 2.4 }}
        />
      </svg>
      <motion.p className="text-xs tracking-[0.3em] uppercase font-medium t-muted"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 2.0, duration: 0.6 }}
      >
        Negombo, Sri Lanka
      </motion.p>
    </div>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-16 lg:px-24 2xl:px-32"
      style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">

        <Reveal>
          <p className="label mb-4 text-center">Contact</p>
          <div className="section-divider mx-auto" />
          <h2 className="font-extrabold mb-3 text-center t-text" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
            Let's <span className="accent-text">Connect</span>
          </h2>
          <p className="text-center mb-14 max-w-lg mx-auto text-sm t-muted">
            Open to new opportunities, collaborations, and conversations about HR excellence.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex justify-center mb-12"><NegomboPin /></div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-2xl p-8 md:p-12 relative overflow-hidden glass-card">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-10"
              style={{ background: 'radial-gradient(circle, var(--violet), transparent)' }} />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full pointer-events-none opacity-[0.06]"
              style={{ background: 'radial-gradient(circle, var(--rose), transparent)' }} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 relative z-10">
              {details.map(({ icon: Icon, label, value, colorVar, colorRaw }) => (
                <motion.div key={label}
                  className="flex items-center gap-4 p-5 rounded-xl glass-card"
                  whileHover={{ y: -4, borderColor: `${colorRaw}40` }}
                  transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${colorRaw}18`, border: `1px solid ${colorRaw}28` }}>
                    <Icon size={18} style={{ color: colorVar }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: colorVar }}>{label}</p>
                    <p className="font-semibold text-sm truncate t-text">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center relative z-10">
              <motion.a href="/cv.pdf" download className="btn-violet"
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                <Download size={15} /> Download CV
              </motion.a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
            style={{ borderTop: '1px solid var(--card-border)', color: 'var(--text-muted)' }}>
            <p style={{ color: 'var(--text-muted)' }}>Open to new opportunities · Negombo, Sri Lanka</p>
            <p className="font-semibold accent-text">HR Professional · 2026</p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
