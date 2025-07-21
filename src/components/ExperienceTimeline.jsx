import { siteData } from '../data/siteData';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-white dark:bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-8 text-center"
        >
          Experience
        </motion.h2>

        <ol className="relative border-l border-zinc-300 dark:border-zinc-700">
          {siteData.experience.map((exp, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-10 ml-4"
            >
              <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-1.5 border border-white dark:border-zinc-900" />
              <time className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {exp.date}
              </time>
              <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                {exp.title} - {exp.company}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-300">{exp.location}</p>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">
                {exp.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
