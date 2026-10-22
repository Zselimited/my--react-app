const reasons = [
  {
    title: "Practical Learning",
    text: "Learn skills you can actually use.",
  },
  {
    title: "Real Business Exposure",
    text: "Training is informed by real accounting and finance work.",
  },
  {
    title: "Career Preparation",
    text: "Build the confidence and professional skills employers expect.",
  },
  {
    title: "Opportunity Matching",
    text: "Qualified learners can be connected to suitable internships and jobs.",
  },
  {
    title: "Employer Network",
    text: "Businesses can access emerging accounting and finance talent through the Academy.",
  },
];

export default function Why() {
  return (
    <section id="why" className="section">
      <p className="section-label">Why Akkant Academy</p>
      <h2>We Don’t Stop at Teaching</h2>

      <div className="cards">
        {reasons.map((reason) => (
          <div key={reason.title} className="card">
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}