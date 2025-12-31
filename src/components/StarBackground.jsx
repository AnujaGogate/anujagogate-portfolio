import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarBackground = () => {
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
      color: { value: "transparent" },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
        resize: true,
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        direction: "none",
        random: true,
        speed: 0.2,
        straight: false,
        outModes: { default: "out" },
      },
      number: {
        density: { enable: true, area: 800 },
        value: 150,
      },
      opacity: {
        value: { min: 0.1, max: 0.8 },
        animation: {
          enable: true,
          speed: 1,
          sync: false,
        },
      },
      shape: { type: "circle" },
      size: {
        value: { min: 1, max: 2 },
      },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <Particles
        id="tsparticles-stars-only"
        className="absolute inset-0 w-full h-full"
        options={options}
      />
    );
  }

  return null;
};

export default StarBackground;
