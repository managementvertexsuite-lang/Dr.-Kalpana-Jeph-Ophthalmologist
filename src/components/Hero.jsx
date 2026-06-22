import React from 'react';

const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <div className="hero-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--secondary)' }}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Trusted Ophthalmologist & Eye Surgeon</span>
          </div>
          
          <h1 className="hero-title">
            Advanced Eye Care for <span>Clearer Vision</span>
          </h1>
          
          <p className="hero-tagline">
            Dr. Kalpana Jeph provides world-class diagnostic & surgical ophthalmology services. Specialized in advanced micro-incision cataract surgery, specs removal, and glaucoma management.
          </p>

          <div className="hero-credentials">
            <div className="credential-item">
              <div className="credential-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                </svg>
              </div>
              <div className="credential-text">
                <h4>MBBS, MS (Ophthalmology)</h4>
                <p>Postgraduate specialization in eye care</p>
              </div>
            </div>

            <div className="credential-item">
              <div className="credential-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                  <line x1="12" y1="8" x2="12" y2="16"/>
                  <line x1="8" y1="12" x2="16" y2="12"/>
                </svg>
              </div>
              <div className="credential-text">
                <h4>Ex-AIIMS Raipur</h4>
                <p>Trained & practiced at India's apex medical institute</p>
              </div>
            </div>

            <div className="credential-item">
              <div className="credential-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <div className="credential-text">
                <h4>Focus Eye Care, Durg</h4>
                <p>Modern diagnostics & patient-friendly care</p>
              </div>
            </div>

            <div className="credential-item">
              <div className="credential-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <div className="credential-text">
                <h4>11+ Years Experience</h4>
                <p>Proven excellence in critical eye procedures</p>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn btn-accent" onClick={() => handleScroll('booking')}>
              Book Consultation 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="btn btn-outline" onClick={() => handleScroll('services')}>
              View Services
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="doctor-img-container">
            <img 
              src="/dr-kalpana.jpg" 
              alt="Dr. Kalpana Jeph - Ophthalmologist" 
              className="doctor-img"
            />
          </div>
          
          <div className="experience-badge-floating">
            <span className="exp-num">11+</span>
            <span className="exp-text">Years<br/>Experience</span>
          </div>

          <div className="trust-badge-floating">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span>Ex-AIIMS Raipur</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
