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
    title: "Dresscue – Styling Smarter, Every Day",
    description:
      'Dresscue is a wardrobe styling app that helps users overcome the daily "what to wear" dilemma. It suggests outfits based on their wardrobe, preferences, and current trends. The app combines personalization with trend-awareness and includes a social feature for sharing and inspiration. I led the full design process—from research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, engaging experience.',
    toolsUsed: "Figma · FigJam · Illustrator · Photoshop",
    skills:
      "User Research · Journey Mapping · Wireframing · Visual Design · Interaction Design · Design Systems · UX Writing · Mobile UI · Trend Integration · Prototyping · Human-AI Interaction (HAI)",
    color: "indigo-600",
    img: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;0,0.190xh&resize=1200:*",
    },
    {
      id: 2,
    title: "Dresscue – Styling Smarter, Every Day",
    description:
      'Dresscue is a personal wardrobe styling app that helps users overcome the daily "what to wear" dilemma. It generates outfit suggestions based on the user\'s existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others. I led the end-to-end design process—from user research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, intuitive, and visually engaging experience.',
    toolsUsed: "Figma · FigJam · Illustrator · Photoshop",
    skills:
      "User Research · Journey Mapping · Wireframing · Visual Design · Interaction Design · Design Systems · UX Writing · Mobile UI · Trend Integration · Prototyping · Human-AI Interaction (HAI)",
    color: "indigo-600",
    img: "https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
    {
      id: 3,
    title: "Dresscue – Styling Smarter, Every Day",
    description:
      'Dresscue is a personal wardrobe styling app that helps users overcome the daily "what to wear" dilemma. It generates outfit suggestions based on the user\'s existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others. I led the end-to-end design process—from user research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, intuitive, and visually engaging experience.',
    toolsUsed: "Figma · FigJam · Illustrator · Photoshop",
    skills:
      "User Research · Journey Mapping · Wireframing · Visual Design · Interaction Design · Design Systems · UX Writing · Mobile UI · Trend Integration · Prototyping · Human-AI Interaction (HAI)",
    color: "indigo-600",
    img: "https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
    {
      id: 4,
    title: "Dresscue – Styling Smarter, Every Day",
    description:
      'Dresscue is a personal wardrobe styling app that helps users overcome the daily "what to wear" dilemma. It generates outfit suggestions based on the user\'s existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others. I led the end-to-end design process—from user research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, intuitive, and visually engaging experience.',
    toolsUsed: "Figma · FigJam · Illustrator · Photoshop",
    skills:
      "User Research · Journey Mapping · Wireframing · Visual Design · Interaction Design · Design Systems · UX Writing · Mobile UI · Trend Integration · Prototyping · Human-AI Interaction (HAI)",
    color: "indigo-600",
    img: "https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
    },
    {
      id: 5,
    title: "Dresscue – Styling Smarter, Every Day",
    description:
      'Dresscue is a personal wardrobe styling app that helps users overcome the daily "what to wear" dilemma. It generates outfit suggestions based on the user\'s existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others. I led the end-to-end design process—from user research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, intuitive, and visually engaging experience.',
    toolsUsed: "Figma · FigJam · Illustrator · Photoshop",
    skills:
      "User Research · Journey Mapping · Wireframing · Visual Design · Interaction Design · Design Systems · UX Writing · Mobile UI · Trend Integration · Prototyping · Human-AI Interaction (HAI)",
    color: "indigo-600",
    img: "https://img.freepik.com/premium-vector/file-folder-vector_153097-3237.jpg",
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
          className="h-[600px] bg-white flex rounded-3xl mx-4 mb-4 overflow-hidden relative border-2 border-gray-200"
        >
          {/* Left Side - 40% Content */}
          <div className="w-3/7 flex flex-col justify-center p-8 relative z-10">
            <div className="max-w-full">
              {/* Title - Big Text */}
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {section.title.split(" – ")[0]}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-gray-700">{section.title.split(" – ")[1]}</h2>

              {/* Description */}
              <p className="text-base text-gray-700 leading-relaxed mb-8">{section.description}</p>

              {/* Tools Used */}
              <div className="mb-6">
                <h3 className=" font-semibold text-gray-900 mb-1 text-2xl">Tools Used:</h3>
                <div className="flex justify-between text-base text-gray-700">
                  {section.toolsUsed.split(" · ").map((tool, index) => (
                    <span key={index}>{tool.trim()}</span>
                  ))}
                </div>
              </div>

              {/* Skills Applied */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Skills Applied:</h3>
                <p className="text-base text-gray-700">{section.skills}</p>
              </div>
            </div>
          </div>

          {/* Right Side - 60% Image */}
          <div className="w-4/7 h-full flex items-center justify-center bg-gray-100 relative">
            <div className="w-full h-full flex items-center justify-center p-8">
              <img
                src={section.img || "/placeholder.svg"}
                alt={section.title}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      ))}

        {/* {sections.map((section, index) => (
          <div
            key={section.id}
            style={getSectionStyle(index)}
            className={`h-[600px] bg-white flex rounded-3xl mx-4 mb-4 shadow-[-8px_-10px_28px_0px_rgba(0,_0,_0,_0.1)] overflow-hidden relative `}
          >
            <div 
              className="h-full flex items-center justify-center p-8 relative z-10"
            >
              <div className="text-center text-white max-w-2xl">
                
                <h2 className="text-5xl text-black font-bold mb-6  drop-shadow-md ">{section.title}</h2>
                <p className="text-xl text-black leading-relaxed drop-shadow-md mb-8">{section.description}</p>
               
              </div>
            </div>
            <div className="bg-blue-800 w-1/2 ml-auto flex justify-center ">
                <img src={section.img}  className="mt-36 rounded-4xl h-80 w-80"  />
            </div>
          </div>
        ))} */}
      </div>

      {/* Spacer to allow last section to stack properly */}
      {/* <div className="h-screen"></div> */}

    </div>
  )
}

export default StackingScrollShowcase
