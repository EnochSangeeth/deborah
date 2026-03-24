import { motion } from 'framer-motion'
import { Brain, Users, Clock, Puzzle, MessageSquare, Target, TrendingUp, Star } from 'lucide-react'
import Reveal from './Reveal'

const skills = [
  { label: 'Critical Thinking', icon: Brain, size: 'text-lg px-6 py-3' },
  { label: 'Team Collaboration', icon: Users, size: 'text-base px-5 py-2.5' },
  { label: 'Deadline Management', icon: Clock, size: 'text-lg px-6 py-3' },
  { label: 'Problem-Solving', icon: Puzzle, size: 'text-base px-5 py-2.5' },
  { label: 'Communication', icon: MessageSquare, size: 'text-sm px-4 py-2' },
  { label: 'Goal-Oriented', icon: Target, size: 'text-base px-5 py-2.5' },
  { label: 'Adaptability', icon: TrendingUp, size: 'text-sm px-4 py-2' },
  { label: 'Attention to Detail', icon: Star, size: 'text-base px-5 py-2.5' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Professional <span className="gold-text">Skill Cloud</span>
          </h2>
          <p className="text-slate-400 mb-14 max-w-xl mx-auto">
            Core competencies that drive results and build exceptional workplace cultures.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map(({ label, icon: Icon, size }, i) => (
              <motion.div
                key={label}
                className={`glass flex items-center gap-2.5 rounded-full font-semibold text-white border border-gold/10 cursor-default ${size}`}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, type: 'spring', stiffness: 300 }}
                whileHover={{
                  scale: 1.1,
                  borderColor: 'rgba(201,168,76,0.5)',
                  backgroundColor: 'rgba(201,168,76,0.12)',
                  boxShadow: '0 0 20px rgba(201,168,76,0.25)',
                }}
              >
                <Icon size={16} className="text-gold shrink-0" />
                {label}
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
