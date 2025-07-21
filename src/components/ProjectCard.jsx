import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6"
    >
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm font-medium">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Live Demo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
