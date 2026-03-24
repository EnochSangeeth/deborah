import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function TenureTracker() {
  const [months, setMonths] = useState(0)

  useEffect(() => {
    const start = new Date(2024, 4, 1)
    const now   = new Date()
    const m = (now.getFullYear() - start.getFullYear()) * 12
            + (now.getMonth() - start.getMonth())
    setMonths(Math.max(m, 1))
  }, [])

  return (
    <motion.div
      className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl glass-card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      whileHover={{ borderColor: 'rgba(108,99,255,0.4)' }}
    >
      <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: 'rgba(108,99,255,0.12)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="var(--violet-light)" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      </div>
      <div>
        <p className="font-mono text-xs" style={{ color: 'var(--text-muted)', fontSize: '0.58rem', letterSpacing: '0.08em' }}>
          PROFESSIONAL GROWTH
        </p>
        <p className="font-bold text-sm leading-tight" style={{ color: 'var(--text)' }}>
          <span className="accent-text">{months}</span>
          <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}> months in HR</span>
        </p>
      </div>
    </motion.div>
  )
}

export function LocationPulse() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Colombo',
        hour: '2-digit', minute: '2-digit', hour12: true,
      }))
    }
    fmt()
    const id = setInterval(fmt, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full glass-card"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.1 }}
      whileHover={{ borderColor: 'rgba(232,165,152,0.4)' }}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <div className="flex items-center gap-1.5">
        <span style={{ fontSize: '0.6rem' }}>🇱🇰</span>
        <span className="font-mono text-xs font-medium" style={{ color: 'var(--text)', fontSize: '0.68rem' }}>
          {time}
        </span>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.58rem' }}>Negombo</span>
      </div>
    </motion.div>
  )
}

const MARQUEE_TEXT = 'RECRUITMENT  •  ONBOARDING  •  PAYROLL  •  COMPLIANCE  •  EMPLOYEE RELATIONS  •  TALENT ACQUISITION  •  HR OPERATIONS  •  '

export function CompetencyMarquee() {
  return (
    <div className="relative overflow-hidden py-3 select-none pointer-events-none mb-12"
      aria-hidden="true"
      style={{ borderTop: '1px solid var(--card-border)', borderBottom: '1px solid var(--card-border)' }}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1].map((n) => (
          <span key={n} className="font-mono tracking-[0.3em] uppercase shrink-0"
            style={{ color: 'var(--text-muted)', opacity: 0.25, fontSize: '0.65rem', paddingRight: '2rem' }}>
            {MARQUEE_TEXT}{MARQUEE_TEXT}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
