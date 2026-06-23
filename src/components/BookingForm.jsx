import { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const servicesList = [
    'Advanced Cataract Surgery',
    'Glaucoma Care & Management',
    'LASIK & Refractive Surgeries',
    'Diabetic Retina Evaluation',
    'Pediatric Eye Care & Squint',
    'Dry Eye / Computer Vision',
    'General Eye Consultation'
  ];

  const timeSlots = [
    'Morning: 09:00 AM - 12:00 PM',
    'Afternoon: 01:00 PM - 04:00 PM',
    'Evening: 05:00 PM - 08:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    // Client-side validations
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date || !formData.timeSlot || !formData.service) {
      setErrorMsg('Please fill in all required fields marked with *');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessMsg(result.message || 'Appointment booked successfully!');
        setFormData({
          name: '',
          phone: '',
          email: '',
          date: '',
          timeSlot: '',
          service: '',
          message: ''
        });
      } else {
        setErrorMsg(result.message || 'Something went wrong. Please check inputs.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to server. Please ensure the backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Get today's date formatted as YYYY-MM-DD for datepicker min attribute
  const getTodayDateString = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  };

  return (
    <section id="booking" className="section booking-section">
      <div className="container booking-grid">
        <div className="booking-info">
          <span className="badge" style={{ alignSelf: 'flex-start' }}>Appointments</span>
          <h2>Make an Appointment</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Schedule your visit with Dr. Kalpana Jeph at Focus Eye Care. We will confirm your requested slot upon review of schedule availability.
          </p>

          <div className="contact-cards">
            <div className="contact-card-item">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>Call Support (Toll-Free)</h4>
                <p>1800 121 1804</p>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>Direct Email</h4>
                <p>contact@focuseyecare.com</p>
              </div>
            </div>

            <div className="contact-card-item">
              <div className="contact-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div className="contact-card-details">
                <h4>Clinic Location</h4>
                <p>Durg, Chhattisgarh, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--primary-dark)' }}>Schedule Appointment</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Please fill in the form below. Required fields are marked with *
          </p>

          <form className="booking-form" onSubmit={handleSubmit}>
            {successMsg && (
              <div className="alert alert-success">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                {successMsg}
              </div>
            )}

            {errorMsg && (
              <div className="alert alert-error">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="8" x2="12" y2="12"/>
                  <line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                {errorMsg}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Patient Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter patient full name"
                className="form-input"
                required
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="phone">Mobile Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="date">Appointment Date *</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={getTodayDateString()}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="timeSlot">Preferred Time Slot *</label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">-- Choose Slot --</option>
                  {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Specialty / Service Required *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">-- Select Specialty --</option>
                {servicesList.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Any Specific Vision Concerns / Symptoms</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe details (e.g. blurry vision, dryness, specs check)"
                className="form-input form-textarea"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
              style={{ padding: '14px 20px', width: '100%', marginTop: '10px' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin" style={{ animation: 'spin 1s linear infinite', marginRight: '8px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25"/>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Processing...
                </>
              ) : (
                'Request Appointment'
              )}
            </button>
          </form>
        </div>
      </div>
      
      {/* Dynamic spinner animation defined in style tags for simplicity */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default BookingForm;
