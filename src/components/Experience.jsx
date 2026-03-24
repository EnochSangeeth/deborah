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
    color: '#6C63FF',
  },
  {
    icon: ClipboardList,
    title: 'Operations & Payroll',
    items: ['Maintaining accurate employee records', 'Tracking attendance & leave management', 'Resolving payroll queries efficiently', 'Generating HR reports & analytics'],
    span: 'md:col-span-1',
    color: '#E8A598',
  },
  {
    icon: ShieldCheck,
    title: 'Compliance & Admin',
    items: ['Ensuring policy adherence across departments', 'Maintaining confidential HR documentation', 'Supporting audits & compliance reviews', 'General administrative support'],
    span: 'md:col-span-3',
    color: '#8B85FF',
  },
]

/* Text rises from hidden floor */
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
    <section id="experience" className="py-28 px-6 md:px-16 lg:px-24"
      style={{ background: 'rgba(18,18,42,0.5)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header with vertical reveal */}
        <div className="mb-16">
          <RiseText delay={0}>
            <p className="label mb-4">Experience</p>
          </RiseText>
          <div className="section-divider" />

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <RiseText delay={0.08}>
                <h2 className="font-extrabold leading-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F5F0EB' }}>
                  Where I've Made an
                </h2>
              </RiseText>
              <RiseText delay={0.16}>
                <h2 className="font-extrabold leading-tight accent-text"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                  Impact
                </h2>
              </RiseText>
            </div>

            {/* Role badge — rises in */}
            <div className="overflow-hidden shrink-0">
              <motion.div
                className="rounded-xl px-5 py-3"
                style={{ background: 'rgba(108,99,255,0.1)', border: '1px solid rgba(108,99,255,0.2)' }}
                initial={{ y: '110%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 55, damping: 20, delay: 0.22 }}
              >
                <p className="text-cream font-bold text-sm">HR Assistant</p>
                <p className="text-xs mt-0.5" style={{ color: '#8B85FF' }}>May 2024 – Present · Negombo, LK</p>
              </motion.div>
            </div>
          </div>

          {/* Micro-widgets row */}
          <div className="flex flex-wrap gap-3 mt-8">
            <TenureTracker />
            <LocationPulse />
          </div>
        </div>

        {/* Bento cards — dark palette */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map(({ icon: Icon, title, items, span, color }, i) => (
            <Reveal key={title} delay={i * 0.12} className={span}>
              <motion.div
                className="h-full p-7 rounded-2xl cursor-default"
                style={{ background: 'rgba(26,26,53,0.6)', border: '1px solid rgba(108,99,255,0.1)' }}
                whileHover={{ y: -5, borderColor: `${color}40` }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-cream">{title}</h3>
                </div>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#8892A4' }}>
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
