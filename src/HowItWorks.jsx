const steps = [
  {
    number: "01",
    title: "Learn",
    text: "Build practical accounting and finance knowledge.",
  },
  {
    number: "02",
    title: "Practise",
    text: "Work with real-world exercises, templates, systems, and business scenarios.",
  },
  {
    number: "03",
    title: "Become Job-Ready",
    text: "Strengthen your CV, interview skills, workplace confidence, and technical competence.",
  },
  {
    number: "04",
    title: "Get Connected",
    text: "Eligible learners may be matched with internships and job opportunities within our employer network.",
  },
  {
    number: "05",
    title: "Grow",
    text: "Build experience, continue learning, and progress in your career.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <p className="section-label">How It Works</p>
      <h2>Your Journey With Akkant Academy</h2>

      <div className="cards">
        {steps.map((step) => (
          <div key={step.number} className="card">
            <span className="step-number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}