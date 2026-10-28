import aboutPhoto from "./assets/about-photo.jpg";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="split">
        <div className="split-text">
          <p className="section-label">Who We Are</p>
          <h2>From Learning to Opportunity</h2>

          <p>
            Akkant Academy bridges the gap between what people learn and what
            employers expect.
          </p>
          <p>
            Our programmes combine practical accounting and finance training with
            career development support, helping learners build the skills,
            confidence, and experience needed to succeed at work.
          </p>
          <p>
            For suitable candidates, we also provide access to job, internship, and
            entry-level opportunities through our employer and business network.
          </p>
        </div>

        <div className="split-photo">
          <img src={aboutPhoto} alt="Colleagues learning together around a laptop" />
        </div>
      </div>
    </section>
  );
}