import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  /* Photo scales from elegant frame → fills screen, then fades */
  const photoScale         = useTransform(scrollYProgress, [0, 0.65], [1, 4.5])
  const photoOpacity       = useTransform(scrollYProgress, [0, 0.45, 0.75], [1, 0.9, 0.25])
  const photoBorderRadius  = useTransform(scrollYProgress, [0, 0.45], [14, 0])

  /* Pinned name fades in mid-scroll */
  const nameOpacity = useTransform(scrollYProgress, [0.2, 0.48], [0, 1])
  const nameY       = useTransform(scrollYProgress, [0.2, 0.48], [18, 0])

  /* Side panels fade out quickly */
  const panelOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const panelY       = useTransform(scrollYProgress, [0, 0.15], [0, -20])

  /* Scroll hint */
  const hintOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0])

  return (
    <>
      {/* 180vh — enough scroll room without being exhausting */}
      <div ref={sectionRef} style={{ height: '180vh' }}>
        <div className="sticky top-0 w-full overflow-hidden"
          style={{ height: '100vh', background: '#0D0D1A', cursor: 'none' }}>

          {/* Ambient glows — site palette */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.09]"
              style={{ background: 'radial-gradient(circle, #6C63FF, transparent 65%)', transform: 'translate(-40%,-40%)' }} />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.06]"
              style={{ background: 'radial-gradient(circle, #E8A598, transparent 65%)', transform: 'translate(35%,35%)' }} />
            <div className="absolute inset-0 opacity-[0.022]"
              style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
          </div>

          {/* ── Left panel ── */}
          <motion.div
            className="absolute top-1/2 left-10 md:left-20 z-10 -translate-y-1/2"
            style={{ opacity: panelOpacity, y: panelY }}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-px w-5" style={{ background: '#6C63FF' }} />
              <span className="text-xs tracking-[0.28em] uppercase font-semibold" style={{ color: '#6C63FF' }}>
                HR Professional
              </span>
            </div>
            <p className="font-light leading-[1.9] hidden md:block"
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', maxWidth: '150px' }}>
              Strategic talent<br />management &amp;<br />people-first culture.
            </p>
            <div className="mt-8 hidden md:flex flex-col gap-5">
              {[['1+', 'Years in HR'], ['4+', 'Qualifications']].map(([v, l]) => (
                <div key={l}>
                  <p className="font-extrabold text-xl accent-text leading-none">{v}</p>
                  <p className="mt-1 uppercase tracking-widest"
                    style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.58rem' }}>{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right panel ── */}
          <motion.div
            className="absolute top-1/2 right-10 md:right-20 z-10 -translate-y-1/2 text-right"
            style={{ opacity: panelOpacity, y: panelY }}
          >
            <div className="flex items-center justify-end gap-2.5 mb-5">
              <span className="text-xs tracking-[0.28em] uppercase font-semibold" style={{ color: '#E8A598' }}>
                Sri Lanka
              </span>
              <div className="h-px w-5" style={{ background: '#E8A598' }} />
            </div>
            <p className="uppercase tracking-[0.2em] hidden md:block"
              style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.58rem', lineHeight: 2.4 }}>
              Negombo<br />Since May 2024<br />Open to Work
            </p>
            <div className="mt-8 hidden md:flex flex-col items-end gap-3">
              <a href="#contact"
                className="text-xs tracking-[0.16em] uppercase font-semibold px-4 py-2 transition-all duration-300"
                style={{ border: '1px solid rgba(108,99,255,0.38)', color: '#8B85FF', borderRadius: '4px' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                Get In Touch
              </a>
              <a href="#experience"
                className="text-xs tracking-[0.16em] uppercase font-medium transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.28)', fontSize: '0.62rem' }}
                onMouseEnter={e => e.currentTarget.style.color = '#E8A598'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
              >
                View Work →
              </a>
            </div>
          </motion.div>

          {/* ── Photo — scale-to-fill ── */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 5 }}>
            <motion.div style={{
              scale: photoScale,
              opacity: photoOpacity,
              borderRadius: photoBorderRadius,
              overflow: 'hidden',
              width:  'clamp(190px, 17vw, 270px)',
              height: 'clamp(270px, 40vh, 430px)',
              border: '1px solid rgba(108,99,255,0.3)',
              boxShadow: '0 0 80px rgba(0,0,0,0.75)',
              transformOrigin: 'center center',
            }}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(13,13,26,0.9) 0%, transparent 52%)' }} />
              {/* Violet top shimmer */}
              <div className="absolute top-0 left-0 right-0 h-px z-20"
                style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, transparent)' }} />
              {/* Rose bottom shimmer */}
              <div className="absolute bottom-0 left-0 right-0 h-px z-20"
                style={{ background: 'linear-gradient(90deg, transparent, #E8A598, transparent)' }} />

              <img
                src="/photo.jpg"
                alt="Chansi Keren Ramachandren"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'contrast(1.04) brightness(0.9)' }}
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
              />
              <div className="hidden w-full h-full items-center justify-center absolute inset-0"
                style={{ background: '#12122A' }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '2rem', fontWeight: 900, color: '#6C63FF' }}>CK</span>
              </div>

              {/* Name plate */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-4">
                <p className="text-white font-semibold leading-tight"
                  style={{ fontSize: '0.65rem', textShadow: '0 2px 10px rgba(0,0,0,1)', letterSpacing: '0.05em' }}>
                  Chansi Keren Ramachandren
                </p>
                <p className="mt-0.5 uppercase tracking-widest font-medium"
                  style={{ color: '#E8A598', fontSize: '0.5rem', textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>
                  HR Professional
                </p>
              </div>
            </motion.div>
          </div>

          {/* ── Pinned name — fades in as photo expands ── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            style={{ opacity: nameOpacity, y: nameY, zIndex: 6 }}
            aria-hidden="true"
          >
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.7)',
              color: 'transparent',
              textAlign: 'center',
              lineHeight: 1.08,
              userSelect: 'none',
            }}>
              CHANSI<br />KEREN
            </span>
          </motion.div>

          {/* ── Footer strip ── */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="w-full h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(108,99,255,0.4) 35%, rgba(232,165,152,0.3) 65%, transparent)' }} />
            <div className="w-full flex items-center justify-between px-8 md:px-16 py-3"
              style={{ background: 'rgba(13,13,26,0.82)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}>
              <p className="font-mono uppercase tracking-[0.28em] whitespace-nowrap"
                style={{ color: 'rgba(255,255,255,0.32)', fontSize: '0.58rem' }}>
                Human Resource Professional&nbsp;&nbsp;•&nbsp;&nbsp;Negombo, Sri Lanka&nbsp;&nbsp;•&nbsp;&nbsp;Open to Opportunities
              </p>
              <div className="flex items-center gap-3 ml-6 shrink-0">
                <div className="h-3 w-px" style={{ background: 'rgba(108,99,255,0.35)' }} />
                <span className="font-mono tracking-widest" style={{ color: 'rgba(139,133,255,0.55)', fontSize: '0.58rem' }}>2025</span>
              </div>
            </div>
          </div>

          {/* ── Scroll cue ── */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
            style={{ opacity: hintOpacity }}
          >
            <span className="uppercase tracking-[0.3em]" style={{ color: 'rgba(255,255,255,0.22)', fontSize: '0.52rem' }}>scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}>
              <ChevronDown size={14} style={{ color: 'rgba(108,99,255,0.45)' }} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </>
  )
}
