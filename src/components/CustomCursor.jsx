import { useEffect, useRef } from 'react'
import { useMotionValue, useSpring, motion } from 'framer-motion'

const SPRING = { stiffness: 180, damping: 22, mass: 0.55 }

export default function CustomCursor() {
  const mx = useMotionValue(-300)
  const my = useMotionValue(-300)
  const rx = useSpring(mx, SPRING)
  const ry = useSpring(my, SPRING)

  const dotRef  = useRef(null)
  const orbRef  = useRef(null)
  const alive   = useRef(false)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const orb = orbRef.current
    if (!dot || !orb) return

    /* ── move ── */
    const onMove = ({ clientX, clientY }) => {
      mx.set(clientX)
      my.set(clientY)
      dot.style.left = clientX + 'px'
      dot.style.top  = clientY + 'px'
      if (!alive.current) {
        alive.current = true
        dot.style.opacity = '1'
        orb.style.opacity = '1'
      }
    }

    const hide = () => {
      alive.current = false
      dot.style.opacity = '0'
      orb.style.opacity = '0'
    }

    /* ── hover: orb locks on (shrinks + brightens) ── */
    const onEnter = () => {
      orb.style.width        = '28px'
      orb.style.height       = '28px'
      orb.style.marginLeft   = '-14px'
      orb.style.marginTop    = '-14px'
      orb.style.borderColor  = 'rgba(212,175,55,1)'
      orb.style.background   = 'rgba(212,175,55,0.18)'
      orb.style.boxShadow    = '0 0 18px rgba(212,175,55,0.35), inset 0 1px 0 rgba(255,255,255,0.3)'
      dot.style.background   = '#D4AF37'
    }
    const onLeave = () => {
      orb.style.width        = '40px'
      orb.style.height       = '40px'
      orb.style.marginLeft   = '-20px'
      orb.style.marginTop    = '-20px'
      orb.style.borderColor  = 'rgba(212,175,55,0.4)'
      orb.style.background   = 'rgba(255,255,255,0.06)'
      orb.style.boxShadow    = '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)'
      dot.style.background   = '#ffffff'
    }

    /* ── click flash ── */
    const onClick = () => {
      orb.style.transition = 'transform .15s ease-out, opacity .15s ease-out'
      orb.style.transform  = 'translate(-50%,-50%) scale(1.7)'
      orb.style.opacity    = '0.2'
      setTimeout(() => {
        orb.style.transition = ORB_TR
        orb.style.transform  = 'translate(-50%,-50%) scale(1)'
        orb.style.opacity    = alive.current ? '1' : '0'
      }, 180)
    }

    const ORB_TR = [
      'width .3s cubic-bezier(.34,1.56,.64,1)',
      'height .3s cubic-bezier(.34,1.56,.64,1)',
      'margin .3s cubic-bezier(.34,1.56,.64,1)',
      'border-color .2s ease',
      'background .2s ease',
      'box-shadow .2s ease',
      'opacity .3s ease',
      'transform .2s ease',
    ].join(', ')

    orb.style.transition = ORB_TR

    const attach = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })
    attach()

    window.addEventListener('mousemove',    onMove, { passive: true })
    window.addEventListener('click',        onClick)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', () => { if (!alive.current) { dot.style.opacity = '1'; orb.style.opacity = '1'; alive.current = true } })

    return () => {
      window.removeEventListener('mousemove',    onMove)
      window.removeEventListener('click',        onClick)
      document.removeEventListener('mouseleave', hide)
      obs.disconnect()
    }
  }, [mx, my])

  return (
    <>
      {/* ── Sharp inner dot — zero lag ── */}
      <div ref={dotRef} style={{
        position:             'fixed',
        top:                  0,
        left:                 0,
        width:                5,
        height:               5,
        marginLeft:           -2.5,
        marginTop:            -2.5,
        borderRadius:         '50%',
        background:           '#ffffff',
        pointerEvents:        'none',
        zIndex:               10000,
        opacity:              0,
        transform:            'translate(-50%,-50%)',
        willChange:           'left, top',
        transition:           'background .2s ease',
      }} />

      {/* ── Frosted glass orb — spring lag ── */}
      <motion.div ref={orbRef} style={{
        position:             'fixed',
        top:                  ry,
        left:                 rx,
        width:                40,
        height:               40,
        marginLeft:           -20,
        marginTop:            -20,
        borderRadius:         '50%',
        background:           'rgba(255,255,255,0.06)',
        backdropFilter:       'blur(12px) saturate(180%)',
        WebkitBackdropFilter: 'blur(12px) saturate(180%)',
        border:               '1px solid rgba(212,175,55,0.4)',
        boxShadow:            '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.15)',
        transform:            'translate(-50%,-50%)',
        pointerEvents:        'none',
        zIndex:               9999,
        opacity:              0,
        willChange:           'top, left',
      }} />
    </>
  )
}
