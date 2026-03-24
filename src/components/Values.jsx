import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VALUES = [
  { num: '01', word: 'Creativity',              sub: 'Thinking beyond the obvious' },
  { num: '02', word: 'Critical Thinking',        sub: 'Decisions rooted in clarity' },
  { num: '03', word: 'Interpersonal Connection', sub: 'People are the work' },
  { num: '04', word: 'Empathy',                  sub: 'Listening before leading' },
  { num: '05', word: 'Precision',                sub: 'Every detail matters' },
]

const SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }

const ARCS = [
  { id: '01', label: 'Creativity',  colorVar: 'var(--violet)',       color: '#6C63FF', pct: 0.82, r: 88 },
  { id: '02', label: 'Thinking',    colorVar: 'var(--violet-light)', color: '#8B85FF', pct: 0.74, r: 70 },
  { id: '03', label: 'Connection',  colorVar: 'var(--rose)',         color: '#E8A598', pct: 0.91, r: 52 },
  { id: '04', label: 'Empathy',     colorVar: 'var(--gold)',         color: '#D4AF37', pct: 0.68, r: 34 },
  { id: '05', label: 'Precision',   colorVar: 'var(--text)',         color: '#F5F0EB', pct: 0.88, r: 16 },
]

function ValueWeb({ inView }) {
  const SIZE = 220, CX = 110, CY = 110, STROKE = 2.5
  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} style={{ overflow: 'visible' }}>
      {[16, 34, 52, 70, 88].map(r => (
        <circle key={r} cx={CX} cy={CY} r={r} fill="none" stroke="currentColor" strokeOpacity={0.06} strokeWidth={1} />
      ))}
      {ARCS.map(({ id, color, pct, r }, i) => {
        const circ = 2 * Math.PI * r
        const dash = circ * pct
        const gap  = circ - dash
        return (
          <g key={id}>
            <circle cx={CX} cy={CY} r={r} fill="none" stroke={color} strokeOpacity={0.1} strokeWidth={STROKE} />
            <motion.circle
              cx={CX} cy={CY} r={r} fill="none" stroke={color}
              strokeWidth={STROKE} strokeLinecap="round"
              strokeDasharray={`${dash} ${gap}`}
              style={{ rotate: -90, originX: '50%', originY: '50%' }}
              initial={{ strokeDasharray: `0 ${circ}` }}
              animate={inView ? { strokeDasharray: `${dash} ${gap}` } : {}}
              transition={{ duration: 1.2, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.circle
              cx={CX + r * Math.cos((pct * 360 - 90) * Math.PI / 180)}
              cy={CY + r * Math.sin((pct * 360 - 90) * Math.PI / 180)}
              r={2.5} fill={color}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 * i + 1, duration: 0.3 }}
            />
          </g>
        )
      })}
      <text x={CX} y={CY - 6} textAnchor="middle"
        style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, fill: 'var(--text-sub)', fontStyle: 'italic' }}>
        values
      </text>
      <text x={CX} y={CY + 10} textAnchor="middle"
        style={{ fontFamily: 'monospace', fontSize: 8, fill: 'var(--violet)', opacity: 0.5, letterSpacing: 3 }}>
        05
      </text>
    </svg>
  )
}

