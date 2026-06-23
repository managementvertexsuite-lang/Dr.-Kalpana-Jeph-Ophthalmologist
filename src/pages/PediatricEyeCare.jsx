import { Link } from 'react-router-dom';
import pediatricIcon from "../assets/icons/pedia.png";
import './PediatricEyeCare.css';

const PediatricEyeCare = () => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Pediatric Eye Care & Squint Treatment</h1>
      </div>

      <div className="detail-content">
        <section className="intro-section">
          <img src={pediatricIcon} alt="Pediatric Eye Care Icon" className="intro-image" />
          <div className="intro-text">
            <p>
              We understand that children's vision plays a vital role in their overall development and quality of life. Our dedicated paediatric ophthalmology department specialises in diagnosing and treating eye conditions in children, ensuring they receive the best care tailored to their unique needs.
            </p>
            <p>
              From pediatric eye exams to advanced squint eye treatment in infants, we are committed to providing comprehensive and compassionate care to safeguard your child's vision.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>What is Paediatric Ophthalmology?</h2>
          <p>
            Paediatric ophthalmology is a specialised field of eye care that focuses on diagnosing and managing eye conditions in infants, children, and adolescents. A child's visual system develops rapidly in the early years, making regular check-ups and early interventions important for identifying and treating potential issues.
          </p>
          <p>
            Our expert paediatric and squint specialists are trained to handle various conditions, from refractive errors to complex eye disorders like squint. It's crucial to understand how to identify squint in infants early on.
          </p>
        </section>

        <section className="info-section">
          <h2>Understanding Squint and Its Impact</h2>

          <h3>What is a Squint?</h3>
          <p>
            A squint, medically known as strabismus, is a condition where the eyes are misaligned and do not work together to focus on the same point. This misalignment can result in one eye looking straight ahead while the other turns inward, outward, upward, or downward.
          </p>
          <p>
            Squint is more than a cosmetic concern; it can affect a child's vision development, depth perception, and overall confidence.
          </p>

          <h3>Types of Squint</h3>
          <ul className="checklist">
            <li><strong>Esotropia:</strong> Inward turning of the eye</li>
            <li><strong>Exotropia:</strong> Outward turning of the eye</li>
            <li><strong>Hypertropia:</strong> Upward deviation of the eye</li>
            <li><strong>Hypotropia:</strong> Downward deviation of the eye</li>
          </ul>
          <p>
            Early detection through a pediatric eye exam is essential to prevent long-term complications like amblyopia (lazy eye) or double vision.
          </p>
        </section>

        <section className="info-section">
          <h2>When Should You Consult a Paediatric Eye Doctor?</h2>
          <p>
            Parents should schedule a visit with a child's eye doctor if they notice any of the following signs:
          </p>
          <ul className="checklist">
            <li>Misaligned or crossed eyes</li>
            <li>Difficulty focusing on objects</li>
            <li>Excessive squinting or head tilting</li>
            <li>Frequent eye rubbing or blinking</li>
            <li>Poor hand-eye coordination</li>
            <li>Complaints of blurry vision or double vision</li>
          </ul>
          <p>
            Regular eye exams are recommended even if no symptoms are present, as some conditions may not show obvious signs in the early stages.
          </p>
        </section>

        <section className="info-section">
          <h2>Comprehensive Squint Eye Treatment</h2>
          <p>
            We offer a range of squint eye treatments designed to address the condition effectively based on the severity and the child's age:
          </p>

          <h3>Squint Eye Exercises</h3>
          <p>
            Our paediatric eye doctors often recommend squint eye exercises to strengthen the eye muscles and improve coordination for children with mild squint. These exercises are tailored to the child's specific needs and may include:
          </p>
          <ul className="checklist">
            <li><strong>Focus Shifting:</strong> Training the eyes to align by focusing on objects at different distances</li>
            <li><strong>Pencil Push-Ups:</strong> Strengthening eye muscles by following the movement of a pencil as it is brought closer to the nose</li>
            <li><strong>Fusion Exercises:</strong> Enhancing binocular vision by encouraging the eyes to work together</li>
          </ul>
          <p>
            These exercises are a non-invasive approach to managing squint and are most effective when combined with regular monitoring by our specialists.
          </p>

          <h3>Glasses and Patching</h3>
          <p>
            Refractive errors often contribute to squint. Prescription glasses can help correct vision and reduce strain on the eyes, thereby improving alignment. For some children, patching the stronger eye forces the weaker eye to work harder, improving its strength and functionality.
          </p>

          <h3>Advanced Squint Eye Surgery</h3>
          <p>
            In cases where non-surgical methods are insufficient, squint eye surgery may be required. Our highly skilled squint specialists perform surgeries to realign the eye muscles, ensuring proper alignment and coordination.
          </p>
          <ul className="checklist">
            <li><strong>Minimally Invasive Techniques:</strong> We employ advanced surgical methods that reduce recovery time and improve outcomes</li>
            <li><strong>Custom Treatment Plans:</strong> Each surgery is tailored to the child's unique condition, taking into account their age, type of squint, and overall eye health</li>
          </ul>
          <p>
            Post-surgery care is equally important, and our team provides comprehensive guidance for a smooth recovery and sustained results.
          </p>
        </section>

        <section className="info-section highlight">
          <h2>Paediatric Ophthalmology Beyond Squint</h2>
          <p>
            While squint eye treatment is an integral part of our services, we also address a wide range of other pediatric eye conditions:
          </p>
          <ul className="checklist">
            <li><strong>Amblyopia (Lazy Eye):</strong> Treated using methods like patching the stronger eye, corrective glasses, or vision therapy to encourage the weaker eye to work harder and improve its function</li>
            <li><strong>Congenital Cataracts:</strong> Cloudy lenses present at birth are removed through surgery to restore clear vision, ensuring proper visual development</li>
            <li><strong>Refractive Errors:</strong> Corrective glasses for conditions like myopia, hyperopia, or astigmatism help children achieve sharp, clear vision and avoid further strain</li>
            <li><strong>Eye Infections and Allergies:</strong> Conditions like conjunctivitis or seasonal allergies are managed effectively with targeted medications to reduce discomfort and prevent complications</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-box">
            <h3>Can watching TV cause squint in infants?</h3>
            <p>
              While excessive screen time can strain eyes, it does not directly cause squint. Squint is usually caused by muscle or nerve issues. However, limiting screen time is always recommended.
            </p>
          </div>

          <div className="faq-box">
            <h3>Effect of lying on side and squinting in infant?</h3>
            <p>
              Although lying on the side does not directly cause squint, it may lead to a child finding and maintaining an abnormal head posture in order to compensate for visual issues. This posture can become a habit, and a thorough eye exam is required.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>Why Choose Us for Paediatric Ophthalmology?</h2>

          <div className="feature-box">
            <h3>Expert Eye Specialists</h3>
            <p>
              Our team of paediatric ophthalmologists is highly trained in diagnosing and managing the full spectrum of childhood eye conditions. With years of experience, we provide accurate diagnoses and personalised treatments that prioritise your child's comfort and well-being.
            </p>
          </div>

          <div className="feature-box">
            <h3>Comprehensive Eye Exams</h3>
            <p>
              Early detection is key to preventing long-term vision problems. Our detailed eye exams evaluate every aspect of your child's vision, including refractive errors, alignment, and overall eye health. These exams help detect conditions like squint, lazy eye, and congenital cataracts.
            </p>
          </div>

          <div className="feature-box">
            <h3>Advanced Technology and Techniques</h3>
            <p>
              We use state-of-the-art diagnostic tools and treatment methods. From non-invasive therapies to cutting-edge squint eye surgery, we can address even the most complex cases.
            </p>
          </div>

          <div className="feature-box">
            <h3>Child-Friendly Environment</h3>
            <p>
              We create a welcoming and comfortable environment to make children feel at ease during their visits. Our specialists are skilled at communicating with young patients, ensuring they feel understood and supported throughout their treatment journey.
            </p>
          </div>
        </section>

        <div className="cta-section">
          <Link to="/" className="cta-button">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default PediatricEyeCare;
