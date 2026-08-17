import { motion } from 'framer-motion';
import { portfolio } from '../../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="section content-layer">
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Experience
      </motion.h2>

      <div className="space-y-6">
        {portfolio.experience.map((exp, index) => (
          <motion.article
            key={exp.company}
            className="card relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-bold gradient-text">{exp.role}</h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>
              <div className="text-right md:text-left flex-shrink-0">
                <p className="text-white/50 text-sm">{exp.period}</p>
                <p className="text-white/40 text-sm">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-3">
              {exp.description.map((desc, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 text-white/70 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (i + 1) }}
                >
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span>{desc}</span>
                </motion.li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}