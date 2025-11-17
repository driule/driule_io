"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "Game Development",
    skills: ["Design", "Mechanics", "Tech", "Graphics"],
    colorClass: "text-neon-pink",
    bgClass: "bg-neon-pink/10",
    borderClass: "border-neon-pink/30",
  },
  {
    category: "Web Development",
    skills: ["Architecture", "APIs", ".js", ".php", "databases"],
    colorClass: "text-neon-cyan",
    bgClass: "bg-neon-cyan/10",
    borderClass: "border-neon-cyan/30",
  },
  {
    category: "Blockchain",
    skills: ["Web3", "GamFi", "NFTs"],
    colorClass: "text-neon-purple",
    bgClass: "bg-neon-purple/10",
    borderClass: "border-neon-purple/30",
  },
  {
    category: "Tools & Others",
    skills: ["Dev Tools", "CLI Tools", "Automation", "Open Source"],
    colorClass: "text-ghibli-yellow",
    bgClass: "bg-ghibli-yellow/10",
    borderClass: "border-ghibli-yellow/30",
  },
  {
    category: "Approach",
    skills: ["Collaboration", "Problem Solving", "Fun"],
    colorClass: "text-ghibli-green",
    bgClass: "bg-ghibli-green/10",
    borderClass: "border-ghibli-green/30",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 relative"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-futuristic font-bold mb-16 text-center">
            <span className="text-gradient">How?</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="bg-space-light/50 backdrop-blur-sm rounded-2xl p-8 glow-soft border border-neon-cyan/20"
              >
                <h3 className={`text-2xl font-futuristic font-bold mb-6 ${category.colorClass}`}>
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                      }}
                      className={`px-4 py-2 ${category.bgClass} ${category.colorClass} rounded-lg border ${category.borderClass} text-sm font-medium hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

