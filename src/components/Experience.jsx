import { useState } from 'react'
import { experienceItems } from '../data'
import { handleTabKeyDown } from '../lib/tabs'

function Experience() {
  const [activeExperienceId, setActiveExperienceId] = useState(
    experienceItems[0].id
  )
  const activeExperience =
    experienceItems.find((item) => item.id === activeExperienceId) ??
    experienceItems[0]

  return (
    <section
      className="experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Experience</p>
        <h2 id="experience-title">A practical engineering path in progress.</h2>
        <p>
          University, repair work, an internship, and self-directed projects —
          the path so far.
        </p>
      </div>

      <div className="experience-board">
        <div
          className="experience-tabs"
          role="tablist"
          aria-label="Experience areas"
          aria-orientation="vertical"
        >
          {experienceItems.map((item, index) => (
            <button
              className={`experience-tab ${
                activeExperienceId === item.id ? 'active' : ''
              }`}
              data-reveal
              style={{ '--reveal-delay': `${index * 90}ms` }}
              id={`experience-tab-${item.id}`}
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeExperienceId === item.id}
              aria-controls={`experience-panel-${item.id}`}
              tabIndex={activeExperienceId === item.id ? 0 : -1}
              onClick={() => {
                setActiveExperienceId(item.id)
                if (window.innerWidth <= 940) {
                  setTimeout(() => {
                    const el = document.querySelector('.experience-panels')
                    if (!el) return
                    const headerH = document.querySelector('.site-header')?.offsetHeight ?? 80
                    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH - 16, behavior: 'smooth' })
                  }, 50)
                }
              }}
              onKeyDown={(event) =>
                handleTabKeyDown(
                  event,
                  experienceItems,
                  activeExperienceId,
                  setActiveExperienceId,
                  'experience'
                )
              }
            >
              <span>{item.label}</span>
              <small>{item.status}</small>
            </button>
          ))}
        </div>
        <p className="interaction-status" role="status">
          Selected experience: {activeExperience.label}
        </p>

        <div className="experience-panels" data-reveal>
          {experienceItems.map((item) => (
            <article
              className={`experience-panel ${
                activeExperienceId === item.id ? 'is-active' : ''
              } ${item.id === 'ecommbx' ? 'experience-panel-compact' : ''}`}
              id={`experience-panel-${item.id}`}
              role="tabpanel"
              aria-labelledby={`experience-tab-${item.id}`}
              tabIndex={0}
              data-glow
              hidden={activeExperienceId !== item.id}
              key={item.id}
            >
              <p className="panel-eyebrow">{item.status}</p>
              <h3>{item.title}</h3>
              {('company' in item || 'institution' in item) && (
                <dl className="experience-meta" aria-label="Experience details">
                  <div>
                    <dt>{'institution' in item ? 'Institution' : 'Company'}</dt>
                    <dd>{item.institution ?? item.company}</dd>
                  </div>
                  <div>
                    <dt>Date</dt>
                    <dd>{item.date}</dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{item.location}</dd>
                  </div>
                </dl>
              )}
              <p>{item.description}</p>

              <div className="experience-content">
                <div>
                  <h4>What it adds</h4>
                  <ul>
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4>Related tools</h4>
                  <div className="experience-tools">
                    {item.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