export default function Values() {
  const ref    = useRef(null)
  const webRef = useRef(null)
  const [webInView, setWebInView] = React.useState(false)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const drifts = [
    useTransform(scrollYProgress, [0, 1], ['3%',  '-3%']),
    useTransform(scrollYProgress, [0, 1], ['-3%', '3%']),
    useTransform(scrollYProgress, [0, 1], ['2%',  '-2%']),
    useTransform(scrollYProgress, [0, 1], ['-2%', '2%']),
    useTransform(scrollYProgress, [0, 1], ['1%',  '-1%']),
  ]
  const cardY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  useEffect(() => {
    if (!webRef.current) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setWebInView(true) },
      { threshold: 0.3 }
    )
    obs.observe(webRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id="values" className="relative overflow-hidden py-16"
      style={{ background: 'var(--bg)' }}>

      <div className="px-8 md:px-16 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-5" style={{ background: 'var(--violet)' }} />
          <span className="label">Core Values</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-0 items-start px-0 lg:pr-16">

        {/* Left: kinetic list */}
        <div className="relative">
          {VALUES.map(({ num, word, sub }, i) => (
            <motion.div key={word}
              style={{ borderColor: 'var(--card-border)', x: drifts[i] }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 70, damping: 22, delay: i * 0.07 }}
              className="relative border-t"
            >
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ background: 'rgba(108,99,255,0.04)', originX: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              />
              <div className="relative flex items-center px-8 md:px-16 py-4 cursor-default">
                <span className="font-mono text-xs tracking-widest shrink-0 w-10 hidden md:block"
                  style={{ color: 'var(--violet)', opacity: 0.4 }}>
                  {num}
                </span>
                <motion.span className="flex-1" style={{
                  ...SERIF,
                  fontSize: 'clamp(1.4rem, 3.2vw, 3rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  lineHeight: 1,
                  display: 'block',
                }}
                  whileHover={{ WebkitTextStroke: '1px var(--violet)', color: 'transparent' }}
                  transition={{ duration: 0.2 }}
                >
                  {word}
                </motion.span>
                <motion.span
                  className="text-xs tracking-widest uppercase font-medium shrink-0 ml-6 hidden md:block"
                  style={{ color: 'transparent', minWidth: '160px', textAlign: 'right' }}
                  whileHover={{ color: 'var(--rose)' }}
                  transition={{ duration: 0.25 }}
                >
                  {sub}
                </motion.span>
                <motion.span className="ml-5 shrink-0"
                  style={{ color: 'transparent', opacity: 0, fontSize: '1rem' }}
                  whileHover={{ color: 'var(--violet)', opacity: 1, x: 3 }}
                  transition={{ duration: 0.2 }}
                >→</motion.span>
              </div>
              {i === VALUES.length - 1 && (
                <div className="border-t" style={{ borderColor: 'var(--card-border)' }} />
              )}
            </motion.div>
          ))}
        </div>

        {/* Right: value web */}
        <motion.div style={{ y: cardY }} className="hidden lg:flex flex-col self-start sticky top-28">
          <motion.div ref={webRef}
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--card-border)',
              borderRadius: '1.5rem',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              overflow: 'hidden',
              position: 'relative',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem',
            }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 40%, rgba(108,99,255,0.06) 0%, transparent 70%)' }} />
            <div className="absolute top-0 left-0 right-0 h-px"
              style={{ background: 'linear-gradient(90deg, transparent, var(--violet), var(--gold), transparent)', opacity: 0.4 }} />

            <div className="flex items-center gap-2 self-start">
              <div className="h-px w-4" style={{ background: 'var(--gold)' }} />
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--gold)' }}>
                Value Index
              </span>
            </div>

            <ValueWeb inView={webInView} />

            <div className="flex flex-col gap-2 w-full">
              {ARCS.map(({ id, label, colorVar, color, pct }, idx) => (
                <div key={id} className="flex items-center gap-3">
                  <span style={{ fontFamily: 'monospace', fontSize: '0.58rem', color: 'var(--violet)', opacity: 0.5, minWidth: 18 }}>{id}</span>
                  <div className="flex-1 h-px rounded-full overflow-hidden" style={{ background: 'var(--card-border)' }}>
                    <motion.div
                      style={{ height: '100%', background: color, borderRadius: 9999 }}
                      initial={{ width: '0%' }}
                      animate={webInView ? { width: `${pct * 100}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                  <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', minWidth: 28, textAlign: 'right' }}>
                    {Math.round(pct * 100)}%
                  </span>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={webInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: 1, width: '100%', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', opacity: 0.35, transformOrigin: 'center' }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-10 mx-8 md:mx-16 h-px"
        style={{ background: 'linear-gradient(90deg, var(--violet), var(--rose), transparent)' }} />
    </section>
  )
}
