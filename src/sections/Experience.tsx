import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const experiences = [
  {
    company: 'Accrete Globus Technology Pvt. Ltd',
    role: 'Technical Support Engineer',
    team: 'ERP Implementation Team',
    location: 'Bangalore, India',
    period: 'Nov 2024 – Present',
    type: 'Full-time',
    description: [
      'Provided end-to-end technical support for SixOrbit ERP, resolving issues related to installation, configuration, system performance, and user operations.',
      'Managed ERP module deployments, including client onboarding, environment setup, and ensuring smooth data migration processes.',
      'Assisted in troubleshooting data-related issues during uploads or migration, working closely with developers to analyze queries and fix inconsistencies.',
      'Successfully integrated third-party systems such as WhatsApp APIs, biometric attendance devices (ESSL), and email services into the ERP platform.',
      'Performed integrations for systems storing data locally by making internal system IPs publicly accessible and consuming their APIs.',
      'Collaborated with the development team to address bug fixes, enhance features, and improve overall application performance.',
    ],
    skills: ['ERP', 'API Integration', 'SixOrbit', 'Technical Support', 'Data Migration'],
  },
  {
    company: 'Rachana Infotech Software Company',
    role: 'Full Stack Developer Intern',
    team: 'Development Team',
    location: 'Belagavi, India',
    period: 'Apr 2024 – Sep 2024',
    type: 'Internship',
    description: [
      'Developed Sales Management Admin Panel using PHP and MySQL with dynamic visualization in Chart.js.',
      'Enhanced UI with filters, date selection, and graph options for comprehensive data analysis.',
      'Worked on backend integration and optimized queries for better performance.',
    ],
    skills: ['PHP', 'MySQL', 'Chart.js', 'Full Stack', 'Data Visualization'],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4"
          >
            Work Experience
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            My Professional{' '}
            <span className="text-gradient">Journey</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : ''} mb-4`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl sm:text-2xl text-white group-hover:text-gradient transition-all duration-300">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>

                    {/* Meta Info */}
                    <div className={`flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className={`space-y-3 mb-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className={`flex gap-2 text-sm text-muted-foreground ${
                            index % 2 === 0 ? 'md:flex-row-reverse' : ''
                          }`}
                        >
                          <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-lg bg-white/5 text-xs text-muted-foreground hover:bg-white/10 hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden md:block" />
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
