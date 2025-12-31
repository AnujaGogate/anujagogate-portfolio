import heroBg from '../assets/hero-bg.JPEG';
import StarBackground from './StarBackground';

const HeroWallpaper = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
      
      {/* LAYER 1: Image + Zoom */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-breathing-zoom origin-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* LAYER 2: Color Cycle Overlay */}
      <div className="absolute inset-0 w-full h-full animate-sky-cycle mix-blend-overlay" />

      {/* LAYER 3: Dark Gradient (Makes text readable) */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-primary via-black/60 to-black/30" />

      {/* LAYER 4: JUST STARS (Dedicated component - NO lines possible) */}
      <div className="absolute inset-0 w-full h-full opacity-60">
        <StarBackground />
      </div>
      
    </div>
  );
};

export default HeroWallpaper;
