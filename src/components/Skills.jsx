import { motion } from 'framer-motion'
import { Brain, Users, Clock, Puzzle, MessageSquare, Target, TrendingUp, Star } from 'lucide-react'
import Reveal from './Reveal'

const skills = [
  { label: 'Critical Thinking',    icon: Brain,          colorVar: 'var(--violet)',       colorRaw: '#6C63FF' },
  { label: 'Team Collaboration',   icon: Users,          colorVar: 'var(--rose)',         colorRaw: '#E8A598' },
  { label: 'Deadline Management',  icon: Clock,          colorVar: 'var(--violet-light)', colorRaw: '#8B85FF' },
  { label: 'Problem-Solving',      icon: Puzzle,         colorVar: 'var(--violet)',       colorRaw: '#6C63FF' },
  { label: 'Communication',        icon: MessageSquare,  colorVar: 'var(--rose)',         colorRaw: '#E8A598' },
  { label: 'Goal-Oriented',        icon: Target,         colorVar: 'var(--violet-light)', colorRaw: '#8B85FF' },
  { label: 'Adaptability',         icon: TrendingUp,     colorVar: 'var(--violet)',       colorRaw: '#6C63FF' },
  { label: 'Attention to Detail',  icon: Star,           colorVar: 'var(--rose)',         colorRaw: '#E8A598' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-16 lg:px-24 2xl:px-32"
      style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="label mb-4">Skills</p>
          <div className="section-divider" />
          <h2 className="font-extrabold mb-3 t-text" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
            Core <span className="accent-text">Competencies</span>
          </h2>
          <p className="mb-14 max-w-xl text-sm t-muted">
            Professional skills that drive results and build exceptional workplace cultures.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {skills.map(({ label, icon: Icon, colorVar, colorRaw }, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl cursor-default text-center glass-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -5, borderColor: `${colorRaw}40` }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${colorRaw}15`, border: `1px solid ${colorRaw}25` }}>
                  <Icon size={19} style={{ color: colorVar }} />
                </div>
                <p className="text-sm font-semibold leading-tight t-text">{label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
