import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Wrench,
  Layers,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    icon: Code2,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'JavaScript', level: 90 },
      { name: 'React.js', level: 85 },
      { name: 'PHP', level: 80 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'Node.js', level: 75 },
    ],
  },
  {
    title: 'ERP & Integration',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'ERP Deployment', level: 90 },
      { name: 'API Integration', level: 85 },
      { name: 'SixOrbit ERP', level: 88 },
      { name: 'Implementation', level: 85 },
      { name: 'Client Support', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'MySQL Workbench', level: 85 },
      { name: 'Chart.js', level: 80 },
      { name: 'Firebase', level: 70 },
    ],
  },
  {
    title: 'Soft Skills',
    icon: Cpu,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Communication', level: 95 },
      { name: 'Problem Solving', level: 90 },
      { name: 'Critical Thinking', level: 88 },
      { name: 'Teamwork', level: 85 },
      { name: 'Documentation', level: 90 },
    ],
  },
];

const techStack = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Node.js', icon: '🟢', category: 'Backend' },
  { name: 'MongoDB', icon: '🍃', category: 'Database' },
  { name: 'MySQL', icon: '🐬', category: 'Database' },
  { name: 'PHP', icon: '🐘', category: 'Backend' },
  { name: 'JavaScript', icon: '🟨', category: 'Language' },
  { name: 'Git', icon: '📦', category: 'Tool' },
  { name: 'REST API', icon: '🔌', category: 'Integration' },
  { name: 'Chart.js', icon: '📊', category: 'Visualization' },
  { name: 'Firebase', icon: '🔥', category: 'Backend' },
  { name: 'Postman', icon: '🚀', category: 'Tool' },
  { name: 'ERP', icon: '🏢', category: 'Enterprise' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-24 lg:py-32 overflow-hidden">
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
            className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4"
          >
            Skills & Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Technologies I{' '}
            <span className="text-gradient">Work With</span>
          </motion.h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + categoryIndex * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <h3 className="font-display font-semibold text-xl mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.03 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="group relative px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
              >
                <span className="text-lg mr-2">{tech.icon}</span>
                <span className="text-sm font-medium">{tech.name}</span>
                
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-background border border-white/10 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                  {tech.category}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
