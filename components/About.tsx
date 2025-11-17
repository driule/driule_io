"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Gamepad2, Link as LinkIcon, Zap } from "lucide-react";

const skills = [
  { icon: Gamepad2, label: "Game Development", color: "text-neon-pink" },
  { icon: LinkIcon, label: "Blockchain", color: "text-neon-purple" },
  { icon: Code, label: "Web Development", color: "text-neon-cyan" },
  { icon: Zap, label: "Dev Tools", color: "text-ghibli-yellow" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold mb-12 text-center">
            <span className="text-gradient">About</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-lg text-gray-300 leading-relaxed"
            >
              <p>
                I'm a developer passionate about creating innovative experiences at the intersection
                of games, blockchain, and web technologies.
              </p>
              <p>
                As the founder of <span className="text-neon-cyan font-semibold">Codyfight</span>,
                I've built a platform that combines competitive coding with gaming elements,
                creating a unique experience for developers worldwide.
              </p>
              <p>
                My work spans game development, blockchain solutions, web applications, and
                developer tools. I believe in building products that are both technically excellent
                and delightful to use.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-6"
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-space-light/50 backdrop-blur-sm rounded-xl p-6 glow-soft border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300"
                  >
                    <Icon className={`w-8 h-8 ${skill.color} mb-3`} />
                    <p className="text-sm font-medium text-gray-300">{skill.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

