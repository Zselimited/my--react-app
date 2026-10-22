const stages = [
  {
    title: "Akkant Academy",
    text: "Develops practical finance talent.",
  },
  {
    title: "Akkant BPO",
    text: "Provides exposure to real accounting, tax, reporting, and business processes.",
  },
  {
    title: "Employer Network",
    text: "Creates pathways to internships and job opportunities.",
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="section">
      <p className="section-label">The Akkant Ecosystem</p>
      <h2>Learn. Experience. Work. Grow.</h2>

      <p>Akkant Academy sits within a wider business ecosystem.</p>

      <div className="ecosystem-flow">
        {stages.map((stage, index) => (
          <div key={stage.title} className="stage">
            <div className="card">
              <h3>{stage.title}</h3>
              <p>{stage.text}</p>
            </div>
            {index < stages.length - 1 && <span className="arrow">↓</span>}
          </div>
        ))}
      </div>

      <p>
        We don’t just teach accounting. We help people build the skills,
        experience, and connections needed to start and grow their careers.
      </p>
    </section>
  );
}