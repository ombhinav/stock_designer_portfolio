import { useState } from "react";
import design_girl from "../assets/design_girl.svg";
import Dialog from "./Dialog";

function Hero() {
  const [showDialog, setShowDialog] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

   const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    
    setMousePos({ 
      x: e.clientX, 
      y: e.clientY - rect.top - 18,
    });
  };


  return (
    <div className="newsreader-font relative">
      <div className="text-7xl flex justify-center pb-7">
        UI/UX Designer
      </div>
      <div className="text-2xl flex justify-center text-red-700 pb-7">
        Là Fuori
      </div>
      <div className="flex justify-center mt-7 relative">
        <img
          src={design_girl}
          className="h-120 cursor-none "
          onMouseEnter={() => setShowDialog(true)}
          onMouseLeave={() => setShowDialog(false)}
          onMouseMove={handleMouseMove}
          alt="Designer"
        />
        
        {showDialog && (
          <div
            className="absolute pointer-events-none z-10"
            style={{
              left: mousePos.x,
              top: mousePos.y,
              transform: 'translate(-10%, -100%)', 
            }}
          >
            <Dialog />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;