import { Link } from 'react-router-dom';
import cataractIcon from "../assets/icons/cataract.png";
import './CataractSurgery.css';

const CataractSurgery = () => {
  return (
    <div className="cataract-page">
      <div className="cataract-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Cataract Surgery</h1>
      </div>

      <div className="cataract-content">
        <section className="intro-section">
          <img src={cataractIcon} alt="Cataract Surgery Icon" className="intro-image" />
          <div className="intro-text">
            <h2>What is Cataract Surgery?</h2>
            <p>
              Cataract is the most widely known eye disease in which the natural crystalline lens inside the eye gets cloudy.
              This blocks the visual pathway that makes you lose your vision. Motiyabindoo mostly occurs in elderly patients;
              however, it can happen to children as well. If left untreated, it can lead to blindness.
            </p>
            <p>
              Luckily, this blindness causing eye disease is reversible. When hazy vision interferes with routine activities
              of your life, it is time to consult an eye specialist and undergo Motiyabindu operation. Further, it is essential
              to understand that delaying cataract surgery makes the patient prone to other complications in the eye like high
              eye pressure, optic disc damage, glaucoma, etc.
            </p>
            <p>
              At the right stage your eye doctor will advise and perform Cataract surgery. The entire process and the cataract
              surgery take less than 20-30 minutes. This means no need of night stay at the hospital.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>How you prepare for cataract surgery</h2>
          <ul className="checklist">
            <li>Cataract surgery requires some physical, emotional and mental preparation as well besides financial support. Hence, it is advisable to accompany with a family member or a close friend while consulting for cataract surgery. This can help you make the decision for the right type and right lens for the cataract surgery.</li>
            <li>Before undergoing cataract surgery, you will need to undergo fitness assessment by a physician to ensure that your body functions and common parameters like BP, Blood Sugar, ECG etc are well controlled</li>
            <li>Your eye care professional or your physician may recommend stopping certain medications before your surgery.</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Before cataract surgery</h2>
          <ul className="checklist">
            <li>Your eye specialist may advise you not to eat or drink for a few hours prior to your surgery.</li>
            <li>In order to lower the infection risks, antibiotic eye drops may be prescribed one day prior to your scheduled surgery day.</li>
            <li>Ensure your companion stays with you at the hospital on the day of the cataract surgery. This can be a mental support for you, they can assist in you some paper work and consent process and will ensure that you are able to go back home without any difficulty or logistics issue.</li>
          </ul>
        </section>

        <section className="info-section highlight">
          <h2>During the cataract surgery</h2>
          <p>
            Cataract surgery is a quick (outpatient) procedure, which means that you can go home the same day within an hour.
            The entire procedure from in to out of the hospital usually takes about two-three hours.
          </p>
        </section>

        <section className="info-section">
          <h2>After cataract surgery</h2>
          <ul className="checklist">
            <li>Use only the prescribed medications and follow the instructions. Do not use any other drugs, without confirming with the hospital.</li>
            <li>If you have pain, light sensitivity, watering or redness in the operated eye, report to your eye doctor immediately.</li>
            <li>Do not miss the follow up session.</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Eye care after cataract surgery</h2>
          <ul className="checklist">
            <li>Avoid touching hands to your eyes.</li>
            <li>Take bath below the neck every day and shave after 10 days.</li>
            <li>Place cotton in boiling water for ten minutes. After it cools down, squeeze the cotton and clean the eyelids and the corners of the operated eye with clean hands.</li>
            <li>Avoid dusty public places for at least 8 days after discharge.</li>
            <li>Protect your eyes with goggle for 2 weeks.</li>
            <li>Be careful when you are around children as they may get close to your eye.</li>
            <li>Do not lift heavy objects and do not strain to pass the motion. If constipated, consult the doctor.</li>
            <li>Refrain from reading or watching television for 1-2 days.</li>
            <li>Avoid sleeping on one side of your bed, especially on the operated eye for 2-3 days.</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Cataract surgery recovery</h2>
          <p>
            The <strong>recovery time</strong> for vision improvement is generally a few hours after cataract operation. However,
            patient is expected to observe some precaution for a few weeks. This is to avoid developing any side effects or
            complications after the surgery.
          </p>
        </section>

        <section className="info-section">
          <h2>Cataract surgery side effects</h2>
          <p>
            Although, Cataract surgery is safe with high success rate, it is very much like any other surgery. Hence, it carries
            its own share of side effects and complications.
          </p>
          <p>
            During the surgery, if the posterior lens capsule breaks and some parts of cloudy lens enters the vitreous body, which
            is behind the lens. Thus, there might be a need for another surgery. This will require longer time to complete the
            operation and might increase the usual recovery period.
          </p>
          <p>
            Sometimes, there might be bleeding inside the eye during the cataract operation.
          </p>
        </section>

        <section className="info-section">
          <h2>Complications & risks associated with cataract surgery</h2>
          <ul className="checklist">
            <li>Infection inside your eye</li>
            <li>Inflammation inside the eye</li>
            <li>Rise in eye pressure</li>
            <li>A brief clouding of the cornea</li>
            <li>Mild bruising or blackening of eye which usually occurs due to blood thinning drugs</li>
            <li>Retinal detachment</li>
            <li>Glaucoma</li>
            <li>Subluxation of intraocular lens meaning partial or complete dislocation of lens</li>
            <li>Ptosis or drooping of eyelids</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Eyeglasses After Cataract Surgery</h2>
          <p>
            Patients, who are comfortable with the idea of wearing spectacles after their cataract operation, can choose monofocal
            lens. These types of artificial lenses have one focal point as the name suggests i.e. near vision, distant or intermediate
            vision. However, now with all the latest advancements it is possible to have minimum dependence on glasses after the
            cataract surgery. Multifocal or trifocal lenses can go a long way in reducing the dependence on the glasses. It is a good
            idea to discuss the options of these advanced IOL's with your cataract surgeon and explore your suitability for them.
          </p>
          <p>
            There are some times when you have minor eye power after cataract surgery; you may need to wear eyeglasses.
          </p>
        </section>

        <section className="info-section highlight">
          <h3>About Cataract</h3>
          <p><strong>Over 20 lakh+ eyes treated</strong></p>
          <p>
            Cataracts are a common eye condition causing cloudiness in the lens, leading to blurred vision. We offer clear solutions.
          </p>
        </section>

        <section className="info-section">
          <h2>Cataract surgery procedures</h2>

          <div className="procedure">
            <h3>Phacoemulsification</h3>
            <p>
              A very tiny incision is made on the edge of the cornea and a thin probe is inserted inside the eye. Ultrasound waves
              are passed through this probe. These waves break up your cataract. The fragments are then suctioned out. Capsule of
              your lens is left behind to make a provision for the artificial lens placement.
            </p>
          </div>

          <div className="procedure">
            <h3>Extra-capsular Cataract Extraction (Manual Small Incision Cataract Surgery)</h3>
            <p>
              Your eye specialist will numb your eyes using a local anesthetic drops. This makes your eyes numb so that you don't
              feel the pain during the procedure.
            </p>
          </div>

          <div className="procedure">
            <h3>Laser Cataract Surgery</h3>
            <p>
              In this surgery, the cloudy lens is removed and is replaced with a new intraocular lens (IOLs) in the same capsule
              of the lens.
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

export default CataractSurgery;
