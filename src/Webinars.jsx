const webinars = [
  {
    audience: "For Students & Early-Career Professionals",
    title: "How to Land Your First Accounting Job",
    text: "Learn what employers actually look for, how to position yourself, and the practical skills that can help you stand out.",
    topics: [
      "What employers expect from entry-level accountants",
      "Practical skills beyond the classroom",
      "CV and LinkedIn positioning",
      "Interview preparation",
      "Common mistakes candidates make",
      "How to become job-ready",
    ],
  },
  {
    audience: "For Business Owners",
    title: "Build a Financial Operating System for Your Business",
    text: "Learn how to move from scattered records and reactive money management to a more structured financial system.",
    topics: [
      "Separating business and personal finances",
      "Tracking revenue and expenses",
      "Understanding cash flow",
      "Setting up financial records",
      "Knowing what reports to review",
      "Building basic financial controls",
    ],
  },
];

export default function Webinars() {
  return (
    <section id="webinars" className="section">
      <p className="section-label">Webinars &amp; Events</p>
      <h2>Learn Something Practical. Take the Next Step.</h2>

      <p>
        Throughout the year, Akkant Academy hosts practical webinars, workshops,
        and learning sessions for students, early-career professionals, and
        business owners.
      </p>
      <p>
        Our sessions are designed to address real career and business challenges
        in a simple, practical way.
      </p>

      <a href="#upcoming-webinars" className="btn">View Upcoming Webinars</a>

      <h3 id="upcoming-webinars">Upcoming Webinars</h3>

      <div className="cards">
        {webinars.map((webinar) => (
          <div key={webinar.title} className="card">
            <p className="section-label">{webinar.audience}</p>
            <h3>{webinar.title}</h3>
            <p>{webinar.text}</p>

            <p>What we will cover</p>
            <ul className="support-list">
              {webinar.topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>

            <a href="#contact" className="btn">Register Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}