import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import About from "./section/About";
import Skills from "./section/Skills";
import Projects from "./section/ProjectShowcase";
import Education from "./section/Education";
import Activity from "./section/Activity";
import Contact from "./section/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Activity />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;