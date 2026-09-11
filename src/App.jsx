import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";
import Footer from "./components/layout/Footer";
import "./styles/index.css";

function App() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
