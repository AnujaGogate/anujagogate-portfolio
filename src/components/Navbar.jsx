import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (resumeOpen && !e.target.closest('.resume-dropdown')) {
        setResumeOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [resumeOpen]);

  const navLinks = [
    { id: "hero", title: "Home" },
    { id: "about", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "projects", title: "Projects" },
    { id: "experience", title: "Experience" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-primary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Anuja Gogate &nbsp;
            <span className="sm:block hidden text-accent">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-row items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[15px] font-bold cursor-pointer transition-colors`}
                onClick={() => setActive(link.title)}
              >
                <Link 
                  to={link.id} 
                  smooth={true} 
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-white"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Resume Dropdown */}
          <div className="relative resume-dropdown">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setResumeOpen(!resumeOpen);
              }}
              className="px-5 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all font-mono text-[14px] font-semibold flex items-center gap-2"
            >
              Resume
              <svg 
                className={`w-4 h-4 transition-transform ${resumeOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {resumeOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-tertiary border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-accent/20 hover:text-white transition-colors cursor-pointer"
                  onClick={() => setResumeOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View PDF
                </a>
                
                <a
                  href="/resume.pdf"
                  download="Anuja_Gogate_Resume.pdf"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-accent/20 hover:text-white transition-colors cursor-pointer border-t border-gray-700"
                  onClick={() => setResumeOpen(false)}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download PDF
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Navigation (Hamburger) */}
        <div className="md:hidden flex flex-1 justify-end items-center">
          <button
            className="w-[28px] h-[28px] flex flex-col justify-center gap-1.5 z-50"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${toggle ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

          {/* Mobile Menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-tertiary/95 backdrop-blur-md absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-50 rounded-xl border border-gray-700 shadow-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-bold cursor-pointer text-[16px] hover:text-white transition-colors w-full`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <Link 
                    to={link.id} 
                    smooth={true} 
                    duration={500}
                    offset={-80}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              
              {/* Mobile Resume Links */}
              <li className="pt-4 border-t border-gray-600 w-full space-y-3">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-secondary hover:text-white font-bold text-[14px] transition-colors"
                >
                  View Resume
                </a>
                <a 
                  href="/resume.pdf" 
                  download="Anuja_Gogate_Resume.pdf"
                  className="block text-accent hover:text-accent/80 font-bold text-[14px] transition-colors"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
