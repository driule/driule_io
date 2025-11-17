"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100;
          const randomY = Math.random() * 100;
          const randomDuration = Math.random() * 3 + 2;
          const randomDelay = Math.random() * 2;
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-60"
              initial={{
                x: `${randomX}vw`,
                y: `${randomY}vh`,
              }}
              animate={{
                y: [`${randomY}vh`, `${(randomY + 30) % 100}vh`],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: randomDuration,
                repeat: Infinity,
                delay: randomDelay,
              }}
            />
          );
        })}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          >
            <Sparkles className="w-12 h-12 text-neon-cyan" />
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-futuristic font-bold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient">driule</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Developer • Creator • Innovator
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building games, blockchain solutions, and dev tools.
            <br />
            Founder of <span className="text-neon-cyan font-semibold">Codyfight</span>.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6 text-neon-cyan opacity-70" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

