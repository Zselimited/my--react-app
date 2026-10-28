import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <img src={logo} alt="Akkant Academy" className="logo" />

      <button
        className="menu-button"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? "✕" : "☰"}
      </button>

      <nav className={open ? "nav-links open" : "nav-links"}>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}