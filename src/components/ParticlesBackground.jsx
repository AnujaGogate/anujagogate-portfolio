import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = ({ starsOnly = false }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    fullScreen: {
      enable: false,
      zIndex: 0,
    },
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: !starsOnly,
          mode: "push",
        },
        onHover: {
          enable: !starsOnly,
          mode: "grab",
        },
        resize: true,
      },
    },
    particles: {
      color: {
        value: starsOnly ? "#ffffff" : "#64ffda",
      },
      links: {
        enable: !starsOnly,
        color: "#8892b0",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        direction: "none",
        outModes: {
          default: "bounce",
        },
        random: starsOnly,
        speed: starsOnly ? 0.3 : 1.5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: starsOnly ? 150 : 80,
      },
      opacity: {
        value: starsOnly ? { min: 0.1, max: 0.8 } : 0.6,
        animation: {
          enable: starsOnly,
          speed: 1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: starsOnly ? { min: 1, max: 2 } : { min: 1, max: 4 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id={starsOnly ? "stars-particles" : "tech-particles"}
        className="absolute inset-0 w-full h-full"
        options={options}
      />
    );
  }

  return null;
};

export default ParticlesBackground;
