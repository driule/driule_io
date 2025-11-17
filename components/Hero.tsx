"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Logo from "./Logo";

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  colorRgb: [number, number, number];
  radius: number;
}

interface Explosion {
  id: number;
  x: number;
  y: number;
  intensity: number;
  color: string;
  timestamp: number;
}

// Color definitions
const COLORS = {
  green: { class: "bg-neon-green", rgb: [0, 255, 136] as [number, number, number] },
  cyan: { class: "bg-neon-cyan", rgb: [0, 245, 255] as [number, number, number] },
  purple: { class: "bg-neon-purple", rgb: [183, 148, 246] as [number, number, number] },
};

// Calculate color similarity (0 = identical, 1 = completely different)
function colorSimilarity(rgb1: [number, number, number], rgb2: [number, number, number]): number {
  const maxDistance = Math.sqrt(255 * 255 * 3); // Maximum possible distance
  const distance = Math.sqrt(
    Math.pow(rgb1[0] - rgb2[0], 2) +
    Math.pow(rgb1[1] - rgb2[1], 2) +
    Math.pow(rgb1[2] - rgb2[2], 2)
  );
  return 1 - distance / maxDistance; // 1 = identical, 0 = completely different
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const lastCollisionCheck = useRef<Set<string>>(new Set());
  const explosionIdCounter = useRef(0);

  useEffect(() => {
    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: 20 }, (_, i) => {
      const colorKeys = Object.keys(COLORS) as Array<keyof typeof COLORS>;
      const colorKey = colorKeys[i % colorKeys.length];
      const color = COLORS[colorKey];
      
      return {
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: color.class,
        colorRgb: color.rgb,
        radius: 0.3,
      };
    });
    
    particlesRef.current = initialParticles;
    setParticles(initialParticles);

    const animate = () => {
      setParticles((prevParticles) => {
        const updated = prevParticles.map((p) => {
          let newX = p.x + p.vx;
          let newY = p.y + p.vy;
          let newVx = p.vx;
          let newVy = p.vy;

          // Bounce off walls
          if (newX <= 0 || newX >= 100) {
            newVx = -newVx;
            newX = Math.max(0, Math.min(100, newX));
          }
          if (newY <= 0 || newY >= 100) {
            newVy = -newVy;
            newY = Math.max(0, Math.min(100, newY));
          }

          return {
            ...p,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          };
        });

        // Check for collisions
        const currentCollisions = new Set<string>();
        const newExplosions: Explosion[] = [];

        for (let i = 0; i < updated.length; i++) {
          for (let j = i + 1; j < updated.length; j++) {
            const p1 = updated[i];
            const p2 = updated[j];
            
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const collisionKey = `${Math.min(p1.id, p2.id)}-${Math.max(p1.id, p2.id)}`;

            // Check if particles are colliding (within 2vw distance)
            if (distance < 2 && !lastCollisionCheck.current.has(collisionKey)) {
              currentCollisions.add(collisionKey);
              
              // Calculate color similarity
              const similarity = colorSimilarity(p1.colorRgb, p2.colorRgb);
              
              // Create explosion - similar colors = small subtle sparkles, different colors = slightly bigger
              const intensity = similarity; // 0-1 range (1 = identical, 0 = very different)
              // Invert: similar colors (high intensity) = small, different colors (low intensity) = bigger
              const explosionSize = 0.3 + (1 - intensity) * 1.2; // 0.3-1.5vw (subtle sparkles)
              const explosionBrightness = 0.4 + intensity * 0.5; // 0.4-0.9 (subtle brightness)
              
              // Average position for explosion
              const explosionX = (p1.x + p2.x) / 2;
              const explosionY = (p1.y + p2.y) / 2;
              
              // Average color for explosion
              const avgColor = [
                Math.round((p1.colorRgb[0] + p2.colorRgb[0]) / 2),
                Math.round((p1.colorRgb[1] + p2.colorRgb[1]) / 2),
                Math.round((p1.colorRgb[2] + p2.colorRgb[2]) / 2),
              ];
              
              newExplosions.push({
                id: explosionIdCounter.current++,
                x: explosionX,
                y: explosionY,
                intensity: intensity,
                color: `rgb(${avgColor[0]}, ${avgColor[1]}, ${avgColor[2]})`,
                timestamp: Date.now(),
              });

              // Bounce particles apart
              const angle = Math.atan2(dy, dx);
              const speed1 = Math.sqrt(p1.vx * p1.vx + p1.vy * p1.vy);
              const speed2 = Math.sqrt(p2.vx * p2.vx + p2.vy * p2.vy);
              
              updated[i] = {
                ...p1,
                vx: Math.cos(angle) * speed1 * 1.2,
                vy: Math.sin(angle) * speed1 * 1.2,
              };
              
              updated[j] = {
                ...p2,
                vx: -Math.cos(angle) * speed2 * 1.2,
                vy: -Math.sin(angle) * speed2 * 1.2,
              };
            }
          }
        }

        lastCollisionCheck.current = currentCollisions;
        particlesRef.current = updated;

        // Add new explosions
        if (newExplosions.length > 0) {
          setExplosions((prev) => [...prev, ...newExplosions]);
        }

        return updated;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    // Clean up explosions after animation
    const explosionCleanup = setInterval(() => {
      setExplosions((prev) => prev.filter((e) => Date.now() - e.timestamp < 1000));
    }, 100);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      clearInterval(explosionCleanup);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background particles */}
      <div ref={containerRef} className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full opacity-60 ${particle.color}`}
            style={{
              left: `${particle.x}vw`,
              top: `${particle.y}vh`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              x: "-50%",
              y: "-50%",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        ))}
        
        {/* Explosion effects */}
        <AnimatePresence>
          {explosions.map((explosion) => {
            // Invert intensity for size: similar colors = small, different = bigger
            const size = 0.3 + (1 - explosion.intensity) * 1.2; // 0.3-1.5vw
            const brightness = 0.4 + explosion.intensity * 0.5; // 0.4-0.9
            
            return (
              <motion.div
                key={explosion.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: `${explosion.x}vw`,
                  top: `${explosion.y}vh`,
                  backgroundColor: explosion.color,
                  boxShadow: `0 0 ${size * 1.5}vw ${size * 0.8}vw ${explosion.color}`,
                }}
                initial={{
                  width: 0,
                  height: 0,
                  opacity: brightness,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  width: `${size}vw`,
                  height: `${size}vw`,
                  opacity: [brightness, brightness * 0.8, 0],
                  scale: [0, 1.2, 1.5],
                  x: "-50%",
                  y: "-50%",
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              />
            );
          })}
        </AnimatePresence>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-12"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
          >
            <Logo size={64} />
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-xl md:text-2xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Making dev life fun
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Build stuff: games, web apps, blockchain, tools, ...
            </motion.p>
          </motion.div>

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
              <ArrowDown className="w-6 h-6 text-neon-green opacity-70" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

