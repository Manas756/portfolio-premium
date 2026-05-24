import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Twitter, Mail, ChevronDown } from 'lucide-react';

// ==================== CUSTOM HOOKS ====================

const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return mousePosition;
};

const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
};

// ==================== COMPONENTS ====================

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mousePosition = useMouse();
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const interactiveElements = document.querySelectorAll('a, button, .interactive');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-50 mix-blend-add transition-all duration-200 ${
          isHovering ? 'w-8 h-8 bg-[#BBCCD7] opacity-60' : 'bg-[#646973] opacity-40'
        }`}
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        ref={cursorRef}
      />
      <div
        className="fixed w-1 h-1 rounded-full pointer-events-none z-40 bg-[#BBCCD7] opacity-100"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
    </>
  );
};

const ScrollProgress: React.FC = () => {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#646973] to-[#BBCCD7] z-50"
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.3 }}
    />
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-40 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold gradient-text"
        >
          MK
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-kanit font-light hover:text-[#BBCCD7] transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/50 backdrop-blur-md border-b border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-kanit hover:text-[#BBCCD7] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const GradientText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <span className={`gradient-text ${className}`}>{children}</span>
);

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen w-full flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#BBCCD7]/20 to-[#646973]/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <motion.h1
          className="text-7xl md:text-8xl font-bold font-kanit leading-tight mb-6 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I'm <span className="text-white">Manas</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl font-kanit font-light text-gray-300 mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Fintech-focused developer and digital creator building high-performance web experiences that
          actually stand out.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#646973] to-[#BBCCD7] text-black font-bold rounded-lg font-kanit text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(187,204,215,0.4)]"
          >
            Contact Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-[#BBCCD7] text-[#BBCCD7] font-bold rounded-lg font-kanit text-lg transition-all duration-300 hover:bg-[#BBCCD7]/10"
          >
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-[#BBCCD7]" size={32} />
      </motion.div>
    </section>
  );
};

const Marquee: React.FC = () => {
  const projects = [
    'Fintech Dashboard',
    'AI Expense Tracker',
    'Interactive 3D Landing',
    'Trading Journal App',
    'Startup Branding System',
  ];

  return (
    <section className="w-full py-20 px-6 bg-gradient-to-b from-black to-black/80 overflow-hidden">
      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{ x: [0, -1500] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...projects, ...projects].map((project, i) => (
          <motion.div
            key={i}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-lg font-kanit text-[#BBCCD7] flex-shrink-0 hover:bg-white/10 transition-colors"
            whileHover={{ y: -5 }}
          >
            {project}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="min-h-screen w-full flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-5xl md:text-7xl font-bold font-kanit leading-tight mb-12">About Me</h2>
        <p className="text-lg md:text-2xl font-kanit font-light text-gray-300 leading-relaxed mb-8">
          I'm <GradientText>Manas</GradientText> — an 18-year-old creator focused on web development,
          fintech experiences, branding, and modern digital products. I combine aggressive execution
          with clean visual storytelling to build projects that feel powerful, memorable, and
          conversion-driven.
        </p>
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { label: 'Projects', value: '15+' },
            { label: 'Clients', value: '8+' },
            { label: 'Years Coding', value: '3' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold gradient-text mb-2">{item.value}</p>
              <p className="text-sm text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Services: React.FC = () => {
  const services = [
    'Web Development',
    'Fintech Interfaces',
    'Motion Design',
    'UI/UX Systems',
    'Branding',
    'Interactive Experiences',
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold font-kanit leading-tight mb-16 text-black"
        >
          Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-8 p-8 rounded-2xl hover:bg-gray-50 transition-colors"
              whileHover={{ x: 10 }}
            >
              <span className="text-6xl font-bold text-gray-200 flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-2xl font-bold text-black font-kanit mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Premium {service.toLowerCase()} solutions tailored to your brand.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience: React.FC = () => {
  const experiences = [
    { title: 'Open Source Contributor', year: '2023 - Present' },
    { title: 'Internship Builder', year: '2023 - 2024' },
    { title: 'Fintech UI Exploration', year: '2024' },
    { title: 'Frontend Development Lead', year: '2024 - Present' },
    { title: 'Creative Web Design', year: 'Ongoing' },
  ];

  return (
    <section className="w-full py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold font-kanit leading-tight mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-8 p-6 border-l-2 border-[#BBCCD7] pl-8 hover:pl-12 transition-all"
            >
              <div className="min-w-16 h-16 rounded-full bg-gradient-to-br from-[#646973] to-[#BBCCD7] flex items-center justify-center text-white font-bold text-lg">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-kanit mb-1">{exp.title}</h3>
                <p className="text-[#BBCCD7] text-sm">{exp.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills: React.FC = () => {
  const skills = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'JavaScript',
    'Framer Motion',
    'GitHub',
    'UI/UX',
    'Branding',
    'Motion Design',
    'Responsive Design',
    'API Integration',
    'Modern Architecture',
  ];

  return (
    <section id="skills" className="w-full py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold font-kanit leading-tight mb-16 text-center"
        >
          Skills & Tech
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-center font-kanit font-medium text-[#BBCCD7] hover:bg-white/10 hover:border-[#BBCCD7]/50 transition-all cursor-pointer"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects: React.FC = () => {
  const projects = [
    { title: 'Fintech Dashboard', category: 'Web Development', color: 'from-blue-500' },
    { title: 'AI Expense Tracker', category: 'Full Stack', color: 'from-purple-500' },
    { title: 'Interactive 3D Landing', category: 'Creative', color: 'from-pink-500' },
    { title: 'Trading Journal App', category: 'Fintech', color: 'from-green-500' },
    { title: 'Startup Branding System', category: 'Design', color: 'from-orange-500' },
  ];

  return (
    <section id="projects" className="w-full py-20 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl md:text-7xl font-bold font-kanit leading-tight mb-16"
        >
          Projects
        </motion.h2>

        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className="p-8 md:p-12 border border-white/10 rounded-2xl group-hover:border-white/20 transition-all">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-6xl font-bold text-white/10 font-kanit">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold font-kanit mt-4 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-[#BBCCD7] text-sm">{project.category}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white interactive"
                  >
                    →
                  </motion.button>
                </div>
                <div className="h-48 md:h-64 bg-gradient-to-br from-white/5 to-white/10 rounded-xl group-hover:from-white/10 group-hover:to-white/15 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="w-full py-20 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-[#BBCCD7]/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold font-kanit leading-tight mb-6"
        >
          Let's Build Something
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl font-kanit font-light text-gray-300 mb-12"
        >
          Impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.a
            href="mailto:manas@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#646973] to-[#BBCCD7] text-black font-bold rounded-lg font-kanit text-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(187,204,215,0.4)] flex items-center gap-2 interactive"
          >
            <Mail size={20} />
            Get In Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: 'https://github.com/Manas756' },
            { icon: Linkedin, href: 'https://linkedin.com' },
            { icon: Twitter, href: 'https://twitter.com' },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#BBCCD7] hover:bg-white/10 hover:border-[#BBCCD7]/50 transition-all interactive"
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-gray-400 text-sm font-kanit"
        >
          © 2024 Manas Kapoor. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

// ==================== MAIN APP ====================

export default function App() {
  useEffect(() => {
    // Lenis smooth scrolling initialization (optional)
    try {
      const Lenis = (window as any).Lenis;
      if (Lenis) {
        const lenis = new Lenis({
          lerp: 0.1,
          smoothWheel: true,
        });

        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
      }
    } catch (e) {
      console.log('Lenis not available, using native scrolling');
    }
  }, []);

  return (
    <main className="bg-[#0C0C0C] text-white overflow-x-hidden">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}