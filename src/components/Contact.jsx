import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate sending (replace with EmailJS or your backend later)
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: "", email: "", message: "" });
    }, 1000);
  };

  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/anujagogate", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/anujagogate", label: "LinkedIn" },
    { icon: <HiMail />, href: "mailto:gogate.anuja@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24 relative z-0">
      <div className="flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
        
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
            Get in touch
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-accent transition-all"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium focus:ring-2 focus:ring-accent transition-all"
                required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none focus:ring-2 focus:ring-accent transition-all"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-accent hover:text-primary transition-all duration-300 border border-accent/30"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col justify-center items-center xl:items-start gap-8"
        >
          <div className="text-center xl:text-left">
            <h3 className="text-white text-[28px] font-bold mb-4">
              Let's work together!
            </h3>
            <p className="text-secondary text-[16px] leading-relaxed max-w-md">
              I'm currently looking for new opportunities in AI Engineering and Backend Development.
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open!
            </p>
          </div>

          {/* Direct Email */}
          <a
            href="mailto:gogate.anuja@gmail.com"
            className="text-accent text-lg font-mono hover:underline"
          >
            gogate.anuja@gmail.com
          </a>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary text-3xl hover:text-accent transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
