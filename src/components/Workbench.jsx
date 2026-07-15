import { useState } from 'react'
import { workModes } from '../data'
import { handleTabKeyDown } from '../lib/tabs'

function Workbench() {
  const [activeModeId, setActiveModeId] = useState(workModes[0].id)
  const activeMode =
    workModes.find((mode) => mode.id === activeModeId) ?? workModes[0]

  return (
    <section
      className="workbench-section"
      id="workbench"
      aria-labelledby="workbench-title"
    >
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Interactive workbench</p>
        <h2 id="workbench-title">Three ways I build.</h2>
        <p>
          The same approach applied three ways: web, embedded, and hands-on
          hardware.
        </p>
      </div>

      <div className="workbench">
        <div
          className="mode-list"
          role="tablist"
          aria-label="Engineering focus areas"
          aria-orientation="vertical"
          data-reveal
        >
          {workModes.map((mode) => (
            <button
              className={`mode-button ${activeModeId === mode.id ? 'active' : ''}`}
              id={`workbench-tab-${mode.id}`}
              key={mode.id}
              type="button"
              role="tab"
              aria-selected={activeModeId === mode.id}
              aria-controls={`workbench-panel-${mode.id}`}
              tabIndex={activeModeId === mode.id ? 0 : -1}
              onClick={() => {
                setActiveModeId(mode.id)
                if (window.innerWidth <= 940) {
                  setTimeout(() => {
                    const el = document.querySelector('.mode-panels')
                    if (!el) return
                    const headerH = document.querySelector('.site-header')?.offsetHeight ?? 80
                    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - headerH - 16, behavior: 'smooth' })
                  }, 50)
                }
              }}
              onKeyDown={(event) =>
                handleTabKeyDown(
                  event,
                  workModes,
                  activeModeId,
                  setActiveModeId,
                  'workbench'
                )
              }
            >
              <span>{mode.label}</span>
              <small>{mode.eyebrow}</small>
            </button>
          ))}
        </div>
        <p className="interaction-status" role="status">
          Selected focus: {activeMode.label}
        </p>

        <div className="mode-panels" data-reveal>
          {workModes.map((mode) => (
            <article
              className={`mode-panel ${activeModeId === mode.id ? 'is-active' : ''}`}
              id={`workbench-panel-${mode.id}`}
              role="tabpanel"
              aria-labelledby={`workbench-tab-${mode.id}`}
              tabIndex={0}
              data-glow
              hidden={activeModeId !== mode.id}
              key={mode.id}
            >
              <p className="panel-eyebrow">{mode.eyebrow}</p>
              <h3>{mode.title}</h3>
              <p>{mode.description}</p>

              <div className="tool-cloud" aria-label={`${mode.label} tools`}>
                {mode.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="panel-footer">
                <div>
                  <span>Project example</span>
                  <strong>{mode.example}</strong>
                </div>
                <div>
                  <span>What this shows</span>
                  <strong>{mode.shows}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Workbench
