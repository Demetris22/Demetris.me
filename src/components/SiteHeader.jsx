import { navItems } from '../data'

function SiteHeader({ activeSection, onSelectSection, theme, onToggleTheme }) {
  const toggleLabel =
    theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <header className="site-header">
      <a
        className="brand"
        href="#home"
        aria-label="Demetris Demetriou home"
        onClick={() => onSelectSection('home')}
      >
        <span className="brand-mark">DD</span>
        <span className="brand-copy">
          <strong>Demetris Demetriou</strong>
          <span>Computer Engineering Student</span>
        </span>
      </a>

      <div className="header-actions">
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const sectionId = item.href.slice(1)
            const linkClassName = [
              activeSection === sectionId ? 'active' : '',
              item.href === '#contact' ? 'nav-contact' : '',
            ]
              .filter(Boolean)
              .join(' ')

            return (
              <a
                className={linkClassName}
                key={item.href}
                href={item.href}
                aria-current={activeSection === sectionId ? 'page' : undefined}
                onClick={() => onSelectSection(sectionId)}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <button
          className="theme-toggle"
          type="button"
          onClick={onToggleTheme}
          aria-label={toggleLabel}
          title={toggleLabel}
        >
          {theme === 'dark' ? (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4.2" fill="currentColor" />
              <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="2.5" x2="12" y2="5" />
                <line x1="12" y1="19" x2="12" y2="21.5" />
                <line x1="2.5" y1="12" x2="5" y2="12" />
                <line x1="19" y1="12" x2="21.5" y2="12" />
                <line x1="5.1" y1="5.1" x2="6.9" y2="6.9" />
                <line x1="17.1" y1="17.1" x2="18.9" y2="18.9" />
                <line x1="5.1" y1="18.9" x2="6.9" y2="17.1" />
                <line x1="17.1" y1="6.9" x2="18.9" y2="5.1" />
              </g>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
                fill="currentColor"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  )
}

export default SiteHeader
