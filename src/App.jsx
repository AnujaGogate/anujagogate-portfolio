import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroWallpaper from './components/HeroWallpaper';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="relative z-0 bg-primary">
      
      {/* SECTION 1: HERO (Wallpaper + Stars) */}
      <div className="relative h-screen w-full overflow-hidden">
        <HeroWallpaper />
        <div className="relative z-10 h-full">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* SECTION 2: THE CONTENT */}
      <div className="relative z-0 bg-primary">
        
        {/* Background Particles for the rest of the site */}
        <div className="absolute inset-0 z-0">
          <ParticlesBackground starsOnly={false} />
        </div>

        <div className="relative z-10">
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
