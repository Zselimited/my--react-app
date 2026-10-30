import heroPhoto from "./assets/hero-photo.jpg";

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h1>Learn Finance. Build Skills. Access Opportunities.</h1>

        <p>
          Akkant Academy helps students, graduates, professionals, and business
          owners build practical finance skills for the real world.
        </p>
        <p>
          We also connect qualified learners with relevant job and internship
          opportunities through our growing network of employers and businesses.
        </p>

        <div className="hero-buttons">
          <a href="#programmes" className="btn">Explore Our Programmes</a>
        </div>

        <p className="hero-tagline">
          Practical learning. Career-ready skills. Real opportunities.
        </p>
      </div>

      <div className="hero-photo">
        <img src={heroPhoto} alt="Smiling professional in an office" />
        <div className="hero-badge">
          <strong>Real opportunities</strong>
          <span>Employer network</span>
        </div>
      </div>
    </section>
  );
}