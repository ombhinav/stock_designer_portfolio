import { useState } from "react"

function StrikeableText({ children, isToggled }) {
  return (
    <span className={`relative transition-all duration-700 ${isToggled ? "opacity-40" : ""}`}>
      {children}
      <span className={`absolute inset-0 border-t border-white transition-all duration-700 ${
        isToggled ? "scale-x-100" : "scale-x-0"
      } origin-left`} style={{top: '50%'}}></span>
    </span>
  );
}

function AboutMe2() {
    const [isToggled, setIsToggled] = useState(false)
  return (
    <div className="w-full bg-black pb-80 text-white pt-30">
        <div className="pl-30">
            <h1 className="text-5xl font-light mb-10 text-white newsreader-font">I am?</h1>
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
        <div className="flex">
            <div className="pl-30">
                <div className="transition-all duration-400 max-w-sm mt-8">
                <p className="text-base leading-relaxed">
                  <StrikeableText isToggled={isToggled}>Originally from </StrikeableText>
                     Delhi (NCR), I started <span className={isToggled ? "line-through opacity-40" : ""}>out as a finance/</span>
                  actuarial professional.{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>By destiny, I built a product and</span>{" "}
                  now a product designer.{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>In the past I have</span> built 0 to 1
                  products, <span className={isToggled ? "line-through opacity-40" : ""}>scaling them from</span> 1 to
                  10, and <span className={isToggled ? "line-through opacity-40" : ""}>further growing them from</span>{" "}
                  10 to 100.{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>
                    My strong background in actuarial science makes me
                  </span>{" "}
                  good with data,{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>
                    and every day, little by little I'm
                  </span>{" "}
                  enhancing my process and intuition{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>as a product builder.</span>
                </p>
              </div>
            </div>

            <div className="pl-15 mt-30">
              <div className="transition-all duration-300 max-w-sm mt-16">
                <p className="text-base leading-relaxed">
                  <span className={isToggled ? "line-through opacity-40" : ""}>I am a strong</span> believer in hard
                  work.{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>
                    No matter how many times I need to start fresh, the
                  </span>{" "}
                  joy of creating something exactly as envisioned{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>
                    is what I chase. I constantly have the
                  </span>{" "}
                  urge to build{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>
                    or create things. It doesn't have to be design; it could be art, a new dish, doodles, comics,
                    excuses, or many other things.
                  </span>
                </p>
              </div>
            </div>
    
            <div className="pl-15 mt-60">
                <div className="transition-all duration-300 max-w-xs mt-24">
                <p className="text-base leading-relaxed">
                    <span className={isToggled ? "line-through opacity-40" : ""}>
                        I value{" "}
                    </span>
                   happiness and transparency{" "}
                  <span className={isToggled ? "line-through opacity-40" : ""}>
                    in the people around me, and working in such a culture is something that truly interests me.
                  </span>
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMe2
