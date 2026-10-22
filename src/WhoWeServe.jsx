const groups = [
  {
    title: "Students & Graduates",
    text: "Build practical accounting skills, prepare for the workplace, and gain access to relevant internship and entry-level opportunities.",
  },
  {
    title: "Early-Career Professionals",
    text: "Strengthen your technical skills, improve your career readiness, and position yourself for better opportunities.",
  },
  {
    title: "Business Owners",
    text: "Understand your numbers, strengthen your financial systems, and make better business decisions.",
  },
  {
    title: "Employers & Growing Businesses",
    text: "Access practical training for your finance team and connect with job-ready accounting and finance talent.",
  },
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="section">
      <p className="section-label">Who We Serve</p>

      <div className="cards">
        {groups.map((group) => (
          <div key={group.title} className="card">
            <h3>{group.title}</h3>
            <p>{group.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}