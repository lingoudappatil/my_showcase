import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Wrench, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'Building scalable applications with MERN stack and modern technologies.',
  },
  {
    icon: Database,
    title: 'ERP Implementation',
    description: 'Expert in ERP deployment, configuration, and data migration.',
  },
  {
    icon: Wrench,
    title: 'API Integration',
    description: 'Seamless integration of third-party systems and APIs.',
  },
  {
    icon: Users,
    title: 'Technical Support',
    description: 'Providing end-to-end technical support and troubleshooting.',
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Passionate About{' '}
            <span className="text-gradient">Problem Solving</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a <span className="text-white font-medium">Technical Support and Implementation Engineer</span> with over 
                1 year of experience in ERP deployment, API integrations, and troubleshooting. 
                My expertise spans across full-stack development using the MERN stack.
              </p>
              <p>
                Currently working at <span className="text-white font-medium">Accrete Globus Technology Pvt. Ltd</span>, 
                I provide end-to-end technical support for SixOrbit ERP, managing module deployments, 
                client onboarding, and seamless data migration processes.
              </p>
              <p>
                I specialize in integrating third-party systems such as WhatsApp APIs, biometric 
                attendance devices, and email services into ERP platforms. My strong communication 
                skills and passion for solving real-world problems drive me to deliver efficient 
                technical solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: '1+', label: 'Years Exp.' },
                { value: '4+', label: 'Projects' },
                { value: '10+', label: 'Integrations' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center p-4 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-2xl sm:text-3xl font-display font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                  <item.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
