import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'lingoudap@gmail.com',
    href: 'mailto:lingoudap@gmail.com',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91-7026589882',
    href: 'tel:+917026589882',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bangalore, India',
    href: '#',
    color: 'from-purple-500 to-pink-500',
  },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-white' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-400' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
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
            className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Work{' '}
            <span className="text-gradient">Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Have a project in mind or want to discuss opportunities? 
            Feel free to reach out. I'm always open to new challenges and collaborations.
          </motion.p>
        </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Cards and Social Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 group text-center"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{info.label}</p>
                    <p className="font-medium group-hover:text-gradient transition-all duration-300 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <h4 className="font-display font-semibold text-sm">Connect</h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground ${social.color} hover:bg-white/10 transition-all duration-300`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="font-medium text-green-400">Available for Work</span>
              </div>
              <p className="text-sm text-muted-foreground">
                I'm currently open to new opportunities and collaborations. 
                Let's discuss how we can work together!
              </p>
            </motion.div>
          </motion.div>
         
        </div>
      </div>
    </section>
  );
}
