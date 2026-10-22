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
    </section>
  );
}