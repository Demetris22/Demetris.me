import { useEffect, useState } from 'react'
import { heroFocusWords, heroStack } from '../data'

function Hero() {
  const [focusWordIndex, setFocusWordIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const intervalId = window.setInterval(() => {
      setFocusWordIndex((index) => (index + 1) % heroFocusWords.length)
    }, 2400)
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <section className="hero-section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Computer Engineering student from Cyprus</p>
        <h1>Building practical software and embedded systems.</h1>
        <p className="hero-intro">
          I'm Demetris — I build practical projects, from React interfaces to
          Arduino-based automation.
        </p>

        <p className="hero-rotator">
          <span className="hero-rotator-label">Currently exploring</span>
          <span className="hero-rotator-track" aria-hidden="true">
            <span className="hero-rotator-word" key={focusWordIndex}>
              {heroFocusWords[focusWordIndex]}
            </span>
          </span>
          <span className="sr-only">
            Currently exploring {heroFocusWords.join(', ')}.
          </span>
        </p>

        <div className="hero-actions" aria-label="Portfolio actions">
          <a className="button button-primary" href="#workbench">
            Open the workbench
          </a>
          <a className="button button-secondary" href="#about">
            About me
          </a>
        </div>

        <dl className="quick-stats" aria-label="Quick profile facts">
          <div>
            <dt>Location</dt>
            <dd>Cyprus</dd>
          </div>
          <div>
            <dt>Track</dt>
            <dd>Computer Engineering</dd>
          </div>
          <div>
            <dt>Building</dt>
            <dd>React + embedded projects</dd>
          </div>
        </dl>
      </div>

      <div className="hero-visual" aria-label="Portfolio preview">
        <div className="visual-card" data-glow>
          <div className="visual-topline">
            <span>Engineering toolkit</span>
            <span>Software + Hardware</span>
          </div>
          <ul
            className="visual-stack"
            aria-label="Software, hardware, and engineering skills"
          >
            {heroStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Hero
