import { motion } from 'framer-motion'
import { Users, ClipboardList, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'

const cards = [
  {
    icon: Users,
    title: 'Recruitment & Onboarding',
    color: 'from-gold/20 to-gold/5',
    border: 'border-gold/20',
    items: [
      'Crafting targeted job postings across platforms',
      'Screening & shortlisting candidates',
      'Coordinating structured orientation programs',
      'Building talent pipelines for future roles',
    ],
    span: 'md:col-span-2',
  },
  {
    icon: ClipboardList,
    title: 'Operations & Payroll',
    color: 'from-blue-500/20 to-blue-500/5',
    border: 'border-blue-400/20',
    items: [
      'Maintaining accurate employee records',
      'Tracking attendance & leave management',
      'Resolving payroll queries efficiently',
      'Generating HR reports & analytics',
    ],
    span: 'md:col-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Admin',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-400/20',
    items: [
      'Ensuring policy adherence across departments',
      'Maintaining confidential HR documentation',
      'Supporting audits & compliance reviews',
      'General administrative support',
    ],
    span: 'md:col-span-3',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">Experience</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Where I've Made an <span className="gold-text">Impact</span>
            </h2>
            <div className="glass px-5 py-3 rounded-xl text-right shrink-0">
              <p className="text-white font-bold">Tropic Frozen Foods</p>
              <p className="text-gold text-sm">May 2024 – Present</p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, color, border, items, span }, i) => (
            <Reveal key={title} delay={i * 0.12} className={span}>
              <motion.div
                className={`glass h-full p-7 bg-gradient-to-br ${color} border ${border} rounded-2xl group cursor-default`}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color} border ${border}`}>
                    <Icon size={20} className="text-gold-light" />
                  </div>
                  <h3 className="font-bold text-lg text-white">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
