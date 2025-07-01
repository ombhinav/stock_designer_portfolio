"use client"

import { useEffect, useState } from "react"


function HorizontalLine({
  width = "100vw",
  height = "1px",
  color = "black",
  duration = 1000,
  delay = 0,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div
      className={`bg-${color} ${className}`}
      style={{
        width,
        height,
        backgroundColor: color === "black" ? "#000000" : color,
        transformOrigin: "center",
        transform: isVisible ? "scaleX(1)" : "scaleX(0)",
        transition: `transform ${duration}ms ease-out`,
      }}
    />
  )
}

export default HorizontalLine
