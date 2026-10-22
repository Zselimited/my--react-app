import logo from "./assets/Akkant-academy.png";

const links = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Programmes", id: "programmes" },
  { label: "Career Opportunities", id: "career" },
  { label: "Webinars", id: "webinars" },
  { label: "For Employers", id: "employers" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <img src={logo} alt="Akkant Academy" className="logo" />
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}