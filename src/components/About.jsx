import Reveal from './Reveal'
import { motion } from 'framer-motion'
import { Award, Heart, TrendingUp } from 'lucide-react'

const pillars = [
  { icon: Award, title: 'Recruitment Excellence', desc: 'End-to-end talent acquisition from job posting to onboarding, ensuring the right people join the right teams.' },
  { icon: Heart, title: 'People-First Culture', desc: 'Building workplaces where employees feel valued, heard, and empowered to perform at their best.' },
  { icon: TrendingUp, title: 'Operational Precision', desc: 'Meticulous management of HR records, payroll queries, and compliance to keep organisations running smoothly.' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="label mb-4">About Me</p>
          <div className="section-divider" />
          <h2 className="font-extrabold mb-16" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F5F0EB' }}>
            The Professional Behind the <span className="accent-text">Portfolio</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">
          {/* Bio card */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="h-full rounded-2xl p-8 md:p-10 relative overflow-hidden"
              style={{ background: 'rgba(26,26,53,0.6)', border: '1px solid rgba(108,99,255,0.12)' }}>
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none opacity-10"
                style={{ background: 'radial-gradient(circle, #6C63FF, transparent)', transform: 'translate(30%, -30%)' }} />

              <div className="flex items-center gap-4 mb-7">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6C63FF, #E8A598)' }}>CK</div>
                <div>
                  <h3 className="text-cream font-bold text-base">Chansi Keren Ramachandren</h3>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: '#8B85FF' }}>HR Professional · Negombo, Sri Lanka</p>
                </div>
              </div>

              <p className="leading-[1.85] text-sm mb-5" style={{ color: '#8892A4' }}>
                Chansi Keren is a driven and detail-oriented <span className="text-cream font-semibold">HR professional</span> based
                in Negombo, Sri Lanka, with hands-on experience in the full spectrum of human resources operations.
                Since joining Tropic Frozen Foods in May 2024, she has played a pivotal role in shaping a structured,
                compliant, and people-centred workplace.
              </p>
              <p className="leading-[1.85] text-sm mb-5" style={{ color: '#8892A4' }}>
                Her expertise spans <span className="text-cream font-semibold">recruitment and talent acquisition</span> — from
                crafting compelling job postings and screening candidates to orchestrating seamless onboarding experiences
                that set new hires up for success from day one. She brings the same precision to
                <span className="text-cream font-semibold"> payroll administration</span>, attendance tracking, and
                employee record management, ensuring operational accuracy across the board.
              </p>
              <p className="leading-[1.85] text-sm" style={{ color: '#8892A4' }}>
                Backed by an <span className="text-cream font-semibold">AC in Human Resource Management</span> from the Open
                University of Sri Lanka and a strong foundation in business, IT, and communication, Chansi combines
                academic rigour with real-world empathy — making her a trusted partner for both management and employees alike.
              </p>

              {/* Professional Goal Statement */}
              <div className="mt-7 pt-6 relative"
                style={{ borderTop: '1px solid rgba(108,99,255,0.12)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-px w-4" style={{ background: '#6C63FF' }} />
                  <span className="text-xs tracking-[0.25em] uppercase font-semibold" style={{ color: '#6C63FF' }}>Professional Goal</span>
                </div>
                <p className="leading-[1.9] text-sm italic" style={{ color: 'rgba(245,240,235,0.6)' }}>
                  “To leverage my foundational experience in Human Resources and strategic business planning to cultivate
                  high-performing organisational cultures. Currently advancing my expertise through the
                  <span className="not-italic font-semibold" style={{ color: '#8B85FF' }}> Open University of Sri Lanka</span>,
                  I am dedicated to optimising internal operations and fostering positive employee relations that drive
                  both individual growth and sustainable corporate success in the
                  <span className="not-italic font-semibold" style={{ color: '#E8A598' }}> Negombo region and beyond</span>.”
                </p>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.2} className="lg:col-span-2">
            <div className="h-full flex flex-col gap-4">
              {[
                ['1+', 'Year', 'Active HR experience at Tropic Frozen Foods'],
                ['4+', 'Qualifications', 'Across HR, Business, IT & English'],
                ['100%', 'Commitment', 'To every employee and every task'],
              ].map(([val, title, sub]) => (
                <motion.div key={title}
                  className="flex-1 rounded-2xl p-6 flex flex-col justify-center"
                  style={{ background: 'rgba(26,26,53,0.6)', border: '1px solid rgba(108,99,255,0.1)' }}
                  whileHover={{ borderColor: 'rgba(108,99,255,0.3)', y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-black mb-1" style={{ fontSize: '2rem', background: 'linear-gradient(135deg, #6C63FF, #E8A598)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{val}</p>
                  <p className="text-cream font-semibold text-sm">{title}</p>
                  <p className="text-xs mt-1" style={{ color: '#8892A4' }}>{sub}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <motion.div
                className="rounded-2xl p-6"
                style={{ background: 'rgba(26,26,53,0.4)', border: '1px solid rgba(108,99,255,0.1)' }}
                whileHover={{ borderColor: 'rgba(108,99,255,0.3)', y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(108,99,255,0.15)', border: '1px solid rgba(108,99,255,0.2)' }}>
                  <Icon size={18} style={{ color: '#8B85FF' }} />
                </div>
                <h4 className="text-cream font-bold text-sm mb-2">{title}</h4>
                <p className="text-xs leading-relaxed" style={{ color: '#8892A4' }}>{desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
