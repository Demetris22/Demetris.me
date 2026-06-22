import { useState } from 'react'
import heroImage from './assets/hero.png'
import './App.css'

const profileHighlights = [
  'Computer Engineering student in Cyprus',
  'Building with React, JavaScript, C and C++',
  'Interested in the overlap between software, circuits and automation',
]

const workModes = [
  {
    id: 'web',
    label: 'Web apps',
    eyebrow: 'React interface',
    title: 'Turning ideas into usable tools',
    description:
      'I am building practical frontend projects with React, JavaScript, HTML and CSS. FinTrack can be presented as a private case study, even if the code is not public.',
    tools: ['React', 'JavaScript', 'HTML', 'CSS'],
    current: 'FinTrack private personal finance React project',
    next: 'Write a case study with features, design decisions and optional screenshots. No public repo required.',
  },
  {
    id: 'embedded',
    label: 'Embedded',
    eyebrow: 'Arduino systems',
    title: 'Connecting code to real-world behavior',
    description:
      'Embedded projects help me think like an engineer because every decision affects sensors, timing, wiring and physical results.',
    tools: ['Arduino', 'Sensors', 'Actuators', 'Automation'],
    current: 'Arduino garden watering prototype idea',
    next: 'Keep this as documentation-pending until there are photos, circuit notes or a working demo.',
  },
  {
    id: 'hardware',
    label: 'Hardware',
    eyebrow: 'Repair mindset',
    title: 'Debugging beyond the screen',
    description:
      'Electronics repair experience gives me a practical eye for faults, signals, components and careful troubleshooting.',
    tools: ['Diagnostics', 'PCB inspection', 'Soldering basics', 'Component checks'],
    current: 'Electronics repair and hardware support experience',
    next: 'Add an experience section with real responsibilities and tools used.',
  },
]

const skillGroups = [
  {
    id: 'languages',
    label: 'Languages',
    signal: 'Core logic',
    title: 'Programming languages',
    description:
      'Languages I use to understand both application logic and lower-level engineering problems.',
    skills: ['C', 'C++', 'JavaScript', 'Some C#'],
    context: [
      'University programming work',
      'Frontend logic in React projects',
      'Systems thinking from C and C++',
    ],
    nextStep: 'Keep strengthening data structures, debugging and clean program design.',
  },
  {
    id: 'frontend',
    label: 'Frontend',
    signal: 'Interface craft',
    title: 'Web development',
    description:
      'Tools I use to turn ideas into interfaces that feel structured, readable and useful.',
    skills: ['React', 'HTML', 'CSS', 'JavaScript'],
    context: [
      'This portfolio website',
      'FinTrack private React project',
      'Responsive layout and component structure',
    ],
    nextStep: 'Add project screenshots, richer UI states and better component reuse.',
  },
  {
    id: 'embedded',
    label: 'Embedded',
    signal: 'Physical systems',
    title: 'Arduino and embedded systems',
    description:
      'Practical hardware/software work where code controls sensors, actuators and real-world behavior.',
    skills: ['Arduino', 'Sensors', 'Actuators', 'Automation logic'],
    context: [
      'Arduino and embedded systems learning',
      'Planning sensor-based automation',
      'Understanding how code affects physical components',
    ],
    nextStep: 'Document circuit diagrams, components and the control logic clearly.',
  },
  {
    id: 'hardware',
    label: 'Hardware',
    signal: 'Troubleshooting',
    title: 'Electronics and repair',
    description:
      'Hands-on experience that helps me approach technical problems patiently and systematically.',
    skills: ['Diagnostics', 'Electronics repair', 'PCB inspection', 'Component checks'],
    context: [
      'Hardware support experience',
      'Fault-finding habits',
      'Careful inspection and testing',
    ],
    nextStep: 'Turn repair experience into a concise Experience section with responsibilities.',
  },
]

