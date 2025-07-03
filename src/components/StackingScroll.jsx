"use client"

import Dresscue from "../assets/Dresscue.jpeg";
import Cms from "../assets/Cms.jpeg";
import Frame from "../assets/Frame.png"
import Faena from "../assets/Faena.jpg";
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
    title: "Redesigning User Interface",
    subtitle: "College Management System",
    description: `A modern e-commerce platform built with React and Node.js that provides seamless shopping experience. The platform features advanced search capabilities, personalized recommendations, and secure payment processing.
The project involved creating a scalable architecture that can handle high traffic loads while maintaining optimal performance and user experience.`,
    toolsUsed: "Figma · Illustrator · Photoshop",
    skills: `User Research · Journey Mapping · Wireframing · Dashboard Design · Information Architecture · Visual Design · Interaction Design · Accessibility· Task Flow Optimization`,
    img: Frame,
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

  const getSectionBgColor = (id) => {
  const colors = {
    1: "#f9f8f8", // light gray
    2: "white", // light blue
    3: "white", // very light blue
    4: "black", // light orange
    5: "#f0fdf4", // light green
    6: "#fdf2f8", // light pink
    7: "#f5f3ff", // light purple
    8: "#fffbeb", // light yellow
  }

  return colors[id] || "#f9f8f8" // default to light gray if id not found
}

 const getSectionBorderColor = (id) => {
  const colors = {
    1: "#f9f8f8", // light gray
    2: "black", // light blue
    3: "black", // very light blue
    4: "black", // light orange
    5: "#f0fdf4", // light green
    6: "#fdf2f8", // light pink
    7: "#f5f3ff", // light purple
    8: "#fffbeb", // light yellow
  }

  return colors[id] || "#f9f8f8" // default to light gray if id not found
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
    <div className=" w-full flex flex-col lg:flex-row items-center rounded-[27px] overflow-hidden relative border-2 " style={{ backgroundColor: getSectionBgColor(section.id), borderColor: getSectionBorderColor(section.id)}}>
      {/* Left Card Section */}
      <div className="bg-white rounded-[57px] shadow pl-12 pb-12 py-8 max-w-lg w-full ml-6 my-6">
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
      <div className="flex-1 max-w-4xl">
        <img
          className=" rounded-lg "
          alt={`${section.title} showcase`}
          src={section.img}
          height={10000}
          width={22000}
        />
      </div>
    </div>
  </div>
))}
        

      </div>
    </div>
  )
}

export default StackingScrollShowcase
