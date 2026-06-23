import { Link } from 'react-router-dom';
import cataractIcon from "../assets/icons/cataract.png";
import glaucomaIcon from "../assets/icons/glaucoma.png";
import lasikIcon from "../assets/icons/lasik.png";
import retinaIcon from "../assets/icons/diabetic-retinopathy.png";
import pediatricIcon from "../assets/icons/pedia.png";
import dryeyeIcon from "../assets/icons/eye.png";

const Services = () => {
  const serviceList = [
    {
      title: 'Advanced Cataract Surgery',
      desc: 'Micro-incision sutureless Phacoemulsification surgery with premium foldable Intraocular Lens (IOL) implantation for rapid recovery.',
      features: ['Sutureless & Suture-free', 'Topical Anesthesia (No injection)', 'Premium Monofocal & Multifocal IOLs'],
      icon: cataractIcon,
      link: '/cataract-surgery'
    },
    {
      title: 'Glaucoma Care & Management',
      desc: 'Early detection and comprehensive control of silent vision loss through computerized field tests, applanation tonometry, and laser treatments.',
      features: ['IOP (Eye Pressure) Monitoring', 'Visual Field Analysis (Perimetry)', 'Laser Peripheral Iridotomy (YAG)'],
      icon: glaucomaIcon,
      link: '/glaucoma-care'
    },
    {
      title: 'LASIK & Refractive Surgeries',
      desc: 'Modern surgical options for specs removal to achieve visual freedom. Safe, stitch-free procedures tailored for your unique eye anatomy.',
      features: ['Specs Removal consultation', 'Customized treatment plans', 'Blade-free & Safe procedures'],
      icon: lasikIcon,
      link: '/lasik-surgery'
    },
    {
      title: 'Diabetic Retina & Floaters Evaluation',
      desc: 'Screening for retinal changes caused by Diabetes and Hypertension. Specialized examination of vitreous floaters and age-related macular changes.',
      features: ['Fundus Examination', 'Diabetic Retinopathy screening', 'Laser Retinal Photocoagulation referrals'],
      icon: retinaIcon,
      link: '/diabetic-retina'
    },
    {
      title: 'Pediatric Eye Care & Squint',
      desc: 'Diagnosis of childhood refractive errors, lazy eye (amblyopia), and squint evaluation, ensuring your child has the best start in learning and play.',
      features: ['Child Vision Screening', 'Squint evaluation', 'Lazy Eye (Amblyopia) therapy'],
      icon: pediatricIcon,
      link: '/pediatric-eye-care'
    },
    {
      title: 'Dry Eye & Computer Vision Clinic',
      desc: 'Specialized diagnostic tests for chronic dry eyes and digital screen fatigue. Customized therapy with medical management and lifestyle adjustments.',
      features: ['Tear film analysis', 'Dry Eye counseling', 'Computer Vision Syndrome guidelines'],
      icon: dryeyeIcon,
      link: '/dry-eye-clinic'
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
              {service.link ? (
                <Link to={service.link} className="service-card-link">
                  <div className="service-icon-wrapper">
                    <img className="service-icon" src={service.icon} alt={service.title} />
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
                </Link>
              ) : (
                <>
                  <div className="service-icon-wrapper">
                    <img className="service-icon" src={service.icon} alt={service.title} />
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
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
