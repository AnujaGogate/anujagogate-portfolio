import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// --- IMPORT LOGOS ---
import supervity from "../assets/company/supervity.png";
import mercor from "../assets/company/mercor.png";
import servicenow from "../assets/company/servicenow.png";
import utampa from "../assets/company/utampa.png";
import coupa from "../assets/company/coupa.png";
import tata from "../assets/company/tata.png";
import techmahindra from "../assets/company/techmahindra.png";

const experiences = [
  {
    title: "Forward Deployed AI Engineer",
    company_name: "Supervity | Dallas, TX",
    date: "Nov 2025 - Present",
    icon: supervity,
    iconBg: "#fff",
    iconSize: "w-[80%] h-[80%]",
    points: [
      "Architecting 'AI Command Centers' that allow digital employees to handle documents and make decisions automatically.",
      "Building high-speed AI pipelines using Google Gemini and Python FastAPI to power Customer Service bots.",
      "Handling all DevOps duties: Containerizing apps with Docker and securing them with Keycloak.",
    ],
  },
  {
    title: "Exceptional AI Engineer",
    company_name: "Mercor / Claude AI | Tampa, FL",
    date: "May 2025 - Nov 2025",
    icon: mercor,
    iconSize: "w-[70%] h-[70%]",
    iconBg: "#E6DEDD",
    points: [
      "Acting as an 'Adversary' to test Claude AI models. Building workflows to attack the AI and find where it hallucinates.",
      "Creating automated tools to debug AI agents, ensuring they are safe and accurate before release.",
      "Optimizing complex code-search algorithms to make the AI faster at reading repositories.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ServiceNow | Remote, USA ",
    date: "Mar 2025 - May 2025",
    icon: servicenow,
    iconSize: "w-[90%] h-[90%]",
    iconBg: "#fff",
    points: [
      "Built high-performance microservices using Django and Flask, handling 20,000+ monthly transactions.",
      "Integrated OpenAI APIs to allow users to 'chat' with their documents securely.",
      "Enforced strict API security (OAuth2/JWT) to keep client data safe while using LLMs.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "University Of Tampa | Tampa, FL ",
    date: "Jan 2023 - Dec 2024",
    icon: utampa,
    iconSize: "w-[70%] h-[70%]",  
    iconBg: "#fff",
    points: [
      "Developed APIs for the student enrollment system using Django and Flask, ensuring it ran smoothly for 10,000+ students.",
      "Optimized data transfer methods, which reduced the load on the servers by 45%.",
      "Created automated data workflows using Pandas and Airflow to help the university analyze student performance.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Coupa Software | San Mateo, CA ",
    date: "Jan 2022 - Nov 2022",
    icon: coupa,
    iconSize: "w-[80%] h-[80%]",
    iconBg: "#fff",
    points: [
      "Designed automated pipelines for processing purchasing data using Flask, FastAPI, and Pandas.",
      "Enabled real-time analytics to help the business track procurement insights instantly.",
      "Set up MLOps tools (MLflow & PyTorch) to automatically detect anomalies and errors in the data.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Tata Communications | Pune, India",
    date: "Jul 2019 - Jan 2022",
    icon: tata,
    iconSize: "w-[85%] h-[85%]",
    iconBg: "#fff",
    points: [
      "Wrote automation scripts that processed 1 million+ logs daily, saving the team 2.5 hours of manual work every day.",
      "Built a network monitoring tool that reduced processing errors by 25%.",
      "Received the 'Ownership Award' for delivering critical projects ahead of schedule.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Tech Mahindra / Vodafone | Pune, India",
    date: "June 2018 - June 2019",
    icon: techmahindra,
    iconSize: "w-[80%] h-[80%]",
    iconBg: "#fff",
    points: [
      "Deployed backend alert systems using Kubernetes to improve how network issues were tracked.",
      "Wrote Python scripts to test the system when it failed, ensuring better reliability.",
      "Managed code versions using Git and Bitbucket to keep the team's work organized and reduce errors.",
    ],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 3px 0 #64ffda",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            // --- LOGIC: Use specific size if provided (Supervity), else use standard 60% ---
            className={`${experience.iconSize || "w-[60%] h-[60%]"} object-contain`}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-6 py-24 relative z-0">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What I have done so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="#64ffda">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;