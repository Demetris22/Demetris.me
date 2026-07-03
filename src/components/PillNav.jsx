import { useRef, useEffect, useLayoutEffect } from 'react'
import gsap from 'gsap'
import './PillNav.css'

function PillNav({ items, activeHref, onSelect }) {
  const containerRef = useRef(null)
  const bubbleRef = useRef(null)

  const getActiveEl = () =>
    containerRef.current?.querySelector(`[data-href="${activeHref}"]`)

  const moveTo = (el, instant = false) => {
    const container = containerRef.current
    const bubble = bubbleRef.current
    if (!container || !bubble || !el) return
    const cRect = container.getBoundingClientRect()
    const eRect = el.getBoundingClientRect()
    if (instant) {
      gsap.set(bubble, {
        x: eRect.left - cRect.left,
        width: eRect.width,
      })
    } else {
      gsap.to(bubble, {
        x: eRect.left - cRect.left,
        width: eRect.width,
        duration: 0.28,
        ease: 'power2.out',
      })
    }
  }

  useLayoutEffect(() => {
    moveTo(getActiveEl(), true)
  }, [activeHref])

  useEffect(() => {
    const onResize = () => moveTo(getActiveEl(), true)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [activeHref])

  return (
    <nav
      ref={containerRef}
      className="pill-nav"
      aria-label="Primary navigation"
      onMouseLeave={() => moveTo(getActiveEl())}
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
            onMouseEnter={(e) => moveTo(e.currentTarget)}
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
