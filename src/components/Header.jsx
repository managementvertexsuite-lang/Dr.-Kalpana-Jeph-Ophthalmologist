import { useState } from 'react';

const Header = ({ onAdminToggle, showAdmin }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    if (showAdmin) {
      onAdminToggle(false);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = () => {
    onAdminToggle(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src="/logo.png" alt="Focus Eye Care Logo" style={{ height: '75px', display: 'block', objectFit: 'contain' }} />
        </div>

        <nav className="nav">
          <a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Dr. Kalpana</a>
          <a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a>
          <a href="#stats" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('stats'); }}>Stats</a>
          <a href="#booking" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }}>Book Appointment</a>
          <button
            onClick={() => onAdminToggle(!showAdmin)}
            className="nav-link"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: showAdmin ? 'var(--accent)' : 'var(--text-main)'
            }}
          >
            {showAdmin ? 'Patient Site' : 'Doctor Panel'}
          </button>

          <button
            className="btn btn-primary"
            onClick={() => handleNavClick('booking')}
            style={{ padding: '8px 20px', fontSize: '0.9rem' }}
          >
            Book Appointment
          </button>
        </nav>

        <button className="mobile-menu-btn" onClick={toggleMobile}>
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Menu Drawer */}
      {mobileOpen && (
        <div style={{
          backgroundColor: 'var(--bg-section)',
          borderBottom: '1px solid var(--border-color)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          animation: 'fadeInUp 0.3s ease-out'
        }}>
          <a href="#about" style={{ fontWeight: '600', padding: '6px 0' }} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>About Dr. Kalpana</a>
          <a href="#services" style={{ fontWeight: '600', padding: '6px 0' }} onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>Services</a>
          <a href="#stats" style={{ fontWeight: '600', padding: '6px 0' }} onClick={(e) => { e.preventDefault(); handleNavClick('stats'); }}>Stats</a>
          <a href="#booking" style={{ fontWeight: '600', padding: '6px 0' }} onClick={(e) => { e.preventDefault(); handleNavClick('booking'); }}>Book Appointment</a>
          <button
            onClick={() => { onAdminToggle(!showAdmin); setMobileOpen(false); }}
            style={{
              fontWeight: '600',
              padding: '6px 0',
              textAlign: 'left',
              background: 'none',
              border: 'none',
              color: showAdmin ? 'var(--accent)' : 'inherit'
            }}
          >
            {showAdmin ? 'Go to Patient Site' : 'Go to Doctor Panel'}
          </button>
          <button
            className="btn btn-primary"
            onClick={() => handleNavClick('booking')}
            style={{ width: '100%' }}
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
