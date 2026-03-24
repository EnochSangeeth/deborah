import Reveal from './Reveal'
import { Sparkles } from 'lucide-react'

const stats = [
  { value: '1+', label: 'Years Experience' },
  { value: '3+', label: 'Diplomas & Certs' },
  { value: '100%', label: 'Dedication' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2">About Me</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            The Person Behind the <span className="gold-text">Profile</span>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass p-8 md:p-12 relative overflow-hidden">
            {/* Decorative orb */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gold/10 border border-gold/20">
                <Sparkles className="text-gold" size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Chansi Keren Ramachandren</h3>
                <p className="text-gold text-sm">HR Assistant · Tropic Frozen Foods</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
              An experienced <span className="text-gold font-semibold">HR Assistant</span> with a
              strong background in marketing plans and a passion for cultivating positive
              interpersonal relationships. Committed to fostering inclusive, high-performance
              workplace cultures through strategic thinking and empathetic communication.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl md:text-3xl font-extrabold gold-text">{value}</p>
                  <p className="text-slate-400 text-sm mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
