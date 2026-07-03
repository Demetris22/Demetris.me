import { useRef } from 'react'
import gsap from 'gsap'
import './PillNav.css'

function PillNav({ items, activeHref, onSelect }) {
  const containerRef = useRef(null)
  const bubbleRef = useRef(null)

  const moveTo = (el) => {
    const container = containerRef.current
    const bubble = bubbleRef.current
    if (!container || !bubble || !el) return
    const cRect = container.getBoundingClientRect()
    const eRect = el.getBoundingClientRect()
    gsap.set(bubble, { x: eRect.left - cRect.left, width: eRect.width })
  }

  const handleMouseEnter = (e) => {
    moveTo(e.currentTarget)
  }

  return (
    <nav
      ref={containerRef}
      className="pill-nav"
      aria-label="Primary navigation"
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
