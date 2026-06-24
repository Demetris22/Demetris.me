import { useState } from 'react'
import { skillGroups } from '../data'
import { handleTabKeyDown } from '../lib/tabs'

function Skills() {
  const [activeSkillId, setActiveSkillId] = useState(skillGroups[0].id)
  const activeSkill =
    skillGroups.find((group) => group.id === activeSkillId) ?? skillGroups[0]

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Skills lab</p>
        <h2 id="skills-title">A stack that spans software and hardware.</h2>
        <p>
          Each group shows what I use, where it appears in my work, and what I am
          developing now.
        </p>
      </div>

      <div className="skills-lab">
        <div
          className="skill-selector"
          role="tablist"
          aria-label="Skill groups"
          aria-orientation="vertical"
          data-reveal
        >
          {skillGroups.map((group) => (
            <button
              className={`skill-button ${activeSkillId === group.id ? 'active' : ''}`}
              id={`skills-tab-${group.id}`}
              key={group.id}
              type="button"
              role="tab"
              aria-selected={activeSkillId === group.id}
              aria-controls={`skills-panel-${group.id}`}
              tabIndex={activeSkillId === group.id ? 0 : -1}
              onClick={() => setActiveSkillId(group.id)}
              onKeyDown={(event) =>
                handleTabKeyDown(
                  event,
                  skillGroups,
                  activeSkillId,
                  setActiveSkillId,
                  'skills'
                )
              }
            >
              <span>{group.label}</span>
              <small>{group.signal}</small>
            </button>
          ))}
        </div>
        <p className="interaction-status" role="status">
          Selected skill group: {activeSkill.label}
        </p>

        <div className="skill-panels" data-reveal>
          {skillGroups.map((group) => (
            <article
              className={`skill-panel ${activeSkillId === group.id ? 'is-active' : ''}`}
              id={`skills-panel-${group.id}`}
              role="tabpanel"
              aria-labelledby={`skills-tab-${group.id}`}
              tabIndex={0}
              data-glow
              hidden={activeSkillId !== group.id}
              key={group.id}
            >
              <div className="skill-panel-heading">
                <p className="panel-eyebrow">{group.signal}</p>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
              </div>

              <div className="skill-tags" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="skill-context">
                <div>
                  <h4>Where this shows up</h4>
                  <ul>
                    {group.context.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="skill-focus-card">
                  <h4>Current development focus</h4>
                  <p>{group.developmentFocus}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
