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
                Build games, blockchain tools, web apps. Formerly co-founded{" "}
                <a
                  href="https://x.com/codyfight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-green font-semibold hover:text-neon-cyan transition-colors underline decoration-neon-green/50 hover:decoration-neon-cyan/50"
                >
                  @codyfight
                </a>{" "}
                — competitive coding platform.
              </p>
              <p>
                Focus on what works. Code that solves problems. Tools that make sense.
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
                    className={`bg-space-light/50 backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                      index === 2
                        ? "glow-soft-green border-neon-green/20 hover:border-neon-green/50"
                        : "glow-soft border-neon-cyan/20 hover:border-neon-cyan/50"
                    }`}
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

