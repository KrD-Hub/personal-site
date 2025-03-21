"use client"

import { motion } from "motion/react"
import React, { useState, useEffect } from "react"

function FloatingPaths({ position, mousePosition }: { position: number, mousePosition: { x: number, y: number } }) {
  // Generate refined, elegant colors with darker tones
  const getColor = (index: number) => {
    // Create a more subtle, darker color palette
    const baseHue = 220; // Blue base for a professional look
    const hue = (baseHue + index * 10 + mousePosition.x * 0.05) % 360
    return `hsla(${hue}, 100%, 50%, 0.25)`
  }

  const paths = Array.from({ length: 24 }, (_, i) => {
    // Calculate mouse influence - with safeguards for server-side rendering
    const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 1000
    const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800
    
    const mouseXInfluence = (mousePosition.x / windowWidth - 0.5) * 160
    const mouseYInfluence = (mousePosition.y / windowHeight - 0.5) * 160

    return {
      id: i,
      d: `M-${380 - i * 8 * position + mouseXInfluence * 0.3} -${189 + i * 9 + mouseYInfluence * 0.3}C-${
        380 - i * 8 * position + mouseXInfluence * 0.5
      } -${189 + i * 9 + mouseYInfluence * 0.5} -${312 - i * 8 * position + mouseXInfluence * 0.7} ${216 - i * 9 + mouseYInfluence * 0.7} ${
        152 - i * 8 * position + mouseXInfluence
      } ${343 - i * 9 + mouseYInfluence}C${616 - i * 8 * position - mouseXInfluence} ${470 - i * 9 - mouseYInfluence} ${
        684 - i * 8 * position - mouseXInfluence * 0.5
      } ${875 - i * 9 - mouseYInfluence * 0.5} ${684 - i * 8 * position - mouseXInfluence * 0.3} ${875 - i * 9 - mouseYInfluence * 0.3}`,
      width: 0.3 + i * 0.03,
      color: getColor(i),
    }
  })

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-slate-950/30 dark:text-white/30" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.3 + path.id * 0.03}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: [0, 1],
              opacity: [0, 1, 1, 0],
              pathOffset: [0, 1],
            }}
            transition={{
              duration: 15 + Math.random() * 5, // 15-20 segundos de duração
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 130 + Math.random() * 50, // 130-180 segundos (2.16-3 minutos) entre aparições
              times: [0, 0.4, 0.9, 1], // Controlling the timing of opacity changes
              ease: [0.25, 0.1, 0.25, 1], // Easing for a wind-like effect
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export function BackgroundPaths() {
  // Track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return

    const handleMouseMove = (e: MouseEvent) => {
      // Add dampening for more elegant movement
      setMousePosition(prev => ({ 
        x: prev.x + (e.clientX - prev.x) * 0.1,
        y: prev.y + (e.clientY - prev.y) * 0.1
      }))
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <FloatingPaths position={1} mousePosition={mousePosition} />
      <FloatingPaths position={-1} mousePosition={mousePosition} />
    </div>
  )
} 