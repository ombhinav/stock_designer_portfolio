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
      title: "Respond to a debt lawsuit",
      icon: "🌘",
      description: "A revolutionary web application built with React and Node.js",
      buttonText: "View Project",
      color: "from-purple-600 to-pink-600",
      img:"https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
    {
      id: 2,
      title: "Respond to a debt lawsuit",
      icon: "🌘",
      description: "A revolutionary web application built with React and Node.js",
      buttonText: "View Project",
      color: "from-purple-600 to-pink-600",
      img:"https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
    {
      id: 3,
      title: "Respond to a debt lawsuit",
      icon: "🌘",
      description: "A revolutionary web application built with React and Node.js",
      buttonText: "View Project",
      color: "from-purple-600 to-pink-600",
      img:"https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
    {
      id: 4,
      title: "Respond to a debt lawsuit",
      icon: "🌘",
      description: "A revolutionary web application built with React and Node.js",
      buttonText: "View Project",
      color: "from-purple-600 to-pink-600",
      img:"https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
    {
      id: 5,
      title: "Respond to a debt lawsuit",
      icon: "🌘",
      description: "A revolutionary web application built with React and Node.js",
      buttonText: "View Project",
      color: "from-purple-600 to-pink-600",
      img:"https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
  ]

  const getSectionStyle = (index) => {
    const sectionHeight = window.innerHeight
    const triggerPoint = sectionHeight * (index + 1) // Start from second screen
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / sectionHeight))

    return {
      position: "sticky",
      top: `${200+index * 20}px`,
      zIndex: 50+index + 1,
      transform: `translateY(${progress * -50}px) scale(${1 - progress * 0.05})`,
    //   opacity: 1 - progress * 0.3,
      transition: "all 0.1s ease-out",
    }
  }

  return (
    <div className="min-h-screen bg-black pb-40">
     
        <div className="sticky top-0 left-0 w-full z-50 bg-black px-15 pt-10 pb-30">
        <h1 className="text-white text-7xl pl-10 mb-30 font-myfontMed">Work</h1>
      </div>
     
      {/* Stacking Sections */}
      <div className="px-15">
        {sections.map((section, index) => (
          <div
            key={section.id}
            style={getSectionStyle(index)}
            className={`h-[600px] bg-white flex rounded-3xl mx-4 mb-4 shadow-[-8px_-10px_28px_0px_rgba(0,_0,_0,_0.1)] overflow-hidden relative `}
          >
            {/* Content that disappears when stuck */}
            <div
            //   style={getContentVisibility(index)}
              className="h-full flex items-center justify-center p-8 relative z-10"
            >
              <div className="text-center text-white max-w-2xl">
                {/* <div className="text-8xl mb-6 ">{section.icon}</div> */}
                <h2 className="text-5xl text-black font-bold mb-6  drop-shadow-md ">{section.title}</h2>
                <p className="text-xl text-black leading-relaxed drop-shadow-md mb-8">{section.description}</p>
               
              </div>
            </div>
            <div className="bg-blue-800 w-1/2 ml-auto flex justify-center ">
                <img src={section.img}  className="mt-36 rounded-4xl h-80 w-80"  />
            </div>
          </div>
        ))}
      </div>

      {/* Spacer to allow last section to stack properly */}
      {/* <div className="h-screen"></div> */}

    </div>
  )
}

export default StackingScrollShowcase
