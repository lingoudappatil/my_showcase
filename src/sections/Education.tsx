import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'KLE M S Sheshgiri Engineering College',
    location: 'Belagavi, India',
    period: '2022 - 2024',
    description: 'Advanced studies in computer applications with focus on software development, database management, and system architecture.',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'S J P N Trust\'s BCA College',
    location: 'Nidasoshi, India',
    period: '2019 - 2022',
    description: 'Foundation in computer science fundamentals, programming languages, and software development principles.',
  },
];

const certifications = [
  {
    name: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    year: '2023',
    icon: '⚛️',
    link: '#',
  },
  {
    name: 'JavaScript',
    issuer: 'Udemy',
    year: '2021',
    icon: '🟨',
    link: '#',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-24 lg:py-32 overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4"
          >
            Education & Certifications
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Academic{' '}
            <span className="text-gradient">Background</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow duration-300">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-2 group-hover:text-gradient transition-all duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-emerald-400 font-medium mb-3">{edu.institution}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span>📍</span>
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl">Certifications</h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={cert.name}
                    href={cert.link}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/[0.07] border border-white/5 hover:border-white/10 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate group-hover:text-gradient transition-all duration-300">
                        {cert.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20"
            >
              <h4 className="font-display font-semibold mb-4">Education Highlights</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Degree</span>
                  <span className="text-sm font-medium">MCA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Field</span>
                  <span className="text-sm font-medium">Computer Science</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Certifications</span>
                  <span className="text-sm font-medium">2+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Years of Study</span>
                  <span className="text-sm font-medium">5+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
