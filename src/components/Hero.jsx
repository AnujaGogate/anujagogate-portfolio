import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-[calc(100vh-80px)] flex flex-col justify-center items-center text-center px-4 relative z-10 pb-20"
    >
      {/* Small Greeting */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-secondary font-mono text-lg mb-4 tracking-wide drop-shadow-md"
      >
        Hi, my name is
      </motion.p>

      {/* Name - Big & Clean */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-5xl sm:text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
      >
        Anuja <span className="text-yellow-400">Gogate</span>
      </motion.h1>

      {/* Typewriter - The "Changing Text" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-200 mb-8 h-12 drop-shadow-md"
      >
        <Typewriter
          options={{
            strings: [
              'Problem Solver',
              'Forward-Deployed AI Engineer',
              'Agentic AI Architect',
              'Systems Scaler',
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-6 mt-2"
      >
        <Link
          to="projects"
          smooth={true}
          duration={500}
          offset={-80}
          className="px-8 py-3 border-2 border-secondary text-secondary rounded-lg hover:bg-secondary/10 transition-all duration-300 cursor-pointer font-mono font-semibold backdrop-blur-sm"
        >
          View My Work
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-80}
          className="px-8 py-3 bg-secondary text-primary font-bold rounded-lg hover:bg-secondary/90 transition-all duration-300 cursor-pointer font-mono shadow-lg shadow-secondary/20"
        >
          Get In Touch
        </Link>
      </motion.div>

      {/* Bounce Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10"
      >
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer"
        >
          <motion.svg
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-6 text-white drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
