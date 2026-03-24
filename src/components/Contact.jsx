import { motion } from 'framer-motion'
import { Mail, MapPin, Download } from 'lucide-react'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">

        <Reveal>
          <p className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-2 text-center">Contact</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-center">
            Let's <span className="gold-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-center mb-14 max-w-lg mx-auto">
            Feel free to reach out — always open to new opportunities and conversations.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-gold/8 blur-3xl pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

              {/* Email */}
              <motion.div
                className="group flex items-center gap-5 glass p-6 rounded-2xl border border-gold/10"
                whileHover={{ scale: 1.02, y: -3, borderColor: 'rgba(201,168,76,0.4)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="p-4 rounded-xl bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors duration-300 shrink-0">
                  <Mail size={22} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-bold group-hover:text-gold transition-colors duration-300">
                    deborackeren@gmail.com
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="group flex items-center gap-5 glass p-6 rounded-2xl border border-white/5"
                whileHover={{ scale: 1.02, y: -3, borderColor: 'rgba(96,165,250,0.4)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-400/20 group-hover:bg-blue-500/20 transition-colors duration-300 shrink-0">
                  <MapPin size={22} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-bold group-hover:text-blue-300 transition-colors duration-300">
                    Negombo, Sri Lanka 🇱🇰
                  </p>
                </div>
              </motion.div>

            </div>

            {/* CV download */}
            <div className="mt-8 flex justify-center relative z-10">
              <motion.a
                href="/cv.pdf"
                download
                className="glow-btn flex items-center gap-2.5 px-10 py-3.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold text-sm"
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>
          </div>
        </Reveal>

        {/* Footer strip */}
        <Reveal delay={0.25}>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <p>© 2025 Chansi Keren Ramachandren. All rights reserved.</p>
            <p className="gold-text font-semibold">HR Professional · Negombo, Sri Lanka</p>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
