import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const ServiceCard = ({ title, icon, index }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full p-[1px] rounded-[20px] shadow-card"
      style={{
        background: "linear-gradient(135deg, #64ffda 0%, #915eff 50%, #ff6b6b 100%)",
      }}
    >
      <div
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const services = [
    { title: "Forward Deployed AI Engineer", icon: "🤖" },
    { title: "Agentic AI Architect", icon: "🧠" },
    { title: "Backend Systems Engineer", icon: "⚙️" },
    { title: "Full Stack Developer", icon: "💻" },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 relative z-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          Introduction
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview.
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am an innovative AI Engineer with <span className="text-accent font-semibold">7+ years</span> of experience. 
        I specialize in building <span className="text-accent font-semibold">AI Employees</span> and multi-modal decision systems. 
        My expertise bridges the gap between complex LLM architectures (Gemini, OpenAI) 
        and robust backend platforms (Python, Docker, AWS). I don't just train models; 
        I build the <span className="text-accent font-semibold">production infrastructure</span> that makes them work.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
