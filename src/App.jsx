import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import WorkExperience from "./components/WorkExperience/WorkExperience.jsx";
import ContactMe from "./components/ContactMe/ContactMe.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Skills from "./components/Skills/Skills.jsx";
import { LanguageProvider } from "./components/LanguageContext"; // Import the context

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
      <Footer />
    </LanguageProvider>
  );
}

export default App;
