import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from "lucide-react";
import emailjs from '@emailjs/browser';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'vedantmgali@gmail.com'
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/Mr-Wick2005",
      username: "@Mr-Wick2005 ",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/vedanth-gali-47a50839b/",
      username: "Vedanth Galii",
    },
    {
      name: "Instagram",
      icon: Instagram,
      link: "https://instagram.com",
      username: "@vedanthgali",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com",
      username: "@vedanthgali",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative min-h-screen bg-[#0f0f0f] flex items-center justify-center py-32 px-8 overflow-hidden"
    >
      {/* Optional 3D Background Placeholder */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20">
          {/* Grid pattern for depth */}
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}>
            <motion.div
              animate={{
                backgroundPosition: ['0px 0px', '50px 50px'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>
        </div>
        
        {/* 3D Scene Label */}
        <div className="absolute bottom-8 right-8">
          <div className="glass-panel px-4 py-2 rounded-full border border-white/10">
            <p className="text-purple-300 text-xs" style={{ fontWeight: 600 }}>
              3D Background Scene • Three.js
            </p>
          </div>
        </div>
      </div>

      {/* Animated gradient blurs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px] opacity-30"
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2
            className="text-6xl md:text-7xl lg:text-8xl text-white tracking-tight mb-6"
            style={{ fontWeight: 700 }}
          >
            Let's build
            <br />
            <span className="text-gradient glow-text">something meaningful</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto">
            Open to internships, freelance projects, and collaborative
            opportunities
          </p>
        </motion.div>

        {/* Contact Form and Social Links */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16 flex flex-row items-start justify-center gap-12"
        >
          {/* Contact Form */}
          <div className="flex-1 max-w-md">
            <form onSubmit={handleSubmit} className="space-y-6 p-6 border border-white/20 rounded-2xl bg-white/5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white text-lg group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontWeight: 600 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
                  whileHover={{ scale: 1.5 }}
                />
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
              </motion.button>
              {submitMessage && (
                <p className="text-center text-white text-sm mt-4">
                  {submitMessage}
                </p>
              )}
            </form>
          </div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex-1 flex flex-wrap items-center justify-center gap-6 max-w-md"
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="group flex flex-col items-center gap-3 p-6 glass-panel rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="p-4 rounded-full bg-gradient-to-br from-purple-600/20 to-blue-600/20 group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-colors">
                  <social.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-white text-sm" style={{ fontWeight: 600 }}>
                    {social.name}
                  </p>
                  <p className="text-gray-500 text-xs">{social.username}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-gray-500 text-sm">
            © 2025 Vedanth Muralidhar GALI · Designed & Built with Creative Chaos
          </p>
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 text-purple-400 text-xs"
          >
            ✨ Portfolio v1.0
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}