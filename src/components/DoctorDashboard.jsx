import React, { useState, useEffect } from 'react';

const DoctorDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  
  // Security
  const [passcode, setPasscode] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passError, setPassError] = useState('');

  // Filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const fetchAppointments = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await fetch('http://localhost:5000/api/appointments');
      const result = await response.json();
      if (response.ok && result.success) {
        setAppointments(result.data);
      } else {
        setErrorMsg(result.message || 'Failed to fetch appointments.');
      }
    } catch (err) {
      setErrorMsg('Failed to connect to backend server. Make sure node backend is running on port 5000.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isUnlocked) {
      fetchAppointments();
    }
  }, [isUnlocked]);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (passcode === 'clinic123') {
      setIsUnlocked(true);
      setPassError('');
    } else {
      setPassError('Invalid passcode. Hint: Use clinic123');
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const response = await fetch(`http://localhost:5000/api/appointments/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSuccessMsg(result.message);
        // Refresh local list
        setAppointments(prev => prev.map(app => app._id === id ? { ...app, status: newStatus } : app));
      } else {
        setErrorMsg(result.message || 'Status update failed.');
      }
    } catch (err) {
      setErrorMsg('Server connection failed. Could not update status.');
      console.error(err);
    }
  };

  // Filter & Search logic
  const filteredAppointments = appointments.filter(app => {
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          app.phone.includes(searchTerm) || 
                          app.service.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = activeFilter === 'all' || app.status === activeFilter;
    
    return matchesSearch && matchesFilter;
  });

  if (!isUnlocked) {
    return (
      <section className="section container">
        <div className="admin-card" style={{ maxWidth: '500px', margin: '40px auto' }}>
          <div className="unlock-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-dark)' }}>Doctor Dashboard Login</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Enter the clinic dashboard password to manage patient appointment bookings.
            </p>
            
            <form onSubmit={handleUnlock} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '10px' }}>
              {passError && (
                <div className="alert alert-error" style={{ fontSize: '0.85rem', padding: '8px 12px' }}>
                  {passError}
                </div>
              )}
              <div className="form-group" style={{ textAlign: 'left' }}>
                <label htmlFor="passcode" style={{ fontSize: '0.8rem', fontWeight: '600' }}>Clinic Passcode *</label>
                <input
                  type="password"
                  id="passcode"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter passcode (clinic123)"
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px', width: '100%' }}>
                Unlock Dashboard
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section container">
      <div className="admin-card">
        <div className="admin-header">
          <div className="admin-title-group">
            <h2>Appointments Manager</h2>
            <p>Focus Eye Care — Dr. Kalpana Jeph Clinic Portal</p>
          </div>
          <button onClick={fetchAppointments} className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '4px' }}>
              <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
            </svg>
            Refresh
          </button>
        </div>

        {successMsg && (
          <div className="alert alert-success" style={{ marginBottom: '20px' }}>
            {successMsg}
          </div>
        )}

        {errorMsg && (
          <div className="alert alert-error" style={{ marginBottom: '20px' }}>
            {errorMsg}
          </div>
        )}

        <div className="dashboard-controls">
          <input
            type="text"
            placeholder="Search by patient, phone or service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input search-input"
          />

          <div className="filter-btn-group">
            {['all', 'pending', 'approved', 'completed', 'cancelled'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
            Loading bookings...
          </div>
        ) : filteredAppointments.length === 0 ? (
          <div className="no-bookings">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-muted)', marginBottom: '12px' }}>
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <p>No appointments found matching your selection.</p>
          </div>
        ) : (
          <div className="table-wrapper">
            <table className="appointments-table">
              <thead>
                <tr>
                  <th>Patient Name</th>
                  <th>Contact info</th>
                  <th>Specialty</th>
                  <th>Date & Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((app) => (
                  <tr key={app._id}>
                    <td>
                      <div style={{ fontWeight: '700', color: 'var(--primary-dark)' }}>{app.name}</div>
                      {app.message && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontStyle: 'italic', marginTop: '4px' }}>
                          " {app.message} "
                        </div>
                      )}
                    </td>
                    <td>
                      <div>{app.phone}</div>
                      {app.email && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{app.email}</div>}
                    </td>
                    <td>
                      <span className="badge" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>{app.service}</span>
                    </td>
                    <td>
                      <div style={{ fontWeight: '600' }}>{app.date}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{app.timeSlot}</div>
                    </td>
                    <td>
                      <span className={`status-pill status-${app.status}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="actions-cell">
                      {app.status === 'pending' && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate(app._id, 'approved')}
                            className="action-btn-icon action-btn-approve"
                            title="Approve Booking"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(app._id, 'cancelled')}
                            className="action-btn-icon action-btn-cancel"
                            title="Cancel Booking"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"/>
                              <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                          </button>
                        </>
                      )}
                      {app.status === 'approved' && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate(app._id, 'completed')}
                            className="action-btn-icon action-btn-complete"
                            title="Complete Consultation"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                              <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                          </button>
                          <button
                            onClick={() => handleStatusUpdate(app._id, 'cancelled')}
                            className="action-btn-icon action-btn-cancel"
                            title="Cancel Booking"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="18" y1="6" x2="6" y2="18"/>
                              <line x1="6" y1="6" x2="18" y2="18"/>
                            </svg>
                          </button>
                        </>
                      )}
                      {(app.status === 'completed' || app.status === 'cancelled') && (
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', paddingLeft: '8px' }}>
                          Resolved
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default DoctorDashboard;
