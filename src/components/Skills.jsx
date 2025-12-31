import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaReact,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiOpenai,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiPostgresql,
  SiRedis,
  SiKubernetes,
  SiTerraform,
  SiApachekafka,
  SiRabbitmq,
  SiNextdotjs,
  SiLangchain,
  SiPandas,
  SiPytest,
  SiJira,
  SiPostman,
} from 'react-icons/si';
import { TbBrain } from 'react-icons/tb';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'AI & LLM Brains',
      skills: [
        { name: 'Python', icon: <FaPython />, color: '#3776AB' },
        { name: 'LangChain', icon: <SiLangchain />, color: '#1C3C3C' },
        { name: 'OpenAI API', icon: <SiOpenai />, color: '#412991' },
        { name: 'Gemini Pro', icon: <TbBrain />, color: '#4285F4' },
        { name: 'RAG Pipelines', icon: <FaDatabase />, color: '#64ffda' },
        { name: 'Agentic AI', icon: <TbBrain />, color: '#FF6B6B' },
      ],
    },
    {
      title: 'Backend Core',
      skills: [
        { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
        { name: 'Flask', icon: <SiFlask />, color: '#ffffff' },
        { name: 'Django', icon: <SiDjango />, color: '#092E20' },
        { name: 'Kafka', icon: <SiApachekafka />, color: '#231F20' },
        { name: 'RabbitMQ', icon: <SiRabbitmq />, color: '#FF6600' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
        { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
        { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
      ],
    },
    {
      title: 'Data & Frontend',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
        { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
        { name: 'React', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      ],
    },
    {
      title: 'Tools & Testing',
      skills: [
        { name: 'Pytest', icon: <SiPytest />, color: '#0A9EDC' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Jira', icon: <SiJira />, color: '#0052CC' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-24 md:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-100">
              <span className="text-secondary font-mono text-xl md:text-2xl mr-2">02.</span>
              Skills & Technologies
            </h2>
            <div className="h-px bg-slate-700 flex-grow max-w-xs" />
          </div>

          {/* Skills Grid */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: categoryIndex * 0.2 }}
              >
                <h3 className="text-lg font-semibold text-slate-300 mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-secondary rounded-full" />
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{
                        y: -8,
                        boxShadow: `0 20px 40px -20px ${skill.color}40`,
                      }}
                      className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-secondary/50 transition-all duration-300 cursor-pointer"
                    >
                      <div
                        className="text-4xl mb-3 transition-all duration-300 group-hover:scale-110"
                        style={{ color: skill.color }}
                      >
                        {skill.icon}
                      </div>
                      <p className="text-slate-300 text-sm font-medium group-hover:text-secondary transition-colors duration-300">
                        {skill.name}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center"
          >
            <p className="text-textGray">
              ...and always learning more! Currently exploring{' '}
              <span className="text-secondary">Gemini 2.5 Pro</span>,{' '}
              <span className="text-secondary">Multi-modal Agents</span>, and{' '}
              <span className="text-secondary">Voice AI</span> technologies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
