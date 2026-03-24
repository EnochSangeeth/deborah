import { useEffect, useRef } from 'react'

const BASE        = 10
const IDLE_DELAY  = 900   // ms before breathe starts

export default function CustomCursor() {
  const ref   = useRef(null)
  const state = useRef({ timer: null, pulsing: false, visible: false })

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const el = ref.current
    if (!el) return
    const s = state.current

    /* position: use left/top so transform is free for the breathe scale */
    const move = (x, y) => {
      el.style.left = x + 'px'
      el.style.top  = y + 'px'
    }

    const show = () => { el.style.opacity = '1'; s.visible = true  }
    const hide = () => { el.style.opacity = '0'; s.visible = false; stopPulse(); clearTimeout(s.timer) }

    /* ── breathe pulse ── */
    const stopPulse = () => {
      if (!s.pulsing) return
      s.pulsing = false
      el.style.animation = 'none'
      /* force reflow so removing animation takes effect immediately */
      void el.offsetWidth
    }

    const startPulse = () => {
      if (s.hovered || s.pulsing || !s.visible) return
      s.pulsing = true
      el.style.animation = 'cur-breathe 1.8s ease-in-out infinite'
    }

    const schedulePulse = () => {
      clearTimeout(s.timer)
      s.timer = setTimeout(startPulse, IDLE_DELAY)
    }

    /* ── mouse move ── */
    const onMove = ({ clientX, clientY }) => {
      move(clientX, clientY)
      if (!s.visible) show()
      stopPulse()
      schedulePulse()
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)

    return () => {
      clearTimeout(s.timer)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes cur-breathe {
          0%, 100% { transform: translate(-50%, -50%) scale(1);    }
          50%       { transform: translate(-50%, -50%) scale(2.2);  opacity: 0.5; }
        }
      `}</style>
      <div
        ref={ref}
        style={{
          position:      'fixed',
          top:           0,
          left:          0,
          width:         BASE,
          height:        BASE,
          marginLeft:    -(BASE / 2),
          marginTop:     -(BASE / 2),
          borderRadius:  '50%',
          background:    '#D4AF37',
          mixBlendMode:  'difference',
          pointerEvents: 'none',
          zIndex:        9999,
          opacity:       0,
          transform:     'translate(-50%, -50%)',
          willChange:    'left, top, width, height',
          transition:    'width .15s ease, height .15s ease, margin .15s ease',
        }}
      />
    </>
  )
}
