import React from 'react';

const Stats = () => {
  const statsData = [
    {
      id: 1,
      value: '11+',
      label: 'Years Experience',
      desc: 'Dedicated Clinical Expertise',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7"/>
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
        </svg>
      )
    },
    {
      id: 2,
      value: 'Ex-AIIMS',
      label: 'Raipur practice',
      desc: 'Trained at Top-Tier Hospital',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          <path d="M22 2v20H2V2z" strokeWidth="1" strokeOpacity="0.2"/>
          <path d="M12 7v10M7 12h10"/>
        </svg>
      )
    },
    {
      id: 3,
      value: '15,000+',
      label: 'Patients Treated',
      desc: 'Trusted for Quality Vision Care',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      )
    },
    {
      id: 4,
      value: '5,000+',
      label: 'Eye Surgeries',
      desc: 'Successful Micro-incision Surgeries',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      )
    }
  ];

  return (
    <section id="stats" className="section stats">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div className="stat-card" key={stat.id}>
              <div className="stat-card-icon">
                {stat.icon}
              </div>
              <h3>{stat.value}</h3>
              <p style={{ fontWeight: '700', color: 'var(--primary-dark)', fontSize: '1rem', marginBottom: '4px' }}>
                {stat.label}
              </p>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
