import { FaLinkedin, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa"
import handshake from "../assets/handshake.PNG"

function Contact() {
  return (
    <>
      <div className="flex px-20 items-center h-dvh w-full">
        <div className="flex justify-center items-center bg-white px-5">
          <div className="flex flex-col items-start w-full max-w-2xl px-4">
            <div className="text-8xl font-myfontMed mb-8 w-full text-black">Let's Connect.</div>

            <div className="flex justify-between items-center w-full">
    
              <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/prachimadhukar/" target="_blank" rel="noopener noreferrer" className="cursor-none" >
                  <FaLinkedin className="w-8 h-8 text-yellow-600 hover:text-yellow-700 transition-colors" />
                </a>
                
                <a href="https://www.behance.net/prachimadhukar" target="_blank" rel="noopener noreferrer" className="cursor-none" >
                  <FaBehance className="w-8 h-8 text-yellow-600 hover:text-yellow-700 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-20">
          <img src={handshake}/>
        </div>
        </div>
    </>
  )
}

export default Contact
