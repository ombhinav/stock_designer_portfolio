import { useState, useEffect } from "react";
function DarkCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.body.style.cursor = "none";

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = "auto";
    };
  }, []);
  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: mousePos.x,
        top: mousePos.y,
      }}
    >
      <div
        className={`w-6 h-6 border border-black rounded-full bg-[#cf8b01] transition-opacity duration-300`}
        style={{ animationDuration: "6s" }}
      />
    </div>
  );
}

export default DarkCursor;
