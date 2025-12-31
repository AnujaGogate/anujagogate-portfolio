import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "AI Command Center",
    description:
      "A multi-modal AI orchestration platform that coordinates 'digital employees' across enterprise workflows. Features document OCR, voice commands via Gemini, and real-time task execution.",
    tags: [
      { name: "python", color: "text-blue-400" },
      { name: "fastapi", color: "text-green-400" },
      { name: "gemini", color: "text-purple-400" },
    ],
    source_code_link: "https://github.com/anujagogate",
    live_link: null,
  },
  {
    name: "LLM Evaluation Framework",
    description:
      "An adversarial testing framework for large language models. Built automated workflows to stress-test AI agents, detect hallucinations, and measure execution drift.",
    tags: [
      { name: "langchain", color: "text-blue-400" },
      { name: "pytest", color: "text-green-400" },
      { name: "openai", color: "text-pink-400" },
    ],
    source_code_link: "https://github.com/anujagogate",
    live_link: null,
  },
  {
    name: "Secure Document Chat",
    description:
      "Enterprise RAG application enabling users to chat with documents securely. Implemented OAuth2/JWT authentication to ensure data privacy while leveraging LLM capabilities.",
    tags: [
      { name: "django", color: "text-blue-400" },
      { name: "redis", color: "text-red-400" },
      { name: "oauth2", color: "text-yellow-400" },
    ],
    source_code_link: "https://github.com/anujagogate",
    live_link: null,
  },
];

const ProjectCard = ({ name, description, tags, source_code_link, live_link, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Tilt
        options={{ max: 25, scale: 1.02, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-full"
      >
        {/* Image Placeholder */}
        <div className="relative w-full h-[200px] bg-black-200 rounded-2xl overflow-hidden flex items-center justify-center">
          <div className="text-6xl opacity-30">🚀</div>

          {/* Links Overlay */}
          <div className="absolute top-3 right-3 flex gap-2">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/80 hover:bg-accent/20 transition-colors border border-white/20"
            >
              <FaGithub className="text-white text-lg" />
            </div>
            {live_link && (
              <div
                onClick={() => window.open(live_link, "_blank")}
                className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer bg-black/80 hover:bg-accent/20 transition-colors border border-white/20"
              >
                <FaExternalLinkAlt className="text-white text-sm" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag.name} className={`text-[14px] font-mono ${tag.color}`}>
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24 relative z-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          My Work
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Projects.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcase my skills and experience through real-world examples.
        Each project demonstrates my ability to solve complex problems, work with different
        technologies, and manage projects effectively.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
