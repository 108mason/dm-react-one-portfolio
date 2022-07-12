import About from "./compenents/About";
import { Contact } from "./compenents/Contact";
import { Experience } from "./compenents/Experience";
import { ExperienceA } from "./compenents/ExperienceA";
import Home from "./compenents/Home";
import NavBar from "./compenents/NavBar";
import Portfolio from "./compenents/Portfolio";
import { SocialLinks } from "./compenents/SocialLinks";

function App() {
  return (
<div>
  <NavBar />
  <Home />
  <About />
  <Portfolio />
  <Experience />
  <ExperienceA />
  <Contact />
  
  <SocialLinks />
</div>
  );
}

export default App;
