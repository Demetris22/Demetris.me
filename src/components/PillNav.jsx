import { useRef } from 'react'
import gsap from 'gsap'
import './PillNav.css'

function PillNav({ items, activeHref, onSelect }) {
  const containerRef = useRef(null)
  const bubbleRef = useRef(null)
  const hoveringRef = useRef(false)

  const moveTo = (el, instant = false) => {
    const container = containerRef.current
    const bubble = bubbleRef.current
    if (!container || !bubble || !el) return
    const cRect = container.getBoundingClientRect()
    const eRect = el.getBoundingClientRect()
    if (instant) {
      gsap.set(bubble, { x: eRect.left - cRect.left, width: eRect.width })
    } else {
      gsap.to(bubble, {
        x: eRect.left - cRect.left,
        width: eRect.width,
        duration: 0.28,
        ease: 'power2.out',
      })
    }
  }

  const handleMouseEnter = (e) => {
    const bubble = bubbleRef.current
    if (!bubble) return
    if (!hoveringRef.current) {
      moveTo(e.currentTarget, true)
      gsap.to(bubble, { opacity: 1, duration: 0.15, ease: 'power2.out' })
      hoveringRef.current = true
    } else {
      moveTo(e.currentTarget)
    }
  }

  const handleMouseLeave = () => {
    const bubble = bubbleRef.current
    if (!bubble) return
    gsap.to(bubble, { opacity: 0, duration: 0.2, ease: 'power2.in' })
    hoveringRef.current = false
  }

  return (
    <nav
      ref={containerRef}
      className="pill-nav"
      aria-label="Primary navigation"
      onMouseLeave={handleMouseLeave}
    >
      <div ref={bubbleRef} className="pill-bubble" aria-hidden="true" />
      {items.map((item) => {
        const sectionId = item.href.slice(1)
        return (
          <a
            key={item.href}
            href={item.href}
            data-href={item.href}
            className={`pill-link${activeHref === item.href ? ' active' : ''}${item.href === '#contact' ? ' pill-link-contact' : ''}`}
            aria-current={activeHref === item.href ? 'page' : undefined}
            onMouseEnter={handleMouseEnter}
            onClick={() => onSelect(sectionId)}
          >
            {item.label}
          </a>
        )
      })}
    </nav>
  )
}

export default PillNav
