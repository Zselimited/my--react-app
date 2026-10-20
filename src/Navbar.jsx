function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MySite</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <button className="nav-button">Get started</button>
    </nav>
  );
}

export default Navbar;