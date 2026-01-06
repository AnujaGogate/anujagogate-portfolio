import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiCheckCircle, HiXCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ user_name: "", user_email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  // Debug: Check if env variables are loaded (remove in production)
  useEffect(() => {
    console.log("EmailJS Config:", {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ? "✓ Loaded" : "✗ Missing",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if env variables exist
    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables!");
      setLoading(false);
      setStatus({
        type: "error",
        message: "Configuration error. Please contact me directly via email.",
      });
      return;
    }

    console.log("Attempting to send email...");

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setLoading(false);
          setStatus({
            type: "success",
            message: "Thank you! I will get back to you as soon as possible.",
          });
          setForm({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          setStatus({
            type: "error",
            message: `Failed to send: ${error.text || "Unknown error"}. Please email me directly.`,
          });
        }
      );
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
                name="user_name"
                value={form.user_name}
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
                name="user_email"
                value={form.user_email}
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

            {/* Status Message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-2 p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-red-500/20 text-red-400 border border-red-500/30"
                }`}
              >
                {status.type === "success" ? (
                  <HiCheckCircle className="text-xl" />
                ) : (
                  <HiXCircle className="text-xl" />
                )}
                {status.message}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-accent hover:text-primary transition-all duration-300 border border-accent/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
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
