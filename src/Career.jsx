const supports = [
  "CV and LinkedIn preparation",
  "Interview readiness",
  "Practical workplace assessments",
  "Internship opportunities",
  "Entry-level accounting and finance roles",
  "Employer referrals",
  "Job matching for suitable candidates",
];

export default function Career() {
  return (
    <section id="career" className="section">
      <p className="section-label">Career &amp; Job Matching</p>
      <h2>Learn. Get Ready. Get Connected.</h2>

      <p>We believe training should create a pathway to opportunity.</p>
      <p>Beyond the classroom, Akkant Academy supports learners with:</p>

      <ul className="support-list">
        {supports.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <p>
        We connect qualified and job-ready learners with relevant opportunities
        through our network of employers and partner businesses.
      </p>
    </section>
  );
}