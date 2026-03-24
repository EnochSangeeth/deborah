import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const VALUES = [
  { num: '01', word: 'Creativity',              sub: 'Thinking beyond the obvious' },
  { num: '02', word: 'Critical Thinking',        sub: 'Decisions rooted in clarity' },
  { num: '03', word: 'Interpersonal Connection', sub: 'People are the work' },
  { num: '04', word: 'Empathy',                  sub: 'Listening before leading' },
  { num: '05', word: 'Precision',                sub: 'Every detail matters' },
]

const SERIF = { fontFamily: "'Playfair Display', Georgia, serif" }

export default function Values() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const x0 = useTransform(scrollYProgress, [0, 1], ['3%',  '-3%'])
  const x1 = useTransform(scrollYProgress, [0, 1], ['-3%', '3%'])
  const x2 = useTransform(scrollYProgress, [0, 1], ['2%',  '-2%'])
  const x3 = useTransform(scrollYProgress, [0, 1], ['-2%', '2%'])
  const x4 = useTransform(scrollYProgress, [0, 1], ['1%',  '-1%'])
  const drifts = [x0, x1, x2, x3, x4]

  return (
    <section ref={ref} id="values" className="relative overflow-hidden py-16"
      style={{ background: '#0D0D1A' }}>

      {/* Label */}
      <div className="px-8 md:px-16 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-px w-5" style={{ background: '#6C63FF' }} />
          <span className="label">Core Values</span>
        </div>
      </div>

      {/* Rows */}
      <div className="relative">
        {VALUES.map(({ num, word, sub }, i) => (
          <motion.div
            key={word}
            style={{ borderColor: 'rgba(108,99,255,0.1)', x: drifts[i] }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ type: 'spring', stiffness: 70, damping: 22, delay: i * 0.07 }}
          >
            {/* Hover fill */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              style={{ background: 'rgba(108,99,255,0.04)', originX: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="relative flex items-center px-8 md:px-16 py-4 cursor-default">
              {/* Number */}
              <span className="font-mono text-xs tracking-widest shrink-0 w-10 hidden md:block"
                style={{ color: 'rgba(108,99,255,0.35)' }}>
                {num}
              </span>

              {/* Value word */}
              <motion.span
                className="flex-1"
                style={{
                  ...SERIF,
                  fontSize: 'clamp(1.4rem, 3.2vw, 3rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.02em',
                  color: 'rgba(245,240,235,0.82)',
                  lineHeight: 1,
                  display: 'block',
                }}
                whileHover={{ WebkitTextStroke: '1px rgba(108,99,255,0.55)', color: 'transparent' }}
                transition={{ duration: 0.2 }}
              >
                {word}
              </motion.span>

              {/* Sub label */}
              <motion.span
                className="text-xs tracking-widest uppercase font-medium shrink-0 ml-6 hidden md:block"
                style={{ color: 'rgba(232,165,152,0)', minWidth: '160px', textAlign: 'right' }}
                whileHover={{ color: 'rgba(232,165,152,0.65)' }}
                transition={{ duration: 0.25 }}
              >
                {sub}
              </motion.span>

              {/* Arrow */}
              <motion.span
                className="ml-5 shrink-0"
                style={{ color: 'rgba(108,99,255,0)', opacity: 0, fontSize: '1rem' }}
                whileHover={{ color: '#6C63FF', opacity: 1, x: 3 }}
                transition={{ duration: 0.2 }}
              >
                →
              </motion.span>
            </div>

            {i === VALUES.length - 1 && (
              <div className="border-t" style={{ borderColor: 'rgba(108,99,255,0.1)' }} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Accent line */}
      <div className="mt-10 mx-8 md:mx-16 h-px"
        style={{ background: 'linear-gradient(90deg, #6C63FF, #E8A598, transparent)' }} />
    </section>
  )
}
