import { motion } from 'framer-motion';
import { portfolio } from '../../data/portfolio';

export function Education() {
  return (
    <section id="education" className="section content-layer">
      <motion.h2 className="section-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        Education
      </motion.h2>

      <div className="space-y-6">
        {portfolio.education.map((edu, index) => (
          <motion.article
            key={edu.institution}
            className="card flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold gradient-text">{edu.degree}</h3>
              <p className="text-accent font-medium mt-1">{edu.institution}</p>
            </div>
            <div className="text-right md:text-left flex-shrink-0">
              <div className="flex items-center gap-2 justify-end md:justify-start text-white/60">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-medium">{edu.period}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}