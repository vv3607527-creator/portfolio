import { motion } from 'framer-motion';

export function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: '3D minimalistic animated portfolio built with React Three Fiber',
      tech: ['React', 'Three.js', 'Tailwind CSS'],
      status: 'Current',
    },
    // Add more projects as they're completed
  ];

  return (
    <section id="projects" className="section content-layer">
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Projects
      </motion.h2>

      <div className="grid gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            className="card group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold gradient-text">{project.title}</h3>
                <p className="text-white/70 mt-2 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full flex-shrink-0">
                {project.status}
              </span>
            </div>
          </motion.article>
        ))}

        <motion.div
          className="card border-2 border-dashed border-white/10 flex items-center justify-center min-h-[200px]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <div className="text-center text-white/40">
            <svg className="w-12 h-12 mx-auto mb-4 text-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
            <p className="text-lg font-medium">More projects coming soon</p>
            <p className="text-sm mt-1">Stay tuned for updates</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}