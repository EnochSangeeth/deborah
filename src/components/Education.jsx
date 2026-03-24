import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, Globe, Monitor } from 'lucide-react'
import Reveal from './Reveal'

const timeline = [
  {
    icon: GraduationCap,
    degree: 'AC in Human Resource Management',
    school: 'Open University Sri Lanka',
    period: 'Current',
    badge: 'In Progress',
    badgeColor: 'bg-gold/20 text-gold border-gold/30',
  },
  {
    icon: BookOpen,
    degree: 'Diploma in Business',
    school: 'Focus Business School, Negombo',
    period: 'Completed',
    badge: 'Completed',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
  },
  {
    icon: Globe,
    degree: 'Diploma in British English',
    school: 'British Way Academy',
    period: 'Completed',
    badge: 'Completed',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
  },
  {
    icon: Monitor,
    degree: 'Diploma in Information Technology',
    school: 'ESOFT Metro Campus',
    period: 'Completed',
    badge: 'Completed',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-400/30',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">Education</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">
            Academic <span className="gold-text">Journey</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />

          <div className="space-y-10">
            {timeline.map(({ icon: Icon, degree, school, badge, badgeColor }, i) => (
              <Reveal key={degree} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  {/* Icon node */}
                  <motion.div
                    className="relative z-10 shrink-0 w-12 h-12 rounded-full glass border border-gold/30 flex items-center justify-center"
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <Icon size={18} className="text-gold" />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    className="flex-1 glass p-6 rounded-2xl group"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                      <h3 className="font-bold text-white text-base">{degree}</h3>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badgeColor}`}>
                        {badge}
                      </span>
                    </div>
                    <p className="text-gold text-sm">{school}</p>
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
