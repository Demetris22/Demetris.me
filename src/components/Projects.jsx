import { useState } from 'react'
import { projectCards } from '../data'
import { handleTabKeyDown } from '../lib/tabs'
import GitHubFeed from './GitHubFeed'

function Projects() {
  const [activeProjectId, setActiveProjectId] = useState(projectCards[0].id)
  const activeProject =
    projectCards.find((project) => project.id === activeProjectId) ??
    projectCards[0]

  return (
    <section
      className="projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Projects</p>
        <h2 id="projects-title">Show the work honestly.</h2>
        <p>Some public, some private, some still being documented.</p>
      </div>

      <div className="project-showcase">
        <div
          className="project-grid"
          role="tablist"
          aria-label="Project case studies"
          aria-orientation="vertical"
          data-reveal
        >
          {projectCards.map((project) => (
            <button
              className={`project-card ${activeProjectId === project.id ? 'active' : ''}`}
              data-project-card={project.id}
              data-glow
              id={`projects-tab-${project.id}`}
              key={project.id}
              type="button"
              role="tab"
              aria-selected={activeProjectId === project.id}
              aria-controls={`projects-panel-${project.id}`}
              tabIndex={activeProjectId === project.id ? 0 : -1}
              onClick={() => {
                setActiveProjectId(project.id)
                if (window.innerWidth <= 940) {
                  setTimeout(() => {
                    const el = document.querySelector('.project-detail-panels')
                    if (!el) return
                    const headerH = document.querySelector('.site-header')?.offsetHeight ?? 80
                    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH - 16, behavior: 'smooth' })
                  }, 50)
                }
              }}
              onKeyDown={(event) =>
                handleTabKeyDown(
                  event,
                  projectCards,
                  activeProjectId,
                  setActiveProjectId,
                  'projects'
                )
              }
            >
              <span className="project-card-topline">
                <span>{project.status}</span>
                <small>{project.type}</small>
              </span>
              <span className="project-card-title">{project.title}</span>
              <span className="project-card-description">
                {project.description}
              </span>

              <span className="project-stack" aria-label={`${project.title} stack`}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </span>
              <span className="project-card-footer">
                <span className="project-card-action">View details</span>
                {project.liveUrl && (
                  <span className="project-card-live" aria-label="Live demo available">Live</span>
                )}
              </span>
            </button>
          ))}
        </div>
        <p className="interaction-status" role="status">
          Selected project: {activeProject.title}
        </p>

        <div className="project-detail-panels" data-reveal>
          {projectCards.map((project) => (
            <article
              className={`project-detail-panel ${
                activeProjectId === project.id ? 'is-active' : ''
              }`}
              id={`projects-panel-${project.id}`}
              role="tabpanel"
              aria-labelledby={`projects-tab-${project.id}`}
              tabIndex={0}
              data-glow
              hidden={activeProjectId !== project.id}
              key={project.id}
            >
              <p className="panel-eyebrow">{project.status}</p>
              <div className="panel-title-row">
                <h3>{project.title}</h3>
                {project.liveUrl && (
                  <a
                    className="panel-live-badge"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                  >Live</a>
                )}
              </div>
              <p>{project.description}</p>

              <div
                className="project-detail-stack"
                aria-label={`${project.title} tech stack`}
              >
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div
                className="project-status-row"
                aria-label={`${project.title} project status`}
              >
                {project.availability.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="project-detail-grid">
                <div>
                  <h4>What it demonstrates</h4>
                  <ul>
                    {project.demonstrates.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-note">
                  <strong>Progress</strong>
                  <p>{project.note}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <GitHubFeed />
    </section>
  )
}

export default Projects
