// src/components/About.jsx
import { motion } from 'framer-motion';
import profileImg from '../assets/avatar.png';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={profileImg}
            alt="Dipanshu Harode"
            className="rounded-2xl w-64 h-80 object-content shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-indigo-600">About Me</h2>
          <p className="text-zinc-700 dark:text-zinc-300 mb-4 leading-relaxed">
            Hello! I'm <strong>Dipanshu Harode</strong>, a passionate self-taught Frontend Developer from Indore, India. I love crafting clean and user-friendly interfaces using modern tools like React, JavaScript, and Tailwind CSS.
          </p>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300 space-y-2">
            <li>🎓 B.Com (Computer Applications), PMB Gujarati Commerce College (Discontinued)</li>
            <li>🧠 Learned HTML, CSS, JavaScript & React from YouTube</li>
            <li>🌎 Open to full-time or remote roles (prefer startups)</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
