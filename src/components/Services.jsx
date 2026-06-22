import React from 'react';

const Services = () => {
  const serviceList = [
    {
      title: 'Advanced Cataract Surgery',
      desc: 'Micro-incision sutureless Phacoemulsification surgery with premium foldable Intraocular Lens (IOL) implantation for rapid recovery.',
      features: ['Sutureless & Suture-free', 'Topical Anesthesia (No injection)', 'Premium Monofocal & Multifocal IOLs'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      )
    },
    {
      title: 'Glaucoma Care & Management',
      desc: 'Early detection and comprehensive control of silent vision loss through computerized field tests, applanation tonometry, and laser treatments.',
      features: ['IOP (Eye Pressure) Monitoring', 'Visual Field Analysis (Perimetry)', 'Laser Peripheral Iridotomy (YAG)'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    {
      title: 'LASIK & Refractive Surgeries',
      desc: 'Modern surgical options for specs removal to achieve visual freedom. Safe, stitch-free procedures tailored for your unique eye anatomy.',
      features: ['Specs Removal consultation', 'Customized treatment plans', 'Blade-free & Safe procedures'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M4.5 16.5 12 12m7.5-4.5L12 12"/>
        </svg>
      )
    },
    {
      title: 'Diabetic Retina & Floaters Evaluation',
      desc: 'Screening for retinal changes caused by Diabetes and Hypertension. Specialized examination of vitreous floaters and age-related macular changes.',
      features: ['Fundus Examination', 'Diabetic Retinopathy screening', 'Laser Retinal Photocoagulation referrals'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      )
    },
    {
      title: 'Pediatric Eye Care & Squint',
      desc: 'Diagnosis of childhood refractive errors, lazy eye (amblyopia), and squint evaluation, ensuring your child has the best start in learning and play.',
      features: ['Child Vision Screening', 'Squint evaluation', 'Lazy Eye (Amblyopia) therapy'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      )
    },
    {
      title: 'Dry Eye & Computer Vision Clinic',
      desc: 'Specialized diagnostic tests for chronic dry eyes and digital screen fatigue. Customized therapy with medical management and lifestyle adjustments.',
      features: ['Tear film analysis', 'Dry Eye counseling', 'Computer Vision Syndrome guidelines'],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-13-7-13S5 10.7 5 15a7 7 0 0 0 7 7z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="section section-bg-soft">
      <div className="container">
        <div className="section-header">
          <span className="badge">Specialities</span>
          <h2>World-Class Treatments</h2>
          <p>We provide advanced eye diagnostic and surgical treatments using modern equipment for precise outcomes.</p>
        </div>

        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-features">
                {service.features.map((feat, idx) => (
                  <li key={idx}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
