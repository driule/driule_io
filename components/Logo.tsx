"use client";

import { motion } from "framer-motion";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 48, className = "" }: LogoProps) {
  const greenColor = "#00ff88";

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]"
      >
        <rect width="32" height="32" rx="6" fill="#0a0e27" />
        {/* Main binary: 0 with strong pulse */}
        <text
          x="12"
          y="20"
          fontFamily="'Courier New', 'Courier', 'Lucida Console', Monaco, Menlo, Consolas, monospace"
          fontSize="18"
          fontWeight="900"
          fill={greenColor}
          textAnchor="middle"
        >
          <tspan x="12" dy="0">
            <animate
              attributeName="opacity"
              values="1;0.3;1"
              dur="1.2s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1;1.2;1"
              dur="1.2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            0
          </tspan>
        </text>
        {/* Slash with subtle pulse */}
        <text
          x="16"
          y="20"
          fontFamily="'Courier New', 'Courier', 'Lucida Console', Monaco, Menlo, Consolas, monospace"
          fontSize="14"
          fontWeight="bold"
          fill={greenColor}
          textAnchor="middle"
          opacity="0.9"
        >
          <tspan>
            <animate
              attributeName="opacity"
              values="0.9;1;0.9"
              dur="1s"
              repeatCount="indefinite"
            />
            /
          </tspan>
        </text>
        {/* Main binary: 1 with opposite phase pulse */}
        <text
          x="20"
          y="20"
          fontFamily="'Courier New', 'Courier', 'Lucida Console', Monaco, Menlo, Consolas, monospace"
          fontSize="18"
          fontWeight="900"
          fill={greenColor}
          textAnchor="middle"
        >
          <tspan x="20" dy="0">
            <animate
              attributeName="opacity"
              values="0.3;1;0.3"
              dur="1.2s"
              repeatCount="indefinite"
            />
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1.2;1;1.2"
              dur="1.2s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
            />
            1
          </tspan>
        </text>
        {/* Strong glow effect circles */}
        <circle cx="12" cy="16" r="7" fill={greenColor} opacity="0.15">
          <animate
            attributeName="r"
            values="7;9;7"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.15;0.3;0.15"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="20" cy="16" r="9" fill={greenColor} opacity="0.3">
          <animate
            attributeName="r"
            values="9;7;9"
            dur="1.2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.15;0.3"
            dur="1.2s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </motion.div>
  );
}

