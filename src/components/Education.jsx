import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
import { GraduationCap, BookOpen, Globe, Monitor } from 'lucide-react'
import Reveal from './Reveal'
import { CompetencyMarquee } from './Widgets'

const timeline = [
  {
    icon: GraduationCap,
    degree: 'AC in Human Resource Management',
    school: 'Open University Sri Lanka',
    badge: 'In Progress',
    current: true,
    meta: ['Human Capital Management', 'Labour Law & Ethics', 'Organisational Behaviour', 'Strategic HRM', 'Industrial Relations'],
  },
  {
    icon: BookOpen,
    degree: 'Diploma in Business',
    school: 'Focus Business School, Negombo',
    badge: 'Completed',
    current: false,
    meta: ['Business Communication', 'Accounting Fundamentals', 'Marketing Principles', 'Entrepreneurship'],
  },
  {
    icon: Globe,
    degree: 'Diploma in British English',
    school: 'British Way Academy',
    badge: 'Completed',
    current: false,
    meta: ['Professional Writing', 'Business Correspondence', 'Spoken English', 'Presentation Skills'],
  },
  {
    icon: Monitor,
    degree: 'Diploma in Information Technology',
    school: 'ESOFT Metro Campus',
    badge: 'Completed',
    current: false,
    meta: ['MS Office Suite', 'Database Basics', 'Web Fundamentals', 'Digital Literacy'],
  },
]

/* ── Magnetic magnifying cursor ── */
function MagCursor({ hoveredMeta }) {
  const cx = useMotionValue(-300)
  const cy = useMotionValue(-300)
  const sx = useSpring(cx, { stiffness: 380, damping: 32 })
  const sy = useSpring(cy, { stiffness: 380, damping: 32 })
  const size = useSpring(hoveredMeta ? 160 : 40, { stiffness: 260, damping: 28 })

  useEffect(() => {
    const move = (e) => { cx.set(e.clientX); cy.set(e.clientY) }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [cx, cy])

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9997] flex items-center justify-center overflow-hidden"
      style={{
        x: useMotionValue(0),
        y: useMotionValue(0),
        width: size,
        height: size,
        borderRadius: '50%',
        translateX: useSpring(useMotionValue(-50), { stiffness: 380, damping: 32 }),
        translateY: useSpring(useMotionValue(-50), { stiffness: 380, damping: 32 }),
        left: sx,
        top: sy,
        marginLeft: hoveredMeta ? -80 : -20,
        marginTop: hoveredMeta ? -80 : -20,
        background: hoveredMeta
          ? 'rgba(13,13,26,0.92)'
          : 'rgba(108,99,255,0.15)',
        border: hoveredMeta
          ? '1px solid rgba(108,99,255,0.4)'
          : '1px solid rgba(232,165,152,0.5)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: hoveredMeta ? '0 8px 40px rgba(0,0,0,0.5)' : 'none',
      }}
    >
      <AnimatePresence>
        {hoveredMeta && (
          <motion.div
            className="flex flex-col gap-1.5 p-4 w-full"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            {hoveredMeta.map((tag) => (
              <span key={tag}
                className="text-center font-medium"
                style={{ color: '#8B85FF', fontSize: '0.6rem', letterSpacing: '0.05em' }}>
                {tag}
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Education() {
  const [hoveredMeta, setHoveredMeta] = useState(null)

  return (
    <section id="education" className="py-28 px-6 md:px-16 lg:px-24"
      style={{ background: '#0D0D1A', cursor: 'none' }}>

      <MagCursor hoveredMeta={hoveredMeta} />

      <CompetencyMarquee />

      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="label mb-4">Education</p>
          <div className="section-divider" />
          <h2 className="font-extrabold mb-16" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F5F0EB' }}>
            Academic <span className="accent-text">Journey</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #6C63FF 0%, rgba(108,99,255,0.08) 100%)' }} />

          <div className="space-y-7">
            {timeline.map(({ icon: Icon, degree, school, badge, current, meta }, i) => (
              <Reveal key={degree} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  {/* Node */}
                  <motion.div
                    className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: current ? 'linear-gradient(135deg, #6C63FF, #8B85FF)' : 'rgba(26,26,53,0.8)',
                      border: `2px solid ${current ? '#6C63FF' : 'rgba(108,99,255,0.25)'}`,
                      boxShadow: current ? '0 0 18px rgba(108,99,255,0.45)' : 'none',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                  >
                    <Icon size={15} style={{ color: current ? '#fff' : '#8B85FF' }} />
                  </motion.div>

                  {/* Card — hover triggers magnifying cursor */}
                  <motion.div
                    className="flex-1 rounded-2xl p-5"
                    style={{
                      background: 'rgba(26,26,53,0.6)',
                      border: '1px solid rgba(108,99,255,0.1)',
                      cursor: 'none',
                    }}
                    onMouseEnter={() => setHoveredMeta(meta)}
                    onMouseLeave={() => setHoveredMeta(null)}
                    whileHover={{ x: 5, borderColor: 'rgba(108,99,255,0.35)' }}
                    transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <h3 className="font-bold text-cream text-sm">{degree}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={current
                          ? { background: 'rgba(108,99,255,0.15)', color: '#8B85FF', border: '1px solid rgba(108,99,255,0.3)' }
                          : { background: 'rgba(232,165,152,0.1)', color: '#E8A598', border: '1px solid rgba(232,165,152,0.2)' }
                        }>
                        {badge}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: '#8892A4' }}>{school}</p>

                    {/* Subtle meta hint */}
                    <p className="text-xs mt-2 italic" style={{ color: 'rgba(139,133,255,0.4)', fontSize: '0.6rem' }}>
                      Hover to explore modules →
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
