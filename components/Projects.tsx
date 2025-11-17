"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Codyfight",
    description:
      "A competitive coding platform that gamifies programming challenges. Combining game mechanics with real coding skills.",
    tags: ["Game Dev", "Web Platform", "Competitive"],
    color: "from-neon-cyan to-neon-purple",
    link: "#",
    github: "#",
  },
  {
    title: "Project 2",
    description: "A blockchain-based solution for decentralized applications with innovative features.",
    tags: ["Blockchain", "Web3", "DApp"],
    color: "from-neon-purple to-neon-pink",
    link: "#",
    github: "#",
  },
  {
    title: "Dev Tool",
    description: "A powerful developer tool that streamlines workflow and boosts productivity.",
    tags: ["Dev Tools", "Productivity", "Open Source"],
    color: "from-neon-pink to-ghibli-green",
    link: "#",
    github: "#",
  },
];

export default function Projects() {
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
            <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-space-light/50 backdrop-blur-sm rounded-2xl p-6 glow-soft border border-neon-cyan/20 hover:border-neon-cyan/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-futuristic font-bold mb-3 text-neon-cyan group-hover:text-neon-pink transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-neon-cyan/10 text-neon-cyan text-xs rounded-full border border-neon-cyan/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neon-cyan hover:text-neon-pink transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="text-sm">Visit</span>
                      </a>
                    )}
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

