import { motion } from 'framer-motion'
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
  },
  {
    icon: BookOpen,
    degree: 'Diploma in Business',
    school: 'Focus Business School, Negombo',
    badge: 'Completed',
    current: false,
  },
  {
    icon: Globe,
    degree: 'Diploma in British English',
    school: 'British Way Academy',
    badge: 'Completed',
    current: false,
  },
  {
    icon: Monitor,
    degree: 'Diploma in Information Technology',
    school: 'ESOFT Metro Campus',
    badge: 'Completed',
    current: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-16 lg:px-24 2xl:px-32"
      style={{ background: 'var(--bg)' }}>

      <CompetencyMarquee />

      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="label mb-4">Education</p>
          <div className="section-divider" />
          <h2 className="font-extrabold mb-10 sm:mb-16" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)', color: 'var(--text)' }}>
            Academic <span className="accent-text">Journey</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-5 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, var(--violet) 0%, transparent 100%)' }} />

          <div className="space-y-7">
            {timeline.map(({ icon: Icon, degree, school, badge, current }, i) => (
              <Reveal key={degree} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <motion.div
                    className="relative z-10 shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: current
                        ? 'linear-gradient(135deg, var(--violet), var(--violet-light))'
                        : 'var(--card)',
                      border: `2px solid ${current ? 'var(--violet)' : 'var(--card-border)'}`,
                      boxShadow: current ? '0 0 18px rgba(108,99,255,0.35)' : 'none',
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 26 }}
                  >
                    <Icon size={15} style={{ color: current ? '#fff' : 'var(--violet-light)' }} />
                  </motion.div>

                  <motion.div
                    data-frame
                    className="flex-1 rounded-2xl p-5 glass-card"
                    whileHover={{ x: 5, borderColor: 'rgba(108,99,255,0.35)' }}
                    transition={{ type: 'spring', stiffness: 280, damping: 26 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <h3 className="font-bold text-sm" style={{ color: 'var(--text)' }}>{degree}</h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={current
                          ? { background: 'rgba(108,99,255,0.12)', color: 'var(--violet-light)', border: '1px solid rgba(108,99,255,0.25)' }
                          : { background: 'rgba(232,165,152,0.1)', color: 'var(--rose)', border: '1px solid rgba(232,165,152,0.2)' }
                        }>
                        {badge}
                      </span>
                    </div>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{school}</p>
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
