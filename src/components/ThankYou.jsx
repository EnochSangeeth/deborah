import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ── Confetti burst on email copy ── */
function Burst({ active }) {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    angle: (i / 12) * 360,
    color: ['#D4AF37', '#6C63FF', '#E8A598', '#8B85FF'][i % 4],
    dist:  40 + Math.random() * 30,
  }))
  return (
    <AnimatePresence>
      {active && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center" style={{ zIndex: 10 }}>
          {particles.map((p, i) => (
            <motion.div key={i}
              style={{
                position: 'absolute', width: 5, height: 5,
                borderRadius: '50%', background: p.color,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: Math.cos(p.angle * Math.PI / 180) * p.dist,
                y: Math.sin(p.angle * Math.PI / 180) * p.dist,
                opacity: 0, scale: 0,
              }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: i * 0.02 }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

/* ── Typewriter signature ── */
function Signature({ inView }) {
  const [displayed, setDisplayed] = useState('')
  const full = 'Deborah'

  useEffect(() => {
    if (!inView) return
    let i = 0
    // start after the rest of the section has animated in
    const start = setTimeout(() => {
      const id = setInterval(() => {
        i++
        setDisplayed(full.slice(0, i))
        if (i >= full.length) clearInterval(id)
      }, 90)
      return () => clearInterval(id)
    }, 1200)
    return () => clearTimeout(start)
  }, [inView])

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px', minHeight: 52 }}>
      <span style={{
        fontFamily:    "'Playfair Display', Georgia, serif",
        fontSize:      'clamp(1.8rem, 4vw, 2.6rem)',
        fontStyle:     'italic',
        fontWeight:    700,
        color:         'var(--gold)',
        letterSpacing: '0.02em',
        lineHeight:    1,
      }}>
        {displayed}
      </span>
      {/* blinking cursor */}
      {displayed.length < full.length && inView && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            display:         'inline-block',
            width:           2,
            height:          '1.8rem',
            background:      'var(--gold)',
            borderRadius:    1,
            marginLeft:      2,
            verticalAlign:   'middle',
          }}
        />
      )}
    </div>
  )
}

export default function ThankYou() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const [copied,  setCopied]  = useState(false)
  const [burst,   setBurst]   = useState(false)
  const [tooltip, setTooltip] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('deborackeren@gmail.com').then(() => {
      setCopied(true)
      setBurst(true)
      setTimeout(() => setBurst(false),  700)
      setTimeout(() => setCopied(false), 2200)
    })
  }

  return (
    <section style={{ background: 'var(--bg)', padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem) 0' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position:             'relative',
          borderRadius:         '2rem',
          overflow:             'hidden',
          background:           'var(--card)',
          backdropFilter:       'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border:               '1px solid var(--card-border)',
          padding:              'clamp(2.5rem,6vw,5rem) clamp(1.5rem,5vw,4rem)',
          textAlign:            'center',
        }}
      >
        {/* Ambient glows */}
        <div style={{ position:'absolute', inset:0, pointerEvents:'none', zIndex:0 }}>
          <div style={{ position:'absolute', top:'-20%', left:'-10%', width:'50%', height:'60%',
            background:'radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)' }} />
          <div style={{ position:'absolute', bottom:'-20%', right:'-10%', width:'45%', height:'55%',
            background:'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)' }} />
        </div>

        {/* Top accent line */}
        <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:1,
          background:'linear-gradient(90deg, transparent, var(--gold), var(--violet), transparent)', opacity:0.5 }} />

        <div style={{ position:'relative', zIndex:1 }}>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity:0, y:12 }} animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.2, duration:0.6 }}
            style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.75rem', marginBottom:'1.75rem' }}
          >
            <div style={{ height:1, width:28, background:'var(--violet)', opacity:0.5 }} />
            <span style={{ fontSize:'0.62rem', letterSpacing:'0.3em', textTransform:'uppercase', fontWeight:700, color:'var(--violet)' }}>
              A Note of Gratitude
            </span>
            <div style={{ height:1, width:28, background:'var(--violet)', opacity:0.5 }} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.35, duration:0.8, ease:[0.22,1,0.36,1] }}
            style={{
              fontFamily:    "'Playfair Display', Georgia, serif",
              fontSize:      'clamp(1.6rem, 4vw, 2.8rem)',
              fontWeight:    900,
              letterSpacing: '-0.02em',
              lineHeight:    1.2,
              color:         'var(--text)',
              marginBottom:  '1.75rem',
              maxWidth:      700,
              margin:        '0 auto 1.75rem',
            }}
          >
            Building the Future of{' '}
            <span className="accent-text">People Operations</span>, Together.
          </motion.h2>

          {/* Body */}
          <motion.p
            initial={{ opacity:0, y:16 }} animate={inView ? { opacity:1, y:0 } : {}}
            transition={{ delay:0.5, duration:0.7 }}
            style={{
              fontSize:   'clamp(0.9rem, 1.8vw, 1.05rem)',
              lineHeight: 1.9,
              color:      'var(--text-sub)',
              maxWidth:   620,
              margin:     '0 auto 1rem',
            }}
          >
            Thank you for taking the time to explore my professional journey. My mission is to blend
            strategic HR efficiency with a deep-rooted commitment to positive interpersonal growth.
            Whether you are looking for a dedicated collaborator or simply want to connect,
            I look forward to the conversation.
          </motion.p>

          {/* Sub-text */}
          <motion.p
            initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
            transition={{ delay:0.7, duration:0.6 }}
            style={{ fontSize:'0.72rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--text-muted)', marginBottom:'2.5rem' }}
          >
            Currently shaping organizational success from Negombo, Sri Lanka.
          </motion.p>

          {/* Email badge */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }} animate={inView ? { opacity:1, scale:1 } : {}}
            transition={{ delay:0.8, duration:0.5, type:'spring', stiffness:200, damping:20 }}
            style={{ display:'flex', justifyContent:'center', marginBottom:'3rem' }}
          >
            <div style={{ position:'relative', display:'inline-flex' }}>
              <Burst active={burst} />
              <motion.button
                onClick={copyEmail}
                onMouseEnter={() => setTooltip(true)}
                onMouseLeave={() => setTooltip(false)}
                data-hover
                animate={copied ? {} : { boxShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 18px rgba(212,175,55,0.35)', '0 0 0px rgba(212,175,55,0)'] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  display:              'inline-flex',
                  alignItems:           'center',
                  gap:                  '0.6rem',
                  padding:              '0.65rem 1.4rem',
                  borderRadius:         '999px',
                  background:           copied ? 'rgba(108,99,255,0.12)' : 'rgba(212,175,55,0.08)',
                  border:               `1px solid ${copied ? 'rgba(108,99,255,0.5)' : 'rgba(212,175,55,0.5)'}`,
                  color:                copied ? 'var(--violet)' : 'var(--gold)',
                  fontSize:             '0.82rem',
                  fontWeight:           600,
                  letterSpacing:        '0.02em',
                  transition:           'background .3s, border-color .3s, color .3s',
                  position:             'relative',
                }}
              >
                {/* Pulse ring */}
                {!copied && (
                  <motion.span style={{
                    position:'absolute', inset:-4, borderRadius:'999px',
                    border:'1px solid rgba(212,175,55,0.3)',
                    pointerEvents:'none',
                  }}
                    animate={{ scale:[1, 1.12, 1], opacity:[0.6, 0, 0.6] }}
                    transition={{ duration:2, repeat:Infinity, ease:'easeInOut' }}
                  />
                )}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                {copied ? '✓ Email Copied!' : 'deborackeren@gmail.com'}
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {tooltip && !copied && (
                  <motion.div
                    initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:6 }}
                    transition={{ duration:0.18 }}
                    style={{
                      position:'absolute', bottom:'calc(100% + 10px)', left:'50%',
                      transform:'translateX(-50%)',
                      background:'var(--card)', border:'1px solid var(--card-border)',
                      borderRadius:8, padding:'0.3rem 0.7rem',
                      fontSize:'0.65rem', fontWeight:600, letterSpacing:'0.08em',
                      color:'var(--text-muted)', whiteSpace:'nowrap',
                      backdropFilter:'blur(12px)', WebkitBackdropFilter:'blur(12px)',
                      pointerEvents:'none',
                    }}
                  >
                    Click to Copy
                    <div style={{
                      position:'absolute', top:'100%', left:'50%', transform:'translateX(-50%)',
                      width:0, height:0,
                      borderLeft:'5px solid transparent', borderRight:'5px solid transparent',
                      borderTop:'5px solid var(--card-border)',
                    }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Signature */}
          <motion.div
            initial={{ opacity:0 }} animate={inView ? { opacity:1 } : {}}
            transition={{ delay:1, duration:0.5 }}
            style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'0.5rem' }}
          >
            <p style={{ fontSize:'0.6rem', letterSpacing:'0.25em', textTransform:'uppercase', color:'var(--text-muted)', opacity:0.6 }}>
              With gratitude
            </p>
            <Signature inView={inView} />
          </motion.div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX:0 }} animate={inView ? { scaleX:1 } : {}}
          transition={{ duration:1.2, delay:1.2, ease:[0.22,1,0.36,1] }}
          style={{ position:'absolute', bottom:0, left:'5%', right:'5%', height:1,
            background:'linear-gradient(90deg, transparent, var(--gold), var(--rose), transparent)',
            opacity:0.35, transformOrigin:'center' }}
        />
      </motion.div>

      {/* Footer bar */}
      <div style={{
        marginTop:'2rem', paddingTop:'1.5rem', paddingBottom:'1.5rem',
        borderTop:'1px solid var(--card-border)',
        display:'flex', flexWrap:'wrap', alignItems:'center',
        justifyContent:'space-between', gap:'0.75rem',
        fontSize:'0.68rem', color:'var(--text-muted)',
      }}>
        <p>© 2026 Chansi Keren Ramachandren. All rights reserved.</p>
        <p className="accent-text" style={{ fontWeight:600 }}>HR Professional · Negombo, Sri Lanka</p>
      </div>
    </section>
  )
}