const projectCards = [
  {
    status: 'Private case study',
    title: 'FinTrack',
    type: 'React personal finance app',
    description:
      'A private React project for tracking personal finance ideas. Since the repo is not public, the portfolio can focus on the problem, interface decisions, features and lessons learned.',
    stack: ['React', 'JavaScript', 'CSS'],
    note: 'Good to show without a public GitHub link. Screenshots can be added later if you are comfortable sharing them.',
  },
  {
    status: 'Documentation pending',
    title: 'Garden watering automation',
    type: 'Arduino / embedded systems',
    description:
      'An embedded systems project idea around soil moisture, automation logic and controlled watering. For now, it should be framed as a prototype direction rather than a fully documented showcase.',
    stack: ['Arduino', 'Sensors', 'Automation'],
    note: 'Promote it as a showcase project only after you have a photo, circuit diagram, component list or demo notes.',
  },
]

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Workbench', href: '#workbench' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  const [activeMode, setActiveMode] = useState(workModes[0])
  const [activeSkill, setActiveSkill] = useState(skillGroups[0])

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Demetris Demetriou home">
          <span className="brand-mark">DD</span>
          <span className="brand-copy">
            <strong>Demetris Demetriou</strong>
            <span>Computer Engineering Student</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Computer Engineering student from Cyprus</p>
            <h1>Building practical software and hardware projects.</h1>
            <p className="hero-intro">
              I am Demetris, a young engineer/developer focused on React,
              embedded systems and electronics. This portfolio is becoming a
              polished home for my projects, experience and engineering journey.
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
            <div className="visual-card">
              <div className="visual-topline">
                <span>Portfolio v2</span>
                <span>Interactive</span>
              </div>
              <img src={heroImage} alt="Layered abstract technology graphic" />
              <div className="visual-note">
                <span className="status-dot" aria-hidden="true" />
                <p>Next brick: a profile section that behaves more like a workspace.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2 id="about-title">A builder learning both sides of engineering.</h2>
          </div>

          <div className="profile-layout">
            <div className="profile-card">
              <div className="photo-placeholder" aria-label="Future profile photo placeholder">
                <span>DD</span>
              </div>
              <div>
                <p className="profile-card-label">Photo slot</p>
                <p>
                  We can replace this with a real photo later. For now it keeps
                  the layout ready without forcing a random stock image.
                </p>
              </div>
            </div>

            <div className="about-copy">
              <p>
                I study Computer Engineering and I am interested in projects
                that combine clear software with practical hardware thinking.
                I want this site to show progress, curiosity and real work, not
                just a list of modules and technologies.
              </p>

              <ul className="highlight-list">
                {profileHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="workbench-section" id="workbench" aria-labelledby="workbench-title">
          <div className="section-heading">
            <p className="eyebrow">Interactive workbench</p>
            <h2 id="workbench-title">Choose a focus area.</h2>
            <p>
              Instead of scrolling through a plain CV, visitors can explore how
              your skills connect: web apps, embedded systems and hands-on
              hardware experience.
            </p>
          </div>

          <div className="workbench">
            <div className="mode-list" role="tablist" aria-label="Engineering focus areas">
              {workModes.map((mode) => (
                <button
                  className={`mode-button ${activeMode.id === mode.id ? 'active' : ''}`}
                  key={mode.id}
                  type="button"
                  role="tab"
                  aria-selected={activeMode.id === mode.id}
                  aria-controls="mode-panel"
                  onClick={() => setActiveMode(mode)}
                >
                  <span>{mode.label}</span>
                  <small>{mode.eyebrow}</small>
                </button>
              ))}
            </div>

            <article className="mode-panel" id="mode-panel" role="tabpanel">
              <p className="panel-eyebrow">{activeMode.eyebrow}</p>
              <h3>{activeMode.title}</h3>
              <p>{activeMode.description}</p>

              <div className="tool-cloud" aria-label={`${activeMode.label} tools`}>
                {activeMode.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>

              <div className="panel-footer">
                <div>
                  <span>Current example</span>
                  <strong>{activeMode.current}</strong>
                </div>
                <div>
                  <span>Next portfolio brick</span>
                  <strong>{activeMode.next}</strong>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="eyebrow">Skills lab</p>
            <h2 id="skills-title">A stack with software and hardware range.</h2>
            <p>
              The goal is to present your skills with context. Each group shows
              what you use, where it appears in your work and what you are
              improving next.
            </p>
          </div>

          <div className="skills-lab">
            <div className="skill-selector" role="tablist" aria-label="Skill groups">
              {skillGroups.map((group) => (
                <button
                  className={`skill-button ${activeSkill.id === group.id ? 'active' : ''}`}
                  key={group.id}
                  type="button"
                  role="tab"
                  aria-selected={activeSkill.id === group.id}
                  aria-controls="skill-panel"
                  onClick={() => setActiveSkill(group)}
                >
                  <span>{group.label}</span>
                  <small>{group.signal}</small>
                </button>
              ))}
            </div>

            <article className="skill-panel" id="skill-panel" role="tabpanel">
              <div className="skill-panel-heading">
                <p className="panel-eyebrow">{activeSkill.signal}</p>
                <h3>{activeSkill.title}</h3>
                <p>{activeSkill.description}</p>
              </div>

              <div className="skill-tags" aria-label={`${activeSkill.label} skills`}>
                {activeSkill.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>

              <div className="skill-context">
                <div>
                  <h4>Where this shows up</h4>
                  <ul>
                    {activeSkill.context.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="next-step-card">
                  <h4>Next improvement</h4>
                  <p>{activeSkill.nextStep}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-title">Show the work honestly.</h2>
            <p>
              Not every project needs a public repository. A strong portfolio can
              still explain what you built, what is private and what still needs
              documentation.
            </p>
          </div>

          <div className="project-grid">
            {projectCards.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-topline">
                  <span>{project.status}</span>
                  <small>{project.type}</small>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-stack" aria-label={`${project.title} stack`}>
                  {project.stack.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <div className="project-note">
                  <strong>How to present it:</strong>
                  <p>{project.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 id="contact-title">Ready for Experience and Contact polish.</h2>
          </div>
          <p>
            From here, we can add a practical Experience section and later
            improve the contact area with GitHub, LinkedIn and a direct email
            path.
          </p>
          <a className="button button-primary" href="mailto:demetris102933@gmail.com">
            Email Demetris
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>Designed and built by Demetris Demetriou.</p>
        <p>React + Vite portfolio foundation.</p>
      </footer>
    </div>
  )
}

export default App
