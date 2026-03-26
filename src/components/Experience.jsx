import { motion } from 'framer-motion'
import { Users, ShieldCheck, Stethoscope, NotebookText } from 'lucide-react'
import Reveal from './Reveal'

const cards = [
  {
    icon: Users,
    title: 'Recruitment & Onboarding',
    items: [
      'Crafting targeted job postings across platforms',
      'Screening & shortlisting candidates',
      'Coordinating structured orientation programs',
      'Building talent pipelines for future roles',
    ],
    span: 'md:col-span-2',
    color: 'var(--violet)',
    colorRaw: '#6C63FF',
  },
  {
    icon: NotebookText,
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
  {
    icon: Stethoscope,
    title: 'Dental Assistant',
    items: [
      'Assisted dentist during patient examinations and treatments.',
      'Prepared and sterilized dental instruments and equipment.',
      'Managed patient records and appointment scheduling.',
      'Provided patient care and ensured comfort during procedures.',
      'Maintained cleanliness and hygiene standards in the clinic.',
      'Handled administrative tasks and front desk coordination.',
    ],
    span: 'md:col-span-3',
    color: 'var(--gold)',
    colorRaw: '#D4AF37',
  },
]

export default function Experience() {
  const hrCards = cards.slice(0, 3)
  const dentalCard = cards[3]

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-16 lg:px-24 2xl:px-32"
      style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="label mb-4">Experience</p>
          <div className="section-divider" />
          <h2
            className="font-extrabold mb-10 sm:mb-16 t-text"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}
          >
            Where I've Made an <span className="accent-text">Impact</span>
          </h2>
        </Reveal>

        {/* Minimal timeline pills to show dual progression */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.div
            className="rounded-xl px-5 py-3 glass-card"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 55, damping: 20, delay: 0.18 }}
            whileHover={{ borderColor: 'rgba(212,175,55,0.75)' }}
            data-hover
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderColor: 'rgba(212,175,55,0.35)',
            }}
          >
            <p className="font-bold text-sm t-text">Human Resource Assistant</p>
            <p className="text-xs mt-0.5" style={{ color: '#D4AF37' }}>
              May 2024 – May 2025 · Tropic Frozen Foods · Negombo, LK
            </p>
          </motion.div>
        </div>

        {/* HR Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {hrCards.map(({ icon: Icon, title, items, span, color, colorRaw }, i) => (
            <Reveal key={title} delay={i * 0.12} className={span}>
              <motion.div
                className="h-full p-7 rounded-2xl cursor-default glass-card"
                whileHover={{ y: -5, borderColor: 'rgba(212,175,55,0.75)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                data-hover
                style={{
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderColor: 'rgba(212,175,55,0.35)',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${colorRaw}18`, border: `1px solid ${colorRaw}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold t-text">{title}</h3>
                  </div>
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

        {/* Dental timeline pill row (directly above dental card) */}
        <div className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.div
            className="rounded-xl px-5 py-3 glass-card"
            initial={{ y: '110%' }}
            whileInView={{ y: '0%' }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 55, damping: 20, delay: 0.18 }}
            whileHover={{ borderColor: 'rgba(212,175,55,0.75)' }}
            data-hover
            style={{
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderColor: 'rgba(212,175,55,0.35)',
            }}
          >
            <p className="font-bold text-sm t-text">Dental Assistant</p>
            <p className="text-xs mt-0.5" style={{ color: '#D4AF37' }}>
              June 2025 – Present · Charming Dental Clinic · Negombo, LK
            </p>
          </motion.div>
        </div>

        {/* Dental Bento Card */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {(() => {
            const { icon: Icon, title, items, span, color, colorRaw } = dentalCard
            return (
              <Reveal key={title} delay={0.06} className={span}>
                <motion.div
                  className="h-full p-7 rounded-2xl cursor-default glass-card"
                  whileHover={{ y: -5, borderColor: 'rgba(212,175,55,0.75)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                  data-hover
                  style={{
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderColor: 'rgba(212,175,55,0.35)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${colorRaw}18`, border: `1px solid ${colorRaw}30` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold t-text">{title}</h3>
                    </div>
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
            )
          })()}
        </div>

      </div>
    </section>
  )
}
