import { Link } from 'react-router-dom';
import lasikImg from "../assets/images/lasik.png";
import './LasikSurgery.css';

const LasikSurgery = () => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>LASIK — Laser Eye Surgery</h1>
      </div>

      <div className="detail-content">
        <section className="intro-section">
          <img src={lasikImg} alt="LASIK Surgery" className="intro-image" />
          <div className="intro-text">
            <p>
              LASIK is a type of refractive surgery. This kind of surgery uses a laser to treat vision problems caused by refractive errors, which are normally treated with prescription eyeglasses or contact lenses. You have a refractive error when your eye does not refract (bend) light properly.
            </p>
            <p>
              For you to see clearly, light rays must travel through your cornea and lens. The cornea and lens refract the light so it lands on the retina. The retina turns light into signals that travel to your brain and become images. With refractive errors, the shape of your cornea or lens keeps light from bending properly and focusing clearly on the retina. When light is not focused on the retina as it should be, your vision is blurry.
            </p>
            <p>
              With LASIK, your ophthalmologist uses a laser to change the shape of your cornea. This laser eye surgery improves the way light rays are focused on the retina. LASIK is used to treat myopia (nearsightedness), hyperopia (farsightedness) and astigmatism.
            </p>
            <p>
              The goal of LASIK is to correct your refractive error to improve your vision. LASIK eye surgery may reduce your need for eyeglasses or contact lenses. In some cases, it may even allow you to do without them completely.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>Who Is a Good Candidate for LASIK Surgery?</h2>
          <p>
            To have LASIK surgery, you need to meet certain requirements. Here are some of them:
          </p>
          <ul className="checklist">
            <li>You should be 18 years or older (ideally, over 21 years old, when vision is more likely to have stopped changing).</li>
            <li>Your eye prescription should not have changed much in the last year.</li>
            <li>Your refractive error must be one that can be treated with LASIK.</li>
            <li>Your corneas need to be thick enough and healthy, and your overall eye health must be generally good.</li>
            <li>You need to have realistic expectations about what LASIK can and cannot do for you.</li>
          </ul>

          <h3>Who Should Not Have LASIK</h3>
          <p>
            Some people are not candidates for LASIK. They include people with:
          </p>
          <ul className="checklist">
            <li>an unstable (changing) refractive error</li>
            <li>extreme levels of myopia, hyperopia or astigmatism</li>
            <li>severe dry eye</li>
            <li>corneas that are too thin</li>
            <li>corneal scars or disease</li>
            <li>keratoconus (cone-shaped cornea)</li>
            <li>advanced glaucoma</li>
            <li>a cataract affecting vision</li>
            <li>a history of having certain eye infections</li>
            <li>diabetes that is not controlled well</li>
          </ul>
          <p>
            Your ophthalmologist can talk with you about other conditions that may keep you from having LASIK.
          </p>

          <h3>How Candidacy is Determined</h3>
          <p>
            To determine whether you are a candidate for LASIK, your ophthalmologist will examine your eyes. Here is what will be done:
          </p>
          <ul className="checklist">
            <li>The overall health of your eyes will be checked.</li>
            <li>Measurements of your cornea will be taken.</li>
            <li>Your refractive error will be measured.</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>What to Expect With LASIK</h2>

          <div className="subsection">
            <h3>Before the Laser Eye Surgery</h3>
            <p>
              You and your ophthalmologist will discuss your vision needs based on your lifestyle.
            </p>
            <p>
              You and your ophthalmologist should also discuss your expectations for LASIK. People who have LASIK to achieve perfect vision without glasses or contacts run the risk of being disappointed. This laser eye surgery allows people to do most of their everyday tasks without corrective lenses. However, you might need to wear glasses for certain activities, such as reading or driving at night.
            </p>
            <p>
              Your ophthalmologist will thoroughly examine your eyes and make sure you are a candidate for LASIK. Here is what they will do:
            </p>
            <ul className="checklist">
              <li><strong>Test your vision:</strong> This is to make sure that your vision has not changed. It also shows how high your refractive error is and whether LASIK can be used to correct your vision.</li>
              <li><strong>Check for other eye problems:</strong> Your ophthalmologist will make sure that you do not have eye problems. This is because other problems could affect your surgery, or LASIK could make those other problems worse. For example, if you have dry eyes, they may be worse after LASIK.</li>
              <li><strong>Measure and map the surface of your cornea:</strong> Your ophthalmologist will check the thickness of your cornea and take precise measurements of the cornea's surface. Your eye surgeon uses these measurements to program the computer-based laser used during surgery.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>During LASIK</h3>
            <p>
              This laser eye surgery is done in an outpatient surgery center or your ophthalmologist's office. Your eye surgeon uses a laser to reshape your cornea. Here is what to expect:
            </p>
            <ul className="checklist">
              <li>Your eye will be numbed with eye drops.</li>
              <li>Your eye surgeon will place an eyelid holder on your eye to keep you from blinking. They will also place a suction ring on your eye to keep it from moving. You may feel pressure like a finger pressing firmly on your eyelid. At this point, your vision may go dim or black.</li>
              <li>Using either a device called a microkeratome or a laser, your ophthalmologist makes a paper-thin flap in the cornea tissue. Then they lift and fold the flap back.</li>
              <li>You will be asked to stare at a target light so that your eyes will not move. The ophthalmologist then reshapes your cornea using a laser. The laser is a special instrument that has been programmed with measurements for your eye.</li>
              <li>While your ophthalmologist is using the laser, you may hear a clicking sound. After reshaping the cornea, your ophthalmologist folds the flap back down into position and smooths the edges. The flap attaches on its own in 2 to 3 minutes, where it will heal in place.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>After LASIK</h3>
            <ul className="checklist">
              <li>Your ophthalmologist may place a see-through shield over your eye or ask you to wear a shield while sleeping for a few days. This is to help protect your eye while it heals.</li>
              <li>You should plan to go home and take a nap or just relax after the surgery.</li>
              <li>For a few hours, your eyes may feel scratchy or feel like they are burning. You will be given special eye drops to reduce dryness and help your eye heal.</li>
            </ul>
          </div>
        </section>

        <section className="info-section highlight">
          <h2>Vision After LASIK</h2>
          <p>
            About <strong>9 out of 10 people (90 percent)</strong> who have LASIK end up with vision between 20/20 and 20/40—without glasses or contact lenses.
          </p>
          <p>
            It is important to know that LASIK cannot correct presbyopia. This is the normal, age-related loss of close-up vision. With or without refractive surgery, almost everyone who has excellent distance vision will need reading glasses after around age 40.
          </p>
          <p>
            To help with presbyopia, some people have LASIK to get monovision. This means one eye is left slightly nearsighted and the other eye is adjusted for distance vision. The brain learns to adapt so that the nearsighted eye is used for close work, while the other eye sees distant objects. Monovision is not for everyone. To see if you are able to adapt to this correction, you may want to try monovision with contact lenses first.
          </p>
        </section>

        <section className="info-section">
          <h2>What Are the Risks of LASIK?</h2>
          <p>
            Like any surgery, LASIK carries risks of problems or complications you should consider.
          </p>
          <p>
            Some people have side effects after LASIK that usually go away over time. However, in rare cases, they may not go away. For example, almost everyone who has LASIK will have dry eyes and changing vision during the day. These symptoms usually fade within a month. For some people, though, they may take longer to disappear, or they may remain.
          </p>

          <h3>Common Side Effects</h3>
          <p>
            Other side effects, either temporary or permanent, could include:
          </p>
          <ul className="checklist">
            <li>eye pain or discomfort</li>
            <li>hazy, foggy or blurry vision</li>
            <li>scratchiness, dryness, and other symptoms of dry eye</li>
            <li>glare</li>
            <li>halos (rings), streaks, or starbursts around lights</li>
            <li>double vision</li>
            <li>decreased ability to see in low light</li>
            <li>light sensitivity</li>
            <li>small pink or red patches of blood on the white of the eye that go away over time</li>
          </ul>

          <h3>Rare Risks</h3>
          <p>
            Other rare risks include:
          </p>
          <ul className="checklist">
            <li>eye infection</li>
            <li>worse vision than before LASIK, even with glasses or contacts (called loss of best-corrected vision)</li>
            <li>blindness</li>
          </ul>

          <p>
            With LASIK, your vision may end up being under- or over-corrected. These problems often can be improved with glasses, contact lenses, or additional laser surgery.
          </p>
          <p>
            If you are happy wearing contacts or glasses, you may not want to have refractive surgery. Together, you and your ophthalmologist can weigh the risks and rewards of LASIK.
          </p>
        </section>

        <section className="info-section">
          <h2>How to Prepare for LASIK</h2>
          <p>
            Before choosing to have LASIK, it's important to do your homework to ensure you are a good candidate, understand the potential risks and benefits, and have realistic expectations about what your vision will be like after surgery and for years to come. To ensure the best possible outcome, be a well-prepared and informed patient by reviewing all information before you have LASIK. If you have any questions, be sure to discuss these with your ophthalmologist.
          </p>
          <p>
            It is important to keep a record of your pre-operation and post-operation eye information. Your ophthalmologist may need this information if you have other eye surgery later, such as cataract surgery. Keep this information for future use.
          </p>
        </section>

        <div className="cta-section">
          <Link to="/" className="cta-button">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default LasikSurgery;
