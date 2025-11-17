"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Twitter, Mail, Github, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/driule_io",
    color: "text-neon-cyan hover:text-neon-pink",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/driule",
    color: "text-gray-400 hover:text-neon-cyan",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:contact@driule.io",
    color: "text-gray-400 hover:text-neon-purple",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold mb-8">
            <span className="text-gradient">Get in Touch</span>
          </h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Interested in collaborating? Have a project in mind? Let&apos;s connect and build something
            amazing together.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-4 bg-space-light/50 backdrop-blur-sm rounded-xl border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 ${link.color}`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{link.name}</span>
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>Always open to interesting projects and collaborations.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

