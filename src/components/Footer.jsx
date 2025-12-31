import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/anujagogate', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/anuja-gogate/', label: 'LinkedIn' },
  ];

  return (
    <footer className="py-8 bg-primary border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Social Links */}
        <div className="md:hidden flex justify-center gap-6 mb-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 text-xl hover:text-secondary transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Footer Content */}
        <div className="text-center">
          <motion.a
            href="https://github.com/anujagogate"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: '#64ffda' }}
            className="text-slate-400 text-sm font-mono block mb-2 hover:text-secondary transition-colors duration-300"
          >
            Designed & Built by Anuja Gogate
          </motion.a>
          <p className="text-slate-500 text-xs font-mono flex items-center justify-center gap-1">
            Made with <FaHeart className="text-red-500 text-xs" /> using React & Tailwind
          </p>
          <p className="text-slate-600 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
