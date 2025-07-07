import { useState } from "react"

function AboutMe() {
    const [isToggled, setIsToggled] = useState(false)
  return (
    <>
    
    <div className="w-full bg-black pb-30 text-white pt-30">
        <div className="pl-30">
            <h1 className=" font-myfontMed text-5xl mb-10 text-white ">I am?</h1>
            <button
                    onClick={() => setIsToggled(!isToggled)}
                    className={`relative inline-flex h-10 w-18 items-center rounded-full transition-colors cursor-none  focus:ring-offset-black ${
                        isToggled ? "bg-[#cf8b01] cursor-none" : "bg-gray-400 cursor-none"
                    }`}
                    >
                    <span
                        className={`inline-block h-7 w-7 transform rounded-full cursor-none bg-white shadow-[2px_14px_19px_-1px_rgba(0,_0,_0,_0.1)] transition-transform ${
                            isToggled ? "translate-x-10" : "translate-x-1"  
                        }`}
                        />
            </button>
        </div>
        <div className="flex px-30">
            <div className="text-[#cccccc]">
                <div className="transition-all duration-300 max-w-sm mt-16">
                <p className="text-base leading-relaxed font-myfontText">
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>Hey there! I’m</span> Prachi — a UI/UX designer
                  {" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                    and
                  </span>{" "}
                  NIFT grad{" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                    with a passion for creating
                  </span>{" "}
                  intuitive, user-centered {" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                  digital experiences. Skilled in  and responsive design
                  </span>{" "}
                  Figma, UX research, wireframing,{" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                  and
                  </span>{" "}
                  responsive design.{" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                  I love turning real-world problems into    
                  </span>{" "}
                  clean and functional interfaces{" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                  that feel good and look even better.
                  </span>{" "}
                </p>
              </div>
            </div>

            <div className="pl-15 mt-35 text-[#cccccc]">
              <div className="transition-all duration-300 max-w-sm mt-16">
                <p className="text-base leading-relaxed font-myfontText">
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>I've got a bit of an OCD when it comes to keeping things</span> neat and 
                  tidy{" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                    and it shows in my 
                  </span>{" "}
                  pixel-perfect layouts{" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                    strong sense of
                  </span>{" "}
                 clarity, consistency{" "}
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                    and
                  </span>{" "}
                  modern visual language.
                </p>
              </div>
            </div>
    
            <div className="px-15 mt-60 text-[#cccccc]">
                <div className="transition-all duration-300 max-w-xs mt-24">
                <p className="text-base leading-relaxed font-myfontText">
                    <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                        Oh, and{" "}
                    </span>
                   fashion
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                    ? Big YES. I’ve got a knack for 
                  </span>{" "}
                  styling fits
                  <span className={isToggled ? "line-through opacity-40 transition-all duration-700" : ""}>
                    , so if we work together, you might just get some unexpected office outfit inspo along with  
                  </span>{" "}
                      sleek design solutions.
                  

                </p>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutMe
