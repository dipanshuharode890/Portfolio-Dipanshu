// src/components/ProjectsGrid.jsx
import { siteData } from '../data/siteData';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: 'spring',
      stiffness: 100,
    },
  })
};

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteData.projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 hover:scale-[1.02] border dark:border-zinc-700"
            >
              <img
                src={project.image || 'https://via.placeholder.com/600x300'}
                alt={project.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-indigo-100 text-indigo-600 dark:bg-indigo-600 dark:text-white px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-indigo-600 dark:hover:text-white"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-indigo-600 dark:hover:text-white"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
