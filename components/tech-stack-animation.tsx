"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const techStack = [
  { name: "Next.js", icon: "⚡", color: "#000000" },
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "TypeScript", icon: "📘", color: "#3178C6" },
  { name: "Laravel", icon: "🔥", color: "#FF2D20" },
  { name: "PHP", icon: "🐘", color: "#777BB4" },
]

export function TechStackAnimation() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      {/* Central Hub */}
      <motion.div
        className="absolute w-20 h-20 rounded-full glass-card glow-purple flex items-center justify-center text-2xl font-bold text-primary z-10"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      >
        M
      </motion.div>

      {/* Orbiting Tech Icons */}
      {techStack.map((tech, index) => {
        const angle = index * 72 * (Math.PI / 180) // 72 degrees apart
        const radius = 120

        return (
          <motion.div
            key={tech.name}
            className="absolute w-16 h-16 rounded-full glass-card flex items-center justify-center text-2xl cursor-pointer group"
            style={{
              x: Math.cos(angle) * radius,
              y: Math.sin(angle) * radius,
            }}
            animate={{
              rotate: [0, 360],
              x: [Math.cos(angle) * radius, Math.cos(angle + 0.1) * (radius + 10), Math.cos(angle) * radius],
              y: [Math.sin(angle) * radius, Math.sin(angle + 0.1) * (radius + 10), Math.sin(angle) * radius],
            }}
            transition={{
              rotate: {
                duration: 15 + index * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              x: {
                duration: 4 + index * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              y: {
                duration: 4 + index * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: `0 0 20px ${tech.color}50`,
            }}
          >
            <span className="text-2xl">{tech.icon}</span>
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
            >
              {tech.name}
            </motion.div>
          </motion.div>
        )
      })}

      {/* Floating Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            x: Math.random() * 400 - 200,
            y: Math.random() * 400 - 200,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}
