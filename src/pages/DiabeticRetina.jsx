import { Link } from 'react-router-dom';
import retinaIcon from "../assets/icons/diabetic-retinopathy.png";
import './DiabeticRetina.css';

const DiabeticRetina = () => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Diabetic Retinopathy & Floaters Evaluation</h1>
      </div>

      <div className="detail-content">
        <section className="intro-section">
          <img src={retinaIcon} alt="Diabetic Retinopathy Icon" className="intro-image" />
          <div className="intro-text">
            <p>
              While not everyone with diabetes will develop diabetes-related retinopathy, it's still a major risk factor for vision loss. But diabetes and diabetes-related retinopathy are both manageable. Combining regular medical care and your own efforts can go a long way to maintaining your vision.
            </p>
            <p>
              Diabetes-related retinopathy is an eye disease that weakens the blood vessels in your retinas. The weakened blood vessels damage your retina. That can cause vision loss and even permanent blindness when the damage becomes severe enough.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>What Is Diabetes-Related Retinopathy?</h2>
          <p>
            Not everyone with diabetes develops retinopathy. And there are several things you can do to help delay developing it. And even if you do develop it, there are ways to slow it and limit its severity.
          </p>

          <h3>Stages of Diabetes-Related Retinopathy</h3>
          <p>
            There are two stages of diabetes-related retinopathy:
          </p>
          <div className="stage-box">
            <h4>Nonproliferative Diabetes-Related Retinopathy (NPDR)</h4>
            <p>
              During this earlier stage of diabetes-related retinopathy, blood vessels leak into your retina. The damage to the blood vessels eventually makes them close off as your body tries to fix the damage.
            </p>
          </div>
          <div className="stage-box">
            <h4>Proliferative Diabetes-Related Retinopathy (PDR)</h4>
            <p>
              Diabetes-related retinopathy gets worse over time. As it progresses, new blood vessels start to form to increase blood flow to undersupplied areas. But these vessels can leak blood and fluid into the vitreous, a gel-like liquid inside your eye. These blood vessels grow on the surface of your retina. Over time, the gel-like liquid can stick to these vessels and make them detach your retina, which can lead to blindness.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>Symptoms and Causes</h2>

          <h3>Symptoms of Diabetes-Related Retinopathy</h3>
          <p>
            You might not have symptoms in the early stages of diabetes-related retinopathy. That's because this condition doesn't start causing vision changes until the damage is more severe or widespread throughout your retina.
          </p>
          <p>
            Diabetes-related retinopathy symptoms can include:
          </p>
          <ul className="checklist">
            <li>Blurred or distorted vision</li>
            <li>New color blindness or color vision changes (like colors looking faded or less vivid)</li>
            <li>Night blindness (nyctalopia)</li>
            <li>Eye floaters (myodesopsias) or streaks in your vision</li>
            <li>Blind spots (scotomas)</li>
            <li>Visual field defects</li>
            <li>Low vision and vision loss</li>
          </ul>

          <h3>Causes and Risk Factors</h3>
          <p>
            Diabetes-related retinopathy can happen because of multiple types of diabetes, including Type 1, Type 2, Type 3c, and gestational diabetes.
          </p>
          <p>
            Diabetes causes increased blood sugar levels and can damage the insides of blood vessels throughout your body over time. When you have diabetes-related retinopathy, damaged blood vessels in your retina are trying to repair and reroute to avoid an interruption in blood supply. As a result, fragile new blood vessels grow on the surface of your retina.
          </p>

          <h3>Risk Factors Include:</h3>
          <ul className="checklist">
            <li>Difficult-to-manage diabetes</li>
            <li>High blood pressure (hypertension)</li>
            <li>High cholesterol (hyperlipidemia)</li>
            <li>Heart-specific cardiovascular diseases, like heart disease and coronary artery disease</li>
            <li>Chronic kidney disease and kidney failure</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Complications of Diabetes-Related Retinopathy</h2>
          <ul className="checklist">
            <li>Diabetes-related macular edema</li>
            <li>Retinal detachments</li>
            <li>Vitreous hemorrhage</li>
            <li>Glaucoma</li>
            <li>Macular ischemia (loss of blood flow to the part of the retina responsible for color and sharp vision)</li>
          </ul>
          <p>
            Eventually, complications of diabetes-related retinopathy can cause so much damage that the light-detecting cells, known as photoreceptors, stop working correctly. When that happens to enough photoreceptors, it causes permanent vision loss and can eventually lead to blindness.
          </p>
        </section>

        <section className="info-section">
          <h2>Diagnosis and Tests</h2>
          <p>
            Many of the key changes that happen with diabetes-related retinopathy don't cause symptoms until much later. But they're still visible very early on to an eye care specialist who looks at the back of your eyes using special instruments during a dilated eye exam.
          </p>
          <p>
            Those changes can include:
          </p>
          <ul className="checklist">
            <li>Cotton wool spots</li>
            <li>Retinal hemorrhages (bleeding)</li>
            <li>Microaneurysms (small blood vessels that bulge and burst)</li>
            <li>Neovascularization of the eye</li>
            <li>Macular edema</li>
            <li>Retinal exudates (lipid deposits)</li>
            <li>Abnormal-looking retinal blood vessels</li>
            <li>Vitreous hemorrhage (bleeding into the gel-like fluid)</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Management and Treatment</h2>
          <p>
            Diabetes-related retinopathy is treatable but not curable. Some of the symptoms or retinal changes are treatable. But certain types of damage aren't reversible once they become severe enough.
          </p>

          <h3>Managing Your Diabetes</h3>
          <p>
            Research clearly ties higher blood sugar and hemoglobin A1C levels to diabetes-related retinopathy. So, managing your blood sugar — keeping it lower and more consistent — is critical to delaying and slowing how diabetes-related retinopathy progresses and affects your retinas.
          </p>
          <h4>Key parts of managing your diabetes include:</h4>
          <ul className="checklist">
            <li>Monitoring your blood sugar with blood glucose testing methods or continuous glucose monitoring devices</li>
            <li>Managing what you eat to directly affect your blood sugar and A1C</li>
            <li>Taking prescribed medications as directed by your healthcare provider</li>
            <li>Getting regular physical exams (check-ups) to monitor your general health</li>
            <li>Keeping up with regular eye exams as recommended</li>
            <li>Reaching and maintaining a healthy weight</li>
          </ul>

          <h3>Eye Treatments</h3>
          <p>
            Eye treatments focus on managing vision and eye symptoms and limiting or slowing retinal damage. Some specific treatments for diabetes-related retinopathy include:
          </p>
          <ul className="checklist">
            <li><strong>Medications:</strong> Examples include anti-vascular endothelial growth factor (anti-VEGF) drugs or corticosteroids</li>
            <li><strong>Laser Surgery:</strong> During procedures like laser photocoagulation, specialists use a laser to treat your retina to prevent blood vessel growth, shrink abnormal vessels or stop leaking</li>
            <li><strong>Eye Surgeries:</strong> A vitrectomy may be recommended if your retina is detached, if you have vitreous hemorrhage that won't clear, or have certain other types of retina damage</li>
          </ul>
        </section>

        <section className="info-section highlight">
          <h2>Outlook and Prevention</h2>
          <p>
            Diabetes-related retinopathy is a permanent, lifelong condition. There isn't a cure, but you can take steps to manage it and limit loss of vision.
          </p>
          <p>
            Yes, managing your blood sugar levels and maintaining a low hemoglobin A1C can help you prevent diabetes-related retinopathy. Doing these can also make retinopathy regress over time.
          </p>
          <p>
            Not everyone with diabetes has it, but the odds of developing diabetes-related retinopathy are significantly higher in people with unmanaged blood sugar levels and in people who have diabetes over a longer period of time.
          </p>
          <p>
            With early diagnosis and timely treatment, you may be able to prevent vision loss and delay diabetes-related retinopathy progression. Eye exams can catch early signs of diabetes-related retinopathy long before you have symptoms.
          </p>
        </section>

        <section className="info-section">
          <h2>When to See Your Healthcare Provider</h2>
          <p>
            If you have diabetes or diabetes-related retinopathy, it's crucial that you see an eye care specialist regularly. They'll recommend a schedule for regular follow-up visits, which can make a big difference when it comes to catching more serious changes before they're severe or permanent.
          </p>
          <h3>Gradual Vision Changes</h3>
          <p>
            You should call or see your provider if you notice any gradual vision changes like:
          </p>
          <ul className="checklist">
            <li>Vision loss or trouble seeing as well as you used to</li>
            <li>Blurred or distorted vision</li>
            <li>Areas in your vision that look dim, faded or different from how you saw before</li>
          </ul>
          <h3>Sudden Vision Changes</h3>
          <p>
            You should go to the nearest hospital or emergency room if you have SUDDEN vision changes like:
          </p>
          <ul className="checklist">
            <li>Severe eye pain</li>
            <li>Complete loss of vision or severe loss of vision</li>
          </ul>
        </section>

        <div className="cta-section">
          <Link to="/" className="cta-button">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default DiabeticRetina;
