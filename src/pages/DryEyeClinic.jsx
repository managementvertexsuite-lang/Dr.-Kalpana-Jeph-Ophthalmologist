import { Link } from 'react-router-dom';
import dryeyeImg from "../assets/images/dry-eye.jpeg";
import './DryEyeClinic.css';

const DryEyeClinic = () => {
  return (
    <div className="detail-page">
      <div className="detail-header">
        <Link to="/" className="back-link">← Back</Link>
        <h1>Dry Eye & Computer Vision Clinic</h1>
      </div>

      <div className="detail-content">
        <section className="intro-section">
          <img src={dryeyeImg} alt="Dry Eye Clinic" className="intro-image" />
          <div className="intro-text">
            <p>
              A continuous advancement in the digital world has led you to stay more connected to the world. This compels you to be glued to your screens, which is taking a toll on your eye health. While the technological revolution has added convenience and improved productivity in your lives, it has also attracted issues like Computer Vision Syndrome (CVS).
            </p>
            <p>
              If you invest significant time in front of screens, you are likely to experience the symptoms of this condition. To alleviate the computer vision syndrome symptoms, you must be aware of the causes and prevention tips. This can protect your precious vision from continuous digital strain and further damage.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>Understanding Computer Vision Syndrome</h2>
          <p>
            Computer Vision Syndrome or CVS is a modern eye condition characterised by a range of symptoms that occur after prolonged screen use. These symptoms can seem to be mild or severe, but they all share a common source: the digital devices we rely on daily.
          </p>

          <h3>Common Symptoms of CVS</h3>
          <ul className="checklist">
            <li><strong>Eye Strain:</strong> The most prevalent symptom, eye strain can bring discomfort, aching, or a tired feeling in your eyes</li>
            <li><strong>Headaches:</strong> Prolonged screen time often leads to tension headaches, especially if your screen is not at the correct eye level</li>
            <li><strong>Blurred Vision:</strong> Your eyes may struggle to focus correctly, causing blurred or double vision, which hampers your everyday chores</li>
            <li><strong>Dry Eyes:</strong> Reduced blinking when using screens can lead to dry and irritated eyes, as it dries the moisture within your eyes</li>
            <li><strong>Neck and Shoulder Pain:</strong> Poor posture while using digital devices can result in neck and shoulder discomfort</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>How Do You Get Computer Vision Syndrome?</h2>
          <p>
            In today's world, it's nearly impossible to avoid screens. Whether you are working on a computer, binge-watching your favourite series, or scrolling through your smartphone, you are continually exposed to digital devices. Here are some computer vision syndrome causes:
          </p>

          <h3>Primary CVS Causes</h3>
          <ul className="checklist">
            <li><strong>Excessive Screen Time:</strong> Spending long hours in front of digital screens, be it a computer, smartphone, or tablet, without regular breaks can strain your eyes</li>
            <li><strong>Improper Screen Distance:</strong> Maintaining screens too close to your eyes or at an improper angle can force your eyes to work harder</li>
            <li><strong>Poor Ergonomics:</strong> Inadequate workstation setup, including incorrect chair height or screen placement, can contribute to CVS</li>
            <li><strong>Uncorrected Vision Problems:</strong> If you have untreated refractive errors like nearsightedness or astigmatism, your eyes may work harder to focus on screens</li>
            <li><strong>Blue Light Exposure:</strong> Blue light emitted by your digital screens can disrupt your sleep patterns and potentially lead to Computer Vision Syndrome symptoms</li>
            <li><strong>Inadequate Lighting:</strong> Working under poorly lit workspaces can strain your eyes as you struggle to read text on screens</li>
          </ul>
        </section>

        <section className="info-section highlight">
          <h2>Doctor-Recommended Prevention Tips for CVS</h2>
          <p>
            To take care of your eyes, eye care specialists recommend tips that you can follow every day to prevent further complications. Here are expert-recommended strategies to overcome computer vision syndrome causes:
          </p>

          <h3>The 20-20-20 Rule</h3>
          <p>
            Follow this simple rule: every 20 minutes, take a 20-second break and look at random things at least 20 feet away. This reduces eye strain significantly.
          </p>

          <h3>Ergonomics Matters</h3>
          <p>
            Ensure your workspace has everything arranged ergonomically. Your screen should be at eye level, and your chair should provide adequate back support. Proper positioning can dramatically reduce strain and discomfort.
          </p>

          <h3>Adjust Screen Settings</h3>
          <ul className="checklist">
            <li>Increase text size for easier reading</li>
            <li>Adjust screen brightness to match your environment</li>
            <li>Use blue light filters to minimise eye strain</li>
          </ul>

          <h3>Blink Regularly</h3>
          <p>
            Remember to blink frequently to prevent dry eyes. Consider using lubricating eye drops if needed. Blinking helps distribute tears across the eye surface and prevents dryness.
          </p>

          <h3>Regular Eye Exams</h3>
          <p>
            Schedule regular eye exams with an ophthalmologist. They can diagnose any underlying vision problems and prescribe corrective lenses if necessary. Regular check-ups can catch issues before they become serious.
          </p>

          <h3>Take Breaks</h3>
          <p>
            Prioritise breaks between tasks, and use that time to stretch and relax your eyes. You can also practice eye exercises recommended by your eye care professional.
          </p>

          <h3>Reduce Blue Light Exposure</h3>
          <p>
            Use blue light filters on your screens or invest in blue light-blocking glasses, especially if you spend evenings on screens. This can help improve sleep quality and reduce eye strain.
          </p>

          <h3>Proper Lighting</h3>
          <p>
            Ensure your workspace and home have adequate, non-glaring lighting to improve visual clarity. Avoid glare from windows or overhead lights on your screen.
          </p>
        </section>

        <section className="info-section">
          <h2>Understanding Dry Eye</h2>

          <h3>What is Dry Eye?</h3>
          <p>
            Dry eye occurs when your eyes don't produce enough tears or when your tears aren't of good quality. Tears are essential for maintaining eye health and clear vision. When tear production is insufficient or tears evaporate too quickly, you experience dryness and discomfort.
          </p>

          <h3>Dry Eye Symptoms</h3>
          <ul className="checklist">
            <li>Stinging or burning sensation</li>
            <li>Excessive tearing (paradoxically)</li>
            <li>Blurred vision</li>
            <li>Foreign body sensation (feeling like something is in your eye)</li>
            <li>Redness and irritation</li>
            <li>Difficulty wearing contact lenses</li>
            <li>Discomfort in windy or dry environments</li>
          </ul>

          <h3>Dry Eye Treatment Options</h3>
          <ul className="checklist">
            <li><strong>Artificial Tears:</strong> Over-the-counter lubricating eye drops provide immediate relief</li>
            <li><strong>Tear Film Analysis:</strong> We perform specialized tests to assess your tear quality and quantity</li>
            <li><strong>Lifestyle Modifications:</strong> Increasing humidity, taking regular breaks, and improving workplace ergonomics</li>
            <li><strong>Prescription Medications:</strong> Anti-inflammatory drugs that help improve tear production</li>
            <li><strong>Dry Eye Counseling:</strong> Personalized guidance on managing your symptoms and protecting your eye health</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>Comprehensive Eye Care Services</h2>

          <div className="service-box">
            <h3>Tear Film Analysis</h3>
            <p>
              Our specialists perform comprehensive tear film analysis to understand the underlying cause of your dry eye. This helps us create targeted treatment plans specific to your condition.
            </p>
          </div>

          <div className="service-box">
            <h3>Dry Eye Counseling</h3>
            <p>
              We provide personalized counseling on managing dry eye symptoms, including environmental modifications, product recommendations, and lifestyle changes.
            </p>
          </div>

          <div className="service-box">
            <h3>Computer Vision Syndrome Guidelines</h3>
            <p>
              Our experts develop customized guidelines for managing CVS based on your work environment, daily screen time, and vision needs. These guidelines help you maintain comfortable vision throughout the day.
            </p>
          </div>
        </section>

        <section className="info-section">
          <h2>Key Takeaways</h2>
          <ul className="checklist">
            <li>Computer Vision Syndrome (CVS) is caused by prolonged screen-related activity and can result in eye strain, headaches, blurred vision, dry eyes, and neck pain</li>
            <li>Causes of CVS include: prolonged use of screens, distance from the screen, poor posture, uncorrected vision conditions, blue light exposure, and bad lighting</li>
            <li>The following preventative measures can be taken: follow the 20-20-20 rule, have proper ergonomics for workspaces, alter screens for comfort, blink eyes regularly</li>
            <li>Regular eye examinations are helpful in determining whether there are vision issues, and to consider whether corrective lenses are needed</li>
            <li>Use blue light filters, take breaks, and maintain good lighting to manage symptoms of CVS and promote healthy vision</li>
          </ul>
        </section>

        <section className="info-section">
          <h2>When to See an Eye Specialist</h2>
          <p>
            Despite all the precautions, if you experience persistent blurriness, difficulty focusing on objects clearly, chronic dry eyes, or other vision concerns, you should consult an eye specialist. Our clinic provides comprehensive evaluation and treatment options tailored to your specific needs.
          </p>
          <p>
            From minor to severe computer vision syndrome symptoms and dry eye conditions, our veteran experts analyse your eye condition carefully and provide effective care to help you maintain healthy, comfortable vision in our digital age.
          </p>
        </section>

        <div className="cta-section">
          <Link to="/" className="cta-button">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default DryEyeClinic;
