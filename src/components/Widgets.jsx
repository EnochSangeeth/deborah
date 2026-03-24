import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/* ─────────────────────────────────────────
   WIDGET 1 — Tenure Tracker
   Dynamically calculates months since May 2024
───────────────────────────────────────── */
export function TenureTracker() {
  const [months, setMonths] = useState(0)

  useEffect(() => {
    const calc = () => {
      const start = new Date(2024, 4, 1) // May 1 2024
      const now   = new Date()
      const m = (now.getFullYear() - start.getFullYear()) * 12
                + (now.getMonth() - start.getMonth())
      setMonths(Math.max(m, 1))
    }
    calc()
  }, [])

  return (
    <motion.div
      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl"
      style={{
        background: 'rgba(26,26,53,0.7)',
        border: '1px solid rgba(108,99,255,0.18)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      whileHover={{ borderColor: 'rgba(108,99,255,0.4)' }}
    >
      {/* Icon */}
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: 'rgba(108,99,255,0.15)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B85FF" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
      <div>
        <p className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.58rem', letterSpacing: '0.08em' }}>
          PROFESSIONAL GROWTH
        </p>
        <p className="font-bold text-sm leading-tight" style={{ color: '#F5F0EB' }}>
          <span className="accent-text">{months}</span>
          <span style={{ color: 'rgba(255,255,255,0.55)', fontWeight: 400 }}> months in HR</span>
        </p>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   WIDGET 2 — Location Pulse
   Live local time for Negombo (Asia/Colombo)
───────────────────────────────────────── */
export function LocationPulse() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () => {
      const t = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit', minute: '2-digit', hour12: true,
      })
      setTime(t)
    }
    fmt()
    const id = setInterval(fmt, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full"
      style={{
        background: 'rgba(26,26,53,0.65)',
        border: '1px solid rgba(108,99,255,0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
      whileHover={{ borderColor: 'rgba(232,165,152,0.4)' }}
    >
      {/* Pulsing green dot */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <div className="flex items-center gap-1.5">
        <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.6rem', letterSpacing: '0.08em' }}>
          🇱🇰
        </span>
        <span className="font-mono text-xs font-medium" style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.68rem' }}>
          {time}
        </span>
        <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.58rem' }}>Negombo</span>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   WIDGET 3 — Competency Marquee
   Infinite horizontal scroll, used as bg layer
───────────────────────────────────────── */
const MARQUEE_TEXT = 'RECRUITMENT  •  ONBOARDING  •  PAYROLL  •  COMPLIANCE  •  EMPLOYEE RELATIONS  •  TALENT ACQUISITION  •  HR OPERATIONS  •  '

export function CompetencyMarquee() {
  return (
    <div className="relative overflow-hidden py-3 select-none pointer-events-none"
      aria-hidden="true"
      style={{ borderTop: '1px solid rgba(108,99,255,0.06)', borderBottom: '1px solid rgba(108,99,255,0.06)' }}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {/* Duplicate for seamless loop */}
        {[0, 1].map((n) => (
          <span key={n} className="font-mono tracking-[0.3em] uppercase shrink-0"
            style={{ color: 'rgba(255,255,255,0.07)', fontSize: '0.65rem', paddingRight: '2rem' }}>
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
