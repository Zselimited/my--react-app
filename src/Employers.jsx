import employersPhoto from "./assets/employers-photo.jpg";

const roles = [
  "Accounting internships",
  "Graduate trainee roles",
  "Junior accountant positions",
  "Bookkeeping roles",
  "Finance assistant roles",
  "Tax and compliance roles",
];

export default function Employers() {
  return (
    <section id="employers" className="section">
      <div className="split">
        <div className="split-text">
          <p className="section-label">For Employers</p>
          <h2>Looking for Finance Talent?</h2>

          <p>
            Akkant Academy helps businesses identify practical, career-ready
            accounting and finance talent.
          </p>
          <p>
            Our learners are exposed to real-world accounting processes and can be
            assessed for opportunities including:
          </p>

          <ul className="support-list">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <a href="#contact" className="btn">Hire From Akkant Academy</a>
        </div>

        <div className="split-photo photo-right">
          <img src={employersPhoto} alt="Young professional celebrating with a laptop" />
        </div>
      </div>
    </section>
  );
}