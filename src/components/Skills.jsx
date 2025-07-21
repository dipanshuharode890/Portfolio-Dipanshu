// src/components/Skills.jsx
import { siteData } from '../data/siteData';
import { motion } from 'framer-motion';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiRedux, SiGithub, SiVite, SiAxios, SiVercel, SiTypescript, SiNextdotjs } from 'react-icons/si';

const skillVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  })
};

const skillIcons = {
  HTML5: <SiHtml5 className="text-orange-500" />,
  CSS: <SiCss3 className="text-blue-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  React: <SiReact className="text-cyan-400" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400" />,
  Redux: <SiRedux className="text-purple-500" />,
  GitHub: <SiGithub className="text-gray-700 dark:text-white" />,
  Vite: <SiVite className="text-purple-400" />,
  Axios: <SiAxios className="text-blue-300" />,
  Vercel: <SiVercel className="text-black dark:text-white" />,
  TypeScript: <SiTypescript className="text-blue-600" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-5xl mx-auto md:grid-cols-2 gap-10 items-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {/* Frontend */}
          <motion.div
            custom={0}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300 hover:ring-2 hover:ring-indigo-500"
          >
            <h4 className="font-semibold text-indigo-600 mb-4 text-xl">Frontend</h4>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-200">
              {siteData.skills.frontend.map((skill, index) => (
                <li key={index} className="flex items-center justify-center gap-2 tracking-wide text-lg">
                  {skillIcons[skill] || '🛠️'} {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tools */}
          <motion.div
            custom={1}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300 hover:ring-2 hover:ring-indigo-500"
          >
            <h4 className="font-semibold text-indigo-600 mb-4 text-xl">Tools</h4>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-200">
              {siteData.skills.tools.map((tool, index) => (
                <li key={index} className="flex items-center justify-center gap-2 tracking-wide text-lg">
                  {skillIcons[tool] || '🔧'} {tool}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learning */}
          <motion.div
            custom={2}
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl shadow hover:scale-105 transition-transform duration-300 hover:ring-2 hover:ring-indigo-500"
          >
            <h4 className="font-semibold text-indigo-600 mb-4 text-xl">Learning</h4>
            <ul className="space-y-3 text-zinc-700 dark:text-zinc-200">
              {siteData.skills.learning.map((item, index) => (
                <li key={index} className="flex items-center justify-center gap-2 tracking-wide text-lg">
                  {skillIcons[item] || '📘'} {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
