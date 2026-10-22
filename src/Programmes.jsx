const programmes = [
  {
    title: "Practical Accounting",
    text: "Learn how accounting works in a real business environment.",
  },
  {
    title: "Bookkeeping & Accounting Systems",
    text: "Build practical skills in transaction processing, reconciliations, ledgers, and accounting tools.",
  },
  {
    title: "Financial Reporting",
    text: "Learn to prepare and interpret financial statements and management reports.",
  },
  {
    title: "Tax & Compliance",
    text: "Understand practical business taxation and regulatory requirements.",
  },
  {
    title: "Finance for Business Owners",
    text: "Develop stronger cash-flow, profitability, and financial-management skills.",
  },
  {
    title: "Career Accelerator",
    text: "Prepare for accounting and finance opportunities through technical training, CV development, interview preparation, and employer matching.",
  },
];

export default function Programmes() {
  return (
    <section id="programmes" className="section">
      <p className="section-label">Programmes</p>
      <h2>Skills Designed for the Workplace</h2>

      <div className="cards">
        {programmes.map((programme) => (
          <div key={programme.title} className="card">
            <h3>{programme.title}</h3>
            <p>{programme.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}