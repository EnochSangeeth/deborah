import { useRef, useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

/* Shared state lives here — exported so Navbar can render the button */
let _toggle = () => {}
let _light  = false
const _listeners = new Set()

export function useTheme() {
  const [light, setLight] = useState(_light)
  useEffect(() => {
    const cb = (v) => setLight(v)
    _listeners.add(cb)
    return () => _listeners.delete(cb)
  }, [])
  return { light, toggle: _toggle }
}

export default function ThemeToggle() {
  const [light, setLight] = useState(false)
  const [busy,  setBusy]  = useState(false)
  const overlayRef        = useRef(null)
  const cursorPos         = useRef({ x: window.innerWidth / 2, y: 60 })

  /* sync shared state */
  useEffect(() => {
    _light  = light
    _listeners.forEach(cb => cb(light))
  }, [light])

  useEffect(() => {
    _toggle = () => {
      if (busy) return
      setBusy(true)

      const { x, y } = cursorPos.current
      const ov       = overlayRef.current
      const next     = !light

      const maxR = Math.ceil(Math.sqrt(
        Math.pow(Math.max(x, window.innerWidth  - x), 2) +
        Math.pow(Math.max(y, window.innerHeight - y), 2)
      ))

      ov.style.background = next ? '#F0EDE8' : '#0D0D1A'
      ov.style.left       = x + 'px'
      ov.style.top        = y + 'px'
      ov.style.clipPath   = 'circle(0px at 50% 50%)'
      ov.style.opacity    = '1'
      ov.style.transition = 'none'
      void ov.offsetWidth
      ov.style.transition = 'clip-path 0.72s cubic-bezier(0.76,0,0.24,1)'
      ov.style.clipPath   = `circle(${maxR}px at 50% 50%)`

      setTimeout(() => {
        setLight(next)
        document.documentElement.setAttribute('data-theme', next ? 'light' : '')
      }, 430)

      setTimeout(() => {
        ov.style.opacity  = '0'
        ov.style.clipPath = 'circle(0px at 50% 50%)'
        setBusy(false)
      }, 740)
    }

    const onMove = ({ clientX, clientY }) => {
      cursorPos.current = { x: clientX, y: clientY }
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [light, busy])

  return (
    <div
      ref={overlayRef}
      style={{
        position:      'fixed',
        width:         2,
        height:        2,
        marginLeft:    -1,
        marginTop:     -1,
        borderRadius:  '50%',
        pointerEvents: 'none',
        zIndex:        9990,
        opacity:       0,
      }}
    />
  )
}
