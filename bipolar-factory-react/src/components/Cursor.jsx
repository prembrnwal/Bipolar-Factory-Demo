import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let animId

    const onMove = (e) => { mx = e.clientX; my = e.clientY }

    const animate = () => {
      if (cursorRef.current) {
        cursorRef.current.style.left = mx + 'px'
        cursorRef.current.style.top = my + 'px'
      }
      rx += (mx - rx) * 0.12
      ry += (my - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px'
        ringRef.current.style.top = ry + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', onMove)
    animId = requestAnimationFrame(animate)

    const addHover = () => setIsHover(true)
    const removeHover = () => setIsHover(false)

    const hoverEls = document.querySelectorAll('a, button, .product-card, .service-item, .case-card')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          width: isHover ? '20px' : '12px',
          height: isHover ? '20px' : '12px',
          background: isHover ? 'var(--orange)' : 'var(--acid)',
          borderRadius: '50%',
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 9999,
          transition: 'width 0.2s, height 0.2s, background 0.2s',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        style={{
          width: isHover ? '56px' : '36px',
          height: isHover ? '56px' : '36px',
          border: '1.5px solid var(--acid)',
          borderRadius: '50%',
          position: 'fixed', top: 0, left: 0,
          pointerEvents: 'none', zIndex: 9998,
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
          transform: 'translate(-50%, -50%)',
          opacity: isHover ? 0.3 : 0.6,
        }}
      />
    </>
  )
}
