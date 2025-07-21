// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 md:px-8 bg-gradient-to-tr from-zinc-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-600/10 via-purple-800/10 to-transparent pointer-events-none"></div>

      <div className="max-w-6xl mx-auto z-10 text-center flex flex-col justify-center items-center gap-6 md:gap-10 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight"
        >
          {siteData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg md:text-2xl font-medium text-indigo-200 px-2"
        >
          {siteData.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 text-sm sm:text-md font-semibold"
        >
          <span className="bg-white/10 px-3 py-1.5 rounded-full">FRONTEND DEVELOPER 🖥</span>
          <span className="bg-white/10 px-3 py-1.5 rounded-full">CREATIVE PROBLEM SOLVER 🧠</span>
          <span className="bg-white/10 px-3 py-1.5 rounded-full">CODE WITH CREATIVITY 🎨</span>
          <span className="bg-white/10 px-3 py-1.5 rounded-full">CRAFTING UI EXPERIENCES 🧩</span>
          <span className="bg-white/10 px-3 py-1.5 rounded-full">TECHNICAL WRITER ✍️</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-zinc-200 max-w-xl sm:max-w-2xl px-4"
        >
          I am a passionate and creative Frontend Developer specializing in building highly intuitive and visually engaging web applications. My focus is on crafting clean, reusable, and optimized code that ensures exceptional user experiences and robust performance. With proven problem-solving abilities, I thrive in collaborative team environments and am adept at delivering high-quality solutions for challenging projects, continually embracing new technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-4"
        >
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-md shadow flex items-center justify-center gap-2 text-sm"
          >
            View Projects <FaArrowRight className="mt-0.5" />
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-indigo-400 text-indigo-200 hover:bg-indigo-600 hover:text-white px-6 py-2 rounded-md transition text-sm text-center"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
