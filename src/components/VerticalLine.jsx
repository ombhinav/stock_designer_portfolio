"use client"

import { useEffect, useState } from "react"


function VerticalLine({
  height = "900px",
  width = "1px",
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
        height,
        width,
        backgroundColor: color === "black" ? "#000000" : color,
        transformOrigin: "top",
        transform: isVisible ? "scaleY(1)" : "scaleY(0)",
        transition: `transform ${duration}ms ease-out`,
      }}
    />
  )
}

export default VerticalLine
