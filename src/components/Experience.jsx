import { motion } from 'framer-motion'
import { Users, ClipboardList, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal'
import { TenureTracker, LocationPulse } from './Widgets'

const cards = [
  {
    icon: Users,
    title: 'Recruitment & Onboarding',
    items: ['Crafting targeted job postings across platforms', 'Screening & shortlisting candidates', 'Coordinating structured orientation programs', 'Building talent pipelines for future roles'],
    span: 'md:col-span-2',
    color: 'var(--violet)',
    colorRaw: '#6C63FF',
  },
  {
    icon: ClipboardList,
    title: 'Operations & Payroll',
    items: ['Maintaining accurate employee records', 'Tracking attendance & leave management', 'Resolving payroll queries efficiently', 'Generating HR reports & analytics'],
    span: 'md:col-span-1',
    color: 'var(--rose)',
    colorRaw: '#E8A598',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Admin',
    items: ['Ensuring policy adherence across departments', 'Maintaining confidential HR documentation', 'Supporting audits & compliance reviews', 'General administrative support'],
    span: 'md:col-span-3',
    color: 'var(--violet-light)',
    colorRaw: '#8B85FF',
  },
]

function RiseText({ children, delay = 0, className = '', style = {} }) {
  return (
    <div className="overflow-hidden">
      <motion.div
        className={className}
        style={style}
        initial={{ y: '105%' }}
        whileInView={{ y: '0%' }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ type: 'spring', stiffness: 55, damping: 20, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-16 lg:px-24 2xl:px-32"
      style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-6xl mx-auto">

        <div className="mb-16">
          <RiseText delay={0}>
            <p className="label mb-4">Experience</p>
          </RiseText>
          <div className="section-divider" />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <RiseText delay={0.08}>
                <h2 className="font-extrabold leading-tight t-text"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
                  Where I've Made an
                </h2>
              </RiseText>
              <RiseText delay={0.16}>
                <h2 className="font-extrabold leading-tight accent-text"
                  style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
                  Impact
                </h2>
              </RiseText>
            </div>

            <div className="overflow-hidden shrink-0">
              <motion.div
                className="rounded-xl px-5 py-3 glass-card"
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 55, damping: 20, delay: 0.22 }}
              >
                <p className="font-bold text-sm t-text">HR Assistant</p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--violet-light)' }}>May 2024 – Present · Negombo, LK</p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <TenureTracker />
            <LocationPulse />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {cards.map(({ icon: Icon, title, items, span, color, colorRaw }, i) => (
            <Reveal key={title} delay={i * 0.12} className={span}>
              <motion.div
                className="h-full p-7 rounded-2xl cursor-default glass-card"
                whileHover={{ y: -5, borderColor: `${colorRaw}40` }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${colorRaw}18`, border: `1px solid ${colorRaw}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="font-bold t-text">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm t-muted">
                      <span className="mt-2 w-1 h-1 rounded-full shrink-0" style={{ background: color }} />
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
