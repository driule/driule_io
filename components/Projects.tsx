"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Package, Linkedin } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  link: string;
  github: string;
  npm?: string;
  linkedin?: string;
}

const projects: Project[] = [
  {
    title: "Experience",
    description: "Built solutions at Paysera, Bored Panda, Codyfight. Currently at TAO Testing.",
    tags: ["Fintech", "Media", "Education", "AI", "blockchain"],
    color: "from-neon-cyan to-neon-green",
    link: "#",
    github: "#",
    linkedin: "https://www.linkedin.com/in/andrius-ja%C5%A1kauskas/",
  },
  {
    title: "Codyfight",
    description: "Competitive coding platform.",
    tags: ["Web3", "Game Dev", "Web Platform", "Competitive"],
    color: "from-neon-green to-neon-cyan",
    link: "#",
    github: "https://github.com/codyfight",
  },
  {
    title: "AI Contextor",
    description: "Developer tool. Streamlines AI documentation. Manages project context.",
    tags: ["Dev Tools", "Productivity", "Open Source", "AI", "documentation"],
    color: "from-neon-pink to-ghibli-green",
    link: "https://www.npmjs.com/package/ai-contextor",
    github: "https://github.com/driule/ai-contextor",
    npm: "https://www.npmjs.com/package/ai-contextor",
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
            <span className="text-gradient">Builds</span>
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
                  <h3 className="text-2xl font-futuristic font-bold mb-3 text-neon-cyan group-hover:text-neon-green transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-xs rounded-full border ${
                          index === 0
                            ? "bg-neon-green/10 text-neon-green border-neon-green/30"
                            : index === 1
                            ? "bg-neon-cyan/10 text-neon-cyan border-neon-cyan/30"
                            : "bg-neon-purple/10 text-neon-purple border-neon-purple/30"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.npm && (
                      <a
                        href={project.npm}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-neon-green hover:text-neon-cyan transition-colors"
                      >
                        <Package className="w-4 h-4" />
                        <span className="text-sm">npm</span>
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
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="text-sm">LinkedIn</span>
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

