import { useState } from 'react'
import { emailAddress } from '../data'

function Contact() {
  const [copyStatus, setCopyStatus] = useState('')

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = emailAddress
        textarea.setAttribute('readonly', '')
        textarea.style.position = 'fixed'
        textarea.style.opacity = '0'
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }

      setCopyStatus('Copied!')
    } catch {
      setCopyStatus('Copy unavailable')
    }

    window.setTimeout(() => setCopyStatus(''), 1500)
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="contact-copy" data-reveal>
        <p className="eyebrow">Contact</p>
        <h2 id="contact-title">Let&apos;s connect.</h2>
        <p>Always glad to talk projects, internships, or feedback.</p>

        <div className="contact-availability">
          <span className="status-dot" aria-hidden="true" />
          Currently open to internships and collaboration.
        </div>
      </div>

      <div className="contact-links" aria-label="Contact links" data-reveal>
        <a href={`mailto:${emailAddress}`}>
          <span>Email</span>
          <strong>{emailAddress}</strong>
        </a>
        <a href="https://github.com/Demetris22" target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <strong>github.com/Demetris22</strong>
        </a>
        <a
          href="https://www.linkedin.com/in/demetris-demetriou-a59a0124a"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <strong>linkedin.com/in/demetris-demetriou</strong>
        </a>
        <a
          href="https://github.com/Demetris22/Demetris.me"
          target="_blank"
          rel="noreferrer"
        >
          <span>Portfolio repo</span>
          <strong>Demetris22/Demetris.me</strong>
        </a>
        <button
          className={`copy-email-button ${
            copyStatus === 'Copied!' ? 'copied' : ''
          }`}
          type="button"
          onClick={handleCopyEmail}
        >
          <span>Copy email</span>
          <strong aria-live="polite">{copyStatus || 'Copy to clipboard'}</strong>
        </button>
      </div>
    </section>
  )
}

export default Contact
