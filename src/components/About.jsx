import { profileHighlights } from '../data'

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">About me</p>
        <h2 id="about-title">A builder learning both sides of engineering.</h2>
      </div>

      <div className="profile-layout">
        <div className="profile-card" data-reveal data-glow>
          <div
            className="photo-placeholder"
            aria-label="Future profile photo placeholder"
          >
            <span>DD</span>
          </div>
          <div>
            <p className="profile-card-label">Profile snapshot</p>
            <p>
              Computer Engineering student in Cyprus with a practical interest
              in software, embedded systems, and electronics.
            </p>
          </div>
        </div>

        <div className="about-copy" data-reveal>
          <p>
            I study Computer Engineering and build projects that connect
            software, electronics, and real-world problem solving. Right now, I
            am developing my React skills while keeping a strong interest in
            embedded systems, circuits, and practical hardware work.
          </p>

          <ul className="highlight-list">
            {profileHighlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
