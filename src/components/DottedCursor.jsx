import { useState, useEffect } from "react";
import Dialog from "./Dialog";
import DarkCursor from "./DarkCursor";
function DottedCursor({isHovering, isHoveringBlack}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.body.style.cursor = 'none';

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = 'auto';
    };
  }, []);


  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePos.x,
        top: mousePos.y,
        // transform: isHovering ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
      }}
    >
      <div 
        className={`w-6 h-6 border border-dashed border-black rounded-full animate-spin transition-opacity duration-300 
          ${isHovering ? 'opacity-0' : 'opacity-100'}`}
        style={{ animationDuration: '6s' }}
      />

      <div className={`absolute top-0 left-0  transition-opacity duration-300
      ${isHovering ? 'opacity-100' : 'opacity-0'}`}>
        <Dialog/>
      </div>
      <div className={`absolute top-0 left-0 transition-opacity duration-300
      ${isHoveringBlack ? 'opacity-100' : 'opacity-0'}`}>
        <DarkCursor/>
      </div>
    </div>
  );
}

export default DottedCursor