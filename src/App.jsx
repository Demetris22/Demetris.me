import { useEffect, useRef, useState } from 'react'
import { navItems } from './data'
import SiteHeader from './components/SiteHeader'
import Hero from './components/Hero'
import About from './components/About'
import Workbench from './components/Workbench'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SiteFooter from './components/SiteFooter'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined'
      ? document.documentElement.getAttribute('data-theme') || 'light'
      : 'light'
  )
  const scrollProgressRef = useRef(null)

  // Scroll progress bar, active-section (scroll-spy), and back-to-top visibility.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean)
    let scrollStateFrame = null

    const getActivationOffset = () => {
      const header = document.querySelector('.site-header')
      const sectionScrollMargin = Number.parseFloat(
        window.getComputedStyle(sections[0]).scrollMarginTop
      )
      const headerOffset = header ? header.getBoundingClientRect().height + 36 : 120
      const marginOffset = Number.isNaN(sectionScrollMargin)
        ? 120
        : sectionScrollMargin

      return Math.max(headerOffset, marginOffset)
    }

    const updateScrollState = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress =
        scrollableHeight > 0 ? Math.min((scrollTop / scrollableHeight) * 100, 100) : 0
      const markerPosition = scrollTop + getActivationOffset()
      let currentSection = sections[0]?.id ?? 'home'

      sections.forEach((section) => {
        if (section.offsetTop <= markerPosition) {
          currentSection = section.id
        }
      })

      const lastSection = sections[sections.length - 1]
      const isAtPageEnd =
        window.innerHeight + scrollTop >= document.documentElement.scrollHeight - 8
      const nextSection = isAtPageEnd && lastSection ? lastSection.id : currentSection

      if (scrollProgressRef.current) {
        scrollProgressRef.current.style.transform = `scaleX(${progress / 100})`
      }

      setShowBackToTop((isVisible) => {
        const shouldShow = progress > 8
        return isVisible === shouldShow ? isVisible : shouldShow
      })
      setActiveSection((currentSectionId) =>
        currentSectionId === nextSection ? currentSectionId : nextSection
      )
    }

    const requestScrollStateUpdate = () => {
      if (scrollStateFrame !== null) {
        return
      }

      scrollStateFrame = window.requestAnimationFrame(() => {
        scrollStateFrame = null
        updateScrollState()
      })
    }

    updateScrollState()
    window.addEventListener('scroll', requestScrollStateUpdate, { passive: true })
    window.addEventListener('resize', requestScrollStateUpdate)

    return () => {
      if (scrollStateFrame !== null) {
        window.cancelAnimationFrame(scrollStateFrame)
      }

      window.removeEventListener('scroll', requestScrollStateUpdate)
      window.removeEventListener('resize', requestScrollStateUpdate)
    }
  }, [])

  // Scroll-reveal: fade/slide elements in once, then leave them visible.
  // Falls back to showing everything if the observer is unavailable or motion
  // is reduced, so content is never stuck hidden.
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]')
    const revealAll = () => items.forEach((el) => el.classList.add('is-revealed'))
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealAll()
      return
    }
    const safetyTimer = window.setTimeout(revealAll, 2500)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
    )
    items.forEach((el) => observer.observe(el))
    return () => {
      window.clearTimeout(safetyTimer)
      observer.disconnect()
    }
  }, [])

  // Cursor glow: track the pointer inside panels/cards marked [data-glow].
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const glowEls = document.querySelectorAll('[data-glow]')
    const listeners = Array.from(glowEls).map((el) => {
      let rafId = null
      const handleMove = (event) => {
        if (rafId !== null) return
        rafId = window.requestAnimationFrame(() => {
          rafId = null
          const rect = el.getBoundingClientRect()
          el.style.setProperty(
            '--glow-x',
            `${(((event.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`
          )
          el.style.setProperty(
            '--glow-y',
            `${(((event.clientY - rect.top) / rect.height) * 100).toFixed(1)}%`
          )
        })
      }
      const handleLeave = () => {
        if (rafId !== null) {
          window.cancelAnimationFrame(rafId)
          rafId = null
        }
        el.style.removeProperty('--glow-x')
        el.style.removeProperty('--glow-y')
      }
      el.addEventListener('mousemove', handleMove, { passive: true })
      el.addEventListener('mouseleave', handleLeave)
      return { el, handleMove, handleLeave }
    })
    return () => {
      listeners.forEach(({ el, handleMove, handleLeave }) => {
        el.removeEventListener('mousemove', handleMove)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  // Measure the floating header and expose its height as --header-height so the
  // hero offset and section scroll-margins stay correct if the header resizes.
  useEffect(() => {
    const header = document.querySelector('.site-header')
    if (!header) {
      return
    }
    const applyHeaderHeight = () => {
      const height = Math.round(header.getBoundingClientRect().height)
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }
    applyHeaderHeight()

    let resizeObserver = null
    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(applyHeaderHeight)
      resizeObserver.observe(header)
    }
    window.addEventListener('resize', applyHeaderHeight)

    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect()
      }
      window.removeEventListener('resize', applyHeaderHeight)
    }
  }, [])

  // Persist + apply the theme.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem('theme', theme)
    } catch {
      /* storage may be unavailable (private mode); ignore */
    }
  }, [theme])

  // Subtle horizontal parallax on the big ghost watermark headings.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const headings = Array.from(document.querySelectorAll('.section-heading'))
    if (headings.length === 0) {
      return
    }
    let frame = null

    const update = () => {
      frame = null
      const viewportHeight = window.innerHeight
      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect()
        const rawProgress =
          (viewportHeight - rect.top) / (viewportHeight + rect.height)
        const progress = Math.min(Math.max(rawProgress, 0), 1)
        const shift = (progress - 0.5) * 52
        heading.style.setProperty('--ghost-shift', `${shift.toFixed(1)}px`)
      })
    }

    const requestUpdate = () => {
      if (frame !== null) {
        return
      }
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame)
      }
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="scroll-progress" aria-hidden="true">
        <span ref={scrollProgressRef} />
      </div>

      <SiteHeader
        activeSection={activeSection}
        onSelectSection={setActiveSection}
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
        }
      />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Workbench />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <SiteFooter />

      <a
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        href="#home"
        aria-label="Back to top"
        tabIndex={showBackToTop ? undefined : -1}
      >
        Top
      </a>
    </div>
  )
}

export default App
