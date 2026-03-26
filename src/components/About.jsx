import Reveal from './Reveal'
import { motion } from 'framer-motion'
import { Award, Heart, TrendingUp } from 'lucide-react'

const pillars = [
  { icon: Award,      title: 'Recruitment Excellence', desc: 'End-to-end talent acquisition from job posting to onboarding, ensuring the right people join the right teams.' },
  { icon: Heart,      title: 'People-First Culture',   desc: 'Building workplaces where employees feel valued, heard, and empowered to perform at their best.' },
  { icon: TrendingUp, title: 'Operational Precision',  desc: 'Meticulous management of HR records, payroll queries, and compliance to keep organisations running smoothly.' },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-16 lg:px-24 2xl:px-32"
      style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="label mb-4">About Me</p>
          <div className="section-divider" />
          <h2 className="font-extrabold mb-10 sm:mb-16 t-text"
            style={{ fontSize: 'clamp(1.6rem, 4vw, 2.8rem)' }}>
            The Professional Behind the <span className="accent-text">Portfolio</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {/* Bio card */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-full rounded-2xl p-8 md:p-10 relative overflow-hidden glass-card">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-10"
                style={{ background: 'radial-gradient(circle, var(--violet), transparent)', transform: 'translate(30%,-30%)' }} />

              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: 'linear-gradient(135deg, var(--violet), var(--rose))' }}>CK</div>
                <div>
                  <h3 className="font-bold text-base t-text">Chansi Keren Ramachandren</h3>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: 'var(--violet-light)' }}>
                    <span className="font-semibold" style={{ color: 'var(--violet-light)' }}>HR Professional</span> · <span className="font-semibold" style={{ color: 'var(--gold)' }}>Dental Assistant</span> · Negombo, Sri Lanka
                  </p>
                </div>
              </div>

              <p className="leading-[1.85] text-sm mb-5 t-muted">
                Chansi Keren is a driven and multi-faceted professional based in{' '}
                <span className="font-semibold t-text">Negombo</span>, Sri Lanka, with a versatile background spanning{' '}
                <span className="font-semibold t-text">Human Resources</span> operations and clinical support. Currently excelling as a{' '}
                <span className="font-semibold t-text">Dental Assistant</span> at Charming Dental Clinic since June 2025, she brings technical precision to patient care and sterilization protocols.
              </p>
              <p className="leading-[1.85] text-sm mb-5 t-muted">
                Her professional foundation was built at Tropic Frozen Foods (May 2024 – May 2025), where she played a pivotal role in shaping a structured, compliant, and people-centred workplace.
                Her expertise there spanned the full HR spectrum—from recruitment and talent acquisition to{' '}
                <span className="font-semibold t-text">payroll administration</span> and employee record management—making her a trusted partner in both corporate and clinical environments.
              </p>
              <p className="leading-[1.85] text-sm t-muted">
                Backed by an <span className="font-semibold t-text">AC in Human Resource Management</span> from the Open University of Sri Lanka and a strong foundation in business, IT, and communication,
                Chansi combines academic rigour with real-world empathy—making her a trusted partner in both corporate and clinical environments.
              </p>

              {/* Professional Goal */}
              <div className="mt-7 pt-6" style={{ borderTop: '1px solid var(--card-border)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px w-4" style={{ background: 'var(--violet)' }} />
                  <span className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: 'var(--violet)' }}>
                    Professional Goal
                  </span>
                </div>
                <p className="leading-[1.9] text-sm italic t-sub">
                  "To leverage my foundational experience in Human Resources and strategic business planning
                  to cultivate high-performing organisational cultures. Currently advancing my expertise through the
                  <span className="not-italic font-semibold" style={{ color: 'var(--violet-light)' }}> Open University of Sri Lanka</span>,
                  I am dedicated to optimising internal operations and fostering positive employee relations that
                  drive both individual growth and sustainable corporate success in the
                  <span className="not-italic font-semibold" style={{ color: 'var(--rose)' }}> Negombo region and beyond</span>."
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="h-full flex flex-col gap-4">
              {[
                ['1+',   'Year',           'Active HR experience at Tropic Frozen Foods'],
                ['4+',   'Qualifications', 'Across HR, Business, IT & English'],
                ['100%', 'Commitment',     'To every employee and every task'],
              ].map(([val, title, sub]) => (
                <motion.div key={title}
                  className="flex-1 rounded-2xl p-6 flex flex-col justify-center glass-card"
                  whileHover={{ borderColor: 'rgba(108,99,255,0.3)', y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-black mb-1 accent-text" style={{ fontSize: '2rem' }}>{val}</p>
                  <p className="font-semibold text-sm t-text">{title}</p>
                  <p className="text-xs mt-1 t-muted">{sub}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <motion.div
                className="rounded-2xl p-6 glass-card"
                whileHover={{ borderColor: 'rgba(108,99,255,0.3)', y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.2)' }}>
                  <Icon size={18} style={{ color: 'var(--violet-light)' }} />
                </div>
                <h4 className="font-bold text-sm mb-2 t-text">{title}</h4>
                <p className="text-xs leading-relaxed t-muted">{desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
