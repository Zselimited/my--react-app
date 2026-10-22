import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import WhoWeServe from "./WhoWeServe.jsx";
import Career  from "./Career.jsx";
import HowItWorks from "./HowItWorks.jsx";
import Employers from "./Employers.jsx";
import Programmes from "./Programmes.jsx";
import Why from "./Why.jsx";
import Ecosystem from "./Ecosystem.jsx";
import FinalCTA from "./FinalCTA.jsx";
import Webinars from "./Webinars.jsx";
import Contact from "./Contact.jsx";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <WhoWeServe />
        <Career />
        <HowItWorks />
        <Employers />
        <Programmes />
        <Why />
        <Ecosystem />
        <FinalCTA />
        <Webinars />
        <Contact />
      </main>
    </>
  );
}

export default App; 