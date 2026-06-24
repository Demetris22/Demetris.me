function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">About me</p>
        <h2 id="about-title">A student who learns by building.</h2>
      </div>

      <div className="profile-layout">
        <div className="profile-card" data-reveal data-glow>
          <div className="photo-placeholder">
            <img
              src="/profile.jpg"
              alt="Demetris Demetriou"
              width="640"
              height="640"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <p className="profile-card-label">Profile snapshot</p>
            <p>Computer Engineering student, based in Cyprus.</p>
          </div>
        </div>

        <div className="about-copy" data-reveal>
          <p>
            I study Computer Engineering and learn best by building — taking
            ideas from class and turning them into projects I can actually run
            and debug.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
