"use client"

import { useState, useEffect } from "react"

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Animate progress bar smoothly
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Start the slide animation when progress reaches 100%
          setTimeout(() => {
            setIsAnimating(true)
          }, 300) // Small delay after progress completes
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => {
      clearInterval(progressInterval)
    }
  }, [])

  // Handle the end of the slide animation
  const handleTransitionEnd = () => {
    if (isAnimating && onComplete) {
      onComplete()
    }
  }

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-100 transition-transform duration-1000 ease-in-out ${
        isAnimating ? "-translate-y-full" : "translate-y-0"
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="text-center max-w-2xl px-8">
        <blockquote className="text-2xl md:text-3xl font-medium text-black mb-8 italic leading-relaxed">
          "The only way to do great work is to love what you do."
        </blockquote>
        <cite className="text-lg text-gray-600 mb-12 block">— Steve Jobs</cite>

        {/* Loading bar container */}
        <div className="w-80 max-w-full h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#cf8b01] to-[#7d520d] rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        {/* <div className="mt-4 text-sm text-gray-500 font-medium">{Math.round(progress)}%</div> */}
      </div>
    </div>
  )
}
