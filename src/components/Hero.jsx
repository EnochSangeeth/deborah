import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const floatAnim = {
  animate: { y: [0, -12, 0] },
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-16 lg:px-24">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        {/* Left */}
        <div>
          <motion.p
            className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            HR Professional · Sri Lanka
          </motion.p>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Chansi Keren:{' '}
            <span className="gold-text">Cultivating Professional Excellence.</span>
          </motion.h1>

          <motion.p
            className="text-slate-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Transforming workplaces through strategic HR management, empathetic
            leadership, and a relentless commitment to people-first culture.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <a
              href="#contact"
              className="glow-btn px-8 py-3 rounded-full bg-gradient-to-r from-gold to-gold-light text-charcoal font-bold text-sm tracking-wide"
            >
              Get In Touch
            </a>
            <a
              href="#experience"
              className="px-8 py-3 rounded-full glass text-white font-semibold text-sm tracking-wide hover:border-gold/40 transition-colors duration-300"
            >
              View Experience
            </a>
          </motion.div>
        </div>

        {/* Right – floating glass photo frame */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="relative"
            animate={floatAnim.animate}
            transition={floatAnim.transition}
          >
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold/30 to-blue-500/20 blur-2xl scale-110" />
            {/* Glass frame */}
            <div className="relative glass p-3 rounded-3xl shadow-2xl">
              <div className="w-96 h-[30rem] md:w-[26rem] md:h-[34rem] rounded-2xl overflow-hidden bg-gradient-to-br from-slate/60 to-panel/60 flex items-center justify-center">
                <img
                  src="/photo.jpg"
                  alt="Chansi Keren Ramachandren"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback avatar */}
                <div className="hidden w-full h-full items-center justify-center flex-col gap-3">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-charcoal text-4xl font-extrabold">
                    CK
                  </div>
                  <p className="text-gold-light text-sm font-medium">Chansi Keren</p>
                </div>
              </div>
              {/* Gold accent bar */}
              <div className="mt-3 h-1 w-full rounded-full bg-gradient-to-r from-gold to-gold-light" />
            </div>
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -left-6 glass px-4 py-2 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring' }}
            >
              <p className="text-xs text-slate-400">Current Role</p>
              <p className="text-sm font-semibold text-gold">HR Assistant</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-6 glass px-4 py-2 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, type: 'spring' }}
            >
              <p className="text-xs text-slate-400">Based in</p>
              <p className="text-sm font-semibold text-gold">Negombo, LK 🇱🇰</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
