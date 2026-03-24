import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function GoalStatement() {
  const ref     = useRef(null)
  const inView  = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      style={{ background: '#0D0D1A', padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 8vw, 10rem)', paddingBottom: 'clamp(5rem, 10vw, 8rem)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}
      >
        {/* eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
          <div style={{ height: 1, width: 32, background: 'rgba(108,99,255,0.45)' }} />
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', fontWeight: 600, color: '#6C63FF' }}>
            Professional Goal
          </span>
          <div style={{ height: 1, width: 32, background: 'rgba(108,99,255,0.45)' }} />
        </div>

        {/* opening quote mark */}
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(3.5rem, 8vw, 6rem)',
          lineHeight: 0.6,
          color: 'rgba(108,99,255,0.18)',
          marginBottom: '0.5rem',
          userSelect: 'none',
        }}>
          "
        </div>

        {/* statement */}
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: 1.85,
          color: 'rgba(245,240,235,0.72)',
          letterSpacing: '0.01em',
        }}>
          To leverage my foundational experience in Human Resources and strategic business planning
          to cultivate high-performing organisational cultures. Currently advancing my expertise
          through the{' '}
          <span style={{ color: '#8B85FF', fontStyle: 'italic', fontWeight: 600 }}>
            Open University of Sri Lanka
          </span>
          , I am dedicated to optimising internal operations and fostering positive employee
          relations that drive both individual growth and sustainable corporate success in the{' '}
          <span style={{ color: '#E8A598', fontStyle: 'italic', fontWeight: 600 }}>
            Negombo region and beyond
          </span>
          .
        </p>

        {/* closing rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: 1,
            marginTop: '2.5rem',
            background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.35) 40%, rgba(232,165,152,0.25) 60%, transparent)',
            transformOrigin: 'center',
          }}
        />

        {/* attribution */}
        <p style={{ marginTop: '1.25rem', fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(136,146,164,0.55)', fontWeight: 500 }}>
          Chansi Keren Ramachandren
        </p>
      </motion.div>
    </section>
  )
}
