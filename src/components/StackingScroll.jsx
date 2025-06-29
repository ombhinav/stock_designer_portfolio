"use client"

import { useState, useEffect } from "react"

const StackingScrollShowcase = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A revolutionary web application built with React and Node.js",
      color: "from-purple-600 to-pink-600",
      icon: "🚀",
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Mobile-first design system with seamless user experience",
      color: "from-blue-600 to-cyan-600",
      icon: "📱",
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "AI-powered analytics dashboard with real-time insights",
      color: "from-green-600 to-emerald-600",
      icon: "🤖",
    },
    {
      id: 4,
      title: "Project Delta",
      description: "E-commerce platform with advanced payment integration",
      color: "from-orange-600 to-red-600",
      icon: "🛒",
    },
    {
      id: 5,
      title: "Project Epsilon",
      description: "Cloud infrastructure automation and deployment tools",
      color: "from-indigo-600 to-purple-600",
      icon: "☁️",
    },
  ]

  const getSectionStyle = (index) => {
    const sectionHeight = window.innerHeight
    const triggerPoint = sectionHeight * (index + 1) // Start from second screen
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / sectionHeight))

    return {
      position: "sticky",
      top: `${50+index * 20}px`,
      zIndex: index + 1,
      transform: `translateY(${progress * -50}px) scale(${1 - progress * 0.05})`,
    //   opacity: 1 - progress * 0.3,
      transition: "all 0.1s ease-out",
    }
  }

  const getContentVisibility = (index) => {
    const sectionHeight = window.innerHeight
    const triggerPoint = sectionHeight * (index + 1)
    const nextTriggerPoint = sectionHeight * (index + 2)

    // Hide content when the next section starts to appear
    const shouldHideContent = scrollY >= nextTriggerPoint - sectionHeight * 0.3

    return {
    //   opacity: shouldHideContent ? 0 : 1,
      transform: shouldHideContent ? "translateY(20px)" : "translateY(0px)",
      transition: "all 0.3s ease-out",
      pointerEvents: shouldHideContent ? "none" : "auto",
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Portfolio
          </h1>
          <p className="text-xl text-gray-300 mb-8">Scroll down to explore my work</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div> */}

      {/* Stacking Sections */}
      <div className="">
        {sections.map((section, index) => (
          <div
            key={section.id}
            style={getSectionStyle(index)}
            className={`h-[600px] bg-gradient-to-br ${section.color} rounded-t-3xl mx-4 mb-4 shadow-2xl overflow-hidden relative`}
          >
            {/* Content that disappears when stuck */}
            <div
              style={getContentVisibility(index)}
              className="h-full flex items-center justify-center p-8 relative z-10"
            >
              <div className="text-center text-white max-w-2xl">
                <div className="text-8xl mb-6 animate-pulse">{section.icon}</div>
                <h2 className="text-5xl font-bold mb-6 drop-shadow-lg">{section.title}</h2>
                <p className="text-xl leading-relaxed drop-shadow-md mb-8">{section.description}</p>
                <div className="flex justify-center space-x-4">
                  <button className="px-8 py-3 bg-white opacity-20 backdrop-blur-sm rounded-full hover:opacity-30 transition-all duration-300 transform hover:scale-105 ">
                    View Details
                  </button>
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 font-semibold">
                    Live Demo
                  </button>
                </div>
              </div>
            </div>

            {/* Decorative Elements that also fade */}
            <div
              style={getContentVisibility(index)}
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
            >
              <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to allow last section to stack properly */}
      <div className="h-screen"></div>

      {/* Footer */}
      {/* <div className="h-screen bg-black flex items-center justify-center text-white relative z-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-8">Ready to bring your ideas to life?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default StackingScrollShowcase
