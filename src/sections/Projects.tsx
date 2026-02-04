import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Layers, MessageSquare, DollarSign } from 'lucide-react';

const projects = [
  {
    title: 'Sales CRM',
    description: 'A comprehensive CRM application built with the MERN stack featuring lead management, quotation order tracking, and real-time dashboards. Implements secure authentication, API integrations, and role-based access control.',
    icon: Layers,
    color: 'from-blue-500 to-cyan-500',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'REST API'],
    features: ['Lead Management', 'Order Tracking', 'Real-time Dashboards', 'Role-based Access'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management App',
    description: 'A productivity-focused task management tool built with React.js featuring CRUD operations, deadline tracking, and status monitoring with an intuitive and responsive user interface.',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    tech: ['React.js', 'LocalStorage', 'CSS3', 'JavaScript'],
    features: ['CRUD Operations', 'Deadlines', 'Status Tracking', 'Responsive UI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat application built with Node.js and Socket.io featuring dynamic user management, scalability, and an interactive UI for seamless communication.',
    icon: MessageSquare,
    color: 'from-green-500 to-emerald-500',
    tech: ['Node.js', 'Socket.io', 'Express', 'HTML/CSS', 'JavaScript'],
    features: ['Real-time Messaging', 'User Management', 'Scalable Architecture', 'Interactive UI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Payroll Management App',
    description: 'Full-stack payroll application built with MERN stack to manage employee records, salary structures, and monthly payroll generation. Features JWT-based authentication and secure REST APIs.',
    icon: DollarSign,
    color: 'from-orange-500 to-red-500',
    tech: ['MERN Stack', 'JWT', 'REST APIs', 'MongoDB', 'Express'],
    features: ['Employee Records', 'Salary Management', 'Payroll Generation', 'Secure Authentication'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-24 lg:py-32 overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium mb-4"
          >
            Featured Projects
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            My Recent{' '}
            <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A collection of projects showcasing my skills in full-stack development, 
            ERP integration, and technical problem-solving.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden">
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300"
                        aria-label="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300"
                        aria-label="View Demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-lg bg-white/5 text-xs text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${project.color} text-white`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-white hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
