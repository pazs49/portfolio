import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white">
        <Header />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

export default App;
