"use client"

import Dresscue from "../assets/Dresscue.jpeg";
import Cms from "../assets/Cms.jpeg";
import Faena from "../assets/Faena.png";
import Roen from "../assets/Roen.jpeg";
import React, { useState, useEffect } from "react"

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
    category: "UI/UX Case study",
    title: "Dresscue",
    subtitle: "Styling Smarter, Every Day",
    description: `Dresscue is a personal wardrobe styling app that helps users overcome the daily what to wear dilemma. It generates outfit suggestions based on the user's existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others.
`,
    toolsUsed: "Figma · FigJam · Illustrator · Photoshop",
    skills: `· User Research · Journey Mapping · Wireframing
· Visual Design · Design Systems · UX Writing · Mobile UI`,
    img: Dresscue,
  },
  {
    id: 2,
    category: "UI/UX Case study",
    title: "Redesigning User Interfac",
    subtitle: "College Management System",
    description: `A modern e-commerce platform built with React and Node.js that provides seamless shopping experience. The platform features advanced search capabilities, personalized recommendations, and secure payment processing.
The project involved creating a scalable architecture that can handle high traffic loads while maintaining optimal performance and user experience.`,
    toolsUsed: "Figma · Illustrator · Photoshop",
    skills: `User Research · Journey Mapping · Wireframing · Dashboard Design · Information Architecture · Visual Design · Interaction Design · Accessibility· Task Flow Optimization`,
    img: Cms,
  },
  {
    id: 3,
    category: "Visual & Branding Designer",
    title: "Faena Hotels ",
    subtitle: "Defining a Visual Language of Luxury",
    description: `For this project, I developed a comprehensive branding manual for Faena Hotels, a brand known for its artistic, luxurious identity. The work included creating logo explorations, final logo compositions, and an original pattern system inspired by the brand’s aesthetic and storytelling. The brand manual served as a visual guideline, detailing logo usage, color palettes, typography, and pattern application—ensuring design consistency across digital and print touchpoints.`,
    toolsUsed: "Illustrator · Photoshop · InDesign",
    skills: `Logo Design · Brand Identity · Pattern Design · Typography
Visual Storytelling · Layout Design · Branding Systems
Design Documentation · Composition · Color Theory`,
    img: Faena,
  },
  {
    id: 4,
    category: "UI/UX Case study",
    title: "ROEN",
    subtitle: "Your Skin, Your Story",
    description: `As part of a branding and web design initiative for HAE Enterprises, I redesigned the digital experience for Roén, a luxury makeup brand focused on clean, effective beauty. The goal was to elevate the online shopping experience with a user-centric and emotionally engaging interface. I crafted a clean landing page, intuitive product pages, and an interactive before/after mascara slider that showcased product effectiveness while maintaining brand elegance. The outcome was a seamless, responsive experience that blended storytelling with commerce.`,
    toolsUsed: "Figma · Illustrator · Photoshop",
    skills: `User Flow Design · Wireframing · Visual Design · E-commerce UX
Responsive Design · Microinteractions · UX Writing · UI Animation
Interaction Design · Accessibility · Brand Storytelling`,
    img: Roen,
  },
];

  const getSectionStyle = (index) => {
    const sectionHeight = window.innerHeight
    const triggerPoint = sectionHeight * (index + 1) // Start from second screen
    const progress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / sectionHeight))

    return {
      position: "sticky",
      top: `${120+index * 20}px`,
      zIndex: 50+index + 1,
      transform: `translateY(${progress * -50}px) scale(${1 - progress * 0.05})`,
    //   opacity: 1 - progress * 0.3,
      transition: "all 0.1s ease-out",
    }
  }

  return (
    <div className="min-h-screen bg-black pb-40">
     
        <div className="sticky top-0 left-0 w-full z-50 bg-black px-15 pt-10 pb-10">
        <h1 className="text-white text-7xl pl-10 mb-30 font-myfontMed">Work</h1>
      </div>
     
      <div className="px-15">

        {sections.map((section, index) => (
  <div
    key={section.id}
    style={getSectionStyle(index)}
    className="min-h-screen flex items-center justify-center py-8 "
  >
    <div className=" w-full flex flex-col lg:flex-row gap-8 items-center bg-white rounded-[27px] overflow-hidden relative border-2 border-gray-200">
      {/* Left Card Section */}
      <div className="bg-white rounded-[57px] shadow-lg px-12 pb-12 py-8 max-w-lg w-full m-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xl font-light text-black">{section.category}</p>
            <h1 className="text-4xl font-medium text-black">{section.title}</h1>
            <h2 className="text-2xl font-normal text-black">{section.subtitle}</h2>
          </div>

          <div className="text-black leading-relaxed text-[13px]">
            {section.description.split('\n').map((paragraph, idx) => (
              <React.Fragment key={idx}>
                {paragraph}
                {idx < section.description.split('\n').length - 1}
              </React.Fragment>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-black text-base mb-1">Tools Used:</h3>
              <p className="font-normal text-black text-[13px]">{section.toolsUsed}</p>
            </div>

            <div>
              <h3 className="font-semibold text-black text-base mb-1">Skills Applied:</h3>
              <p className="font-normal text-black text-[13px] leading-relaxed">
                {section.skills.split('\n').map((skill, idx) => (
                  <React.Fragment key={idx}>
                    {skill}
                    {idx < section.skills.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 max-w-4xl pr-10">
        <img
          className="w-full h-auto rounded-lg shadow-lg"
          alt={`${section.title} showcase`}
          src={section.img}
        />
      </div>
    </div>
  </div>
))}
        
        {/* <div className="bg-[#f9f9f9] min-h-screen flex items-center justify-center p-8">
        <div className="max-w-7xl w-full flex flex-col lg:flex-row gap-8 items-center">
        Left Card Section
        <div className="bg-white rounded-[57px] shadow-lg p-12 max-w-lg w-full">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xl font-light text-black">UI/UX Case study</p>
              <h1 className="text-4xl font-medium text-black">Dresscue</h1>
              <h2 className="text-4xl font-normal text-black">Styling Smarter, Every Day</h2>
            </div>

            <div className="text-base text-black leading-relaxed">
              <span className="font-normal">Dresscue is a </span>
              <span className="font-medium">personal wardrobe styling app</span>
              <span className="font-normal"> that helps users overcome the daily </span>
              <span className="font-medium">"what to wear"</span>
              <span className="font-normal"> dilemma. It generates outfit suggestions based on the user's existing wardrobe, personal preferences, and current fashion trends. The app blends personalization with trend-awareness and includes a social feature where users can share their outfits and get inspired by others.</span>
              <br /><br />
              <span className="font-normal">I led the end-to-end design process—from user research and journey mapping to wireframes, UI design, and prototyping—ensuring a seamless, intuitive, and visually engaging experience.</span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-black text-base mb-1">Tools Used:</h3>
                <p className="font-normal text-black text-base">Figma · FigJam · Illustrator · Photoshop</p>
              </div>

              <div>
                <h3 className="font-semibold text-black text-base mb-1">Skills Applied:</h3>
                <p className="font-normal text-black text-base leading-relaxed">
                  · User Research · Journey Mapping · Wireframing<br />
                  · Visual Design · Design Systems · UX Writing · Mobile UI
                </p>
              </div>
            </div>
          </div>
        </div>

        Right Image Section
        <div className="flex-1 max-w-4xl">
          <img
            className="w-full h-auto rounded-lg "
            alt="Dresscue app showcase"
            src={Dresscue}
          />
        </div>
      </div>
    </div> */}


///////

        {/* {sections.map((section, index) => (
        <div
          key={section.id}
          style={getSectionStyle(index)}
          className="h-[600px] bg-white flex rounded-3xl mx-4 mb-4 overflow-hidden relative border-2 border-gray-200"
        >
          Left Side - 40% Content
          <div className="w-3/7 flex flex-col justify-center p-8 relative z-10">
            <div className="max-w-full">
              Title - Big Text
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {section.title.split(" – ")[0]}
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-gray-700">{section.title.split(" – ")[1]}</h2>

              Description
              <p className="text-base text-gray-700 leading-relaxed mb-8">{section.description}</p>

              Tools Used
              <div className="mb-6">
                <h3 className=" font-semibold text-gray-900 mb-1 text-2xl">Tools Used:</h3>
                <div className="flex justify-between text-base text-gray-700">
                  {section.toolsUsed.split(" · ").map((tool, index) => (
                    <span key={index}>{tool.trim()}</span>
                  ))}
                </div>
              </div>

              Skills Applied
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Skills Applied:</h3>
                <p className="text-base text-gray-700">{section.skills}</p>
              </div>
            </div>
          </div>

          Right Side - 60% Image
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
      ))} */}


/////////


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
