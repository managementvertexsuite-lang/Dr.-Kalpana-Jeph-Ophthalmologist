const Footer = ({ onAdminToggle, showAdmin }) => {
  const handleScroll = (id) => {
    if (showAdmin) {
      onAdminToggle(false);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <p>
              Under Dr. Kalpana Jeph (MBBS, MS, Ex-AIIMS Raipur), Focus Eye Care is committed to preserving and enhancing vision through advanced ophthalmic technology and surgical excellence in Durg, India.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>
              &copy; {new Date().getFullYear()} Focus Eye Care. All Rights Reserved.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="#about" className="footer-link-item" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}>
                  About Dr. Kalpana
                </a>
              </li>
              <li>
                <a href="#services" className="footer-link-item" onClick={(e) => { e.preventDefault(); handleScroll('services'); }}>
                  Services & Treatments
                </a>
              </li>
              <li>
                <a href="#stats" className="footer-link-item" onClick={(e) => { e.preventDefault(); handleScroll('stats'); }}>
                  Clinic Stats
                </a>
              </li>
              <li>
                <a href="#booking" className="footer-link-item" onClick={(e) => { e.preventDefault(); handleScroll('booking'); }}>
                  Book Appointment
                </a>
              </li>
              <li>
                <button
                  onClick={() => onAdminToggle(!showAdmin)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#cbd5e1',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    textAlign: 'left'
                  }}
                  className="footer-link-item"
                >
                  {showAdmin ? 'Patient Portal' : 'Doctor Admin Panel'}
                </button>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Clinic Hours</h3>
            <table className="timing-table">
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>09:00 AM - 08:00 PM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>09:00 AM - 08:00 PM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>09:00 AM - 08:00 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>09:00 AM - 08:00 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>09:00 AM - 08:00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>09:00 AM - 08:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td style={{ color: 'var(--error)' }}>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="footer-column">
            <h3>Find Our Clinic</h3>
            <div className="footer-map-placeholder">
              <div className="footer-map-overlay">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-white)' }}>
                  Focus Eye Care
                </div>
                <div style={{ fontSize: '0.75rem', marginTop: '2px' }}>
                  Durg, Chhattisgarh, India
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--secondary)',
                    textDecoration: 'underline',
                    display: 'inline-block',
                    marginTop: '8px'
                  }}
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            Dr. Kalpana Jeph | MBBS, MS (Ophthalmology) | Registration No. CGMC-9281
          </div>
          <div>
            Designed with clinical excellence in mind.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
