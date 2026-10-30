const contact = {
  email: "useakkant@gmail.com",
  phone: "+2347067599891",
  website: "www.akkantbpo.com",
};

export default function Contact() {
  return (
    <section id="contact" className="section">
      <p className="section-label">Contact</p>
      <h2>Get in Touch</h2>

      <p>
        Whether you want to join the Academy, ask about a programme, or hire
        finance talent, we would love to hear from you.
      </p>

      <ul className="support-list">
        <li>Email: {contact.email}</li>
        <li>Phone: {contact.phone}</li>
      </ul>
    </section>
  );
}