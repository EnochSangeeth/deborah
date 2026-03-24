import { motion } from 'framer-motion'
import { Brain, Users, Clock, Puzzle, MessageSquare, Target, TrendingUp, Star } from 'lucide-react'
import Reveal from './Reveal'

const skills = [
  { label: 'Critical Thinking', icon: Brain, color: '#6C63FF' },
  { label: 'Team Collaboration', icon: Users, color: '#E8A598' },
  { label: 'Deadline Management', icon: Clock, color: '#8B85FF' },
  { label: 'Problem-Solving', icon: Puzzle, color: '#6C63FF' },
  { label: 'Communication', icon: MessageSquare, color: '#E8A598' },
  { label: 'Goal-Oriented', icon: Target, color: '#8B85FF' },
  { label: 'Adaptability', icon: TrendingUp, color: '#6C63FF' },
  { label: 'Attention to Detail', icon: Star, color: '#E8A598' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 md:px-16 lg:px-24"
      style={{ background: 'rgba(18,18,42,0.5)' }}>
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <p className="label mb-4">Skills</p>
          <div className="section-divider" />
          <h2 className="font-extrabold mb-3" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F5F0EB' }}>
            Core <span className="accent-text">Competencies</span>
          </h2>
          <p className="mb-14 max-w-xl text-sm" style={{ color: '#8892A4' }}>
            Professional skills that drive results and build exceptional workplace cultures.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map(({ label, icon: Icon, color }, i) => (
              <motion.div
                key={label}
                className="flex flex-col items-center gap-3 p-6 rounded-2xl cursor-default text-center"
                style={{ background: 'rgba(26,26,53,0.6)', border: '1px solid rgba(108,99,255,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                whileHover={{ y: -5, borderColor: `${color}40`, background: `${color}0A` }}
              >
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}>
                  <Icon size={19} style={{ color }} />
                </div>
                <p className="text-sm font-semibold leading-tight" style={{ color: '#F5F0EB' }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
