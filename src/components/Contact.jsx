import { FaLinkedin, FaTwitter, FaInstagram, FaBehance } from "react-icons/fa"


function Contact() {
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-gray-50">
        <div className="flex flex-col items-start w-full max-w-2xl px-4">
          <div className="text-8xl font-myfontMed mb-8 w-full text-black">I'm doing good.</div>

          <div className="flex justify-between items-center w-full">
            <div className="text-2xl text-gray-500">What about you?</div>
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/prachimadhukar/" target="_blank" rel="noopener noreferrer" className="cursor-none" >
                <FaLinkedin className="w-8 h-8 text-yellow-600 hover:text-yellow-700 transition-colors" />
              </a>
              
              {/* <FaTwitter className="w-8 h-8 text-yellow-600" />
              <FaInstagram className="w-8 h-8 text-yellow-600" /> */}
              <a href="https://www.behance.net/prachimadhukar" target="_blank" rel="noopener noreferrer" className="cursor-none" >
                <FaBehance className="w-8 h-8 text-yellow-600 hover:text-yellow-700 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
