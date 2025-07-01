import './App.css'
import { useState } from 'react'
import DottedCursor from './components/DottedCursor'
import SplashScreen from "./components/SplashScreen"
import Hero from './components/Hero'
import HorizontalLine from './components/HorizontalLine'
import Navbar from './components/Navbar'
import VerticalLine from './components/VerticalLine'
import AboutMe from './components/AboutMe'
import VectorImage from './components/VectorImage'
import StackingScrollShowcase from './components/StackingScroll'


function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringBlack, setIsHoveringBlack] = useState(false);
  const [showSplash, setShowSplash] = useState(true)

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  return (
    <>
    <div className="relative min-h-screen overflow-hidden cursor-none ">
      
      <DottedCursor isHovering={isHovering} isHoveringBlack={isHoveringBlack} />
      <div className='relative'>
        <div className='absolute py-7 z-20 w-full'>
          <Navbar/>
        </div>
        <div className='absolute mt-20 z-10'>
          <HorizontalLine color="black" duration={2000} delay={4000} />
        </div>
        <div className='absolute z-30 mt-[190px] w-full'>
          <Hero/>
        </div>
        <div className=' absolute z-30 w-full bottom-0 flex justify-center' >
              <div onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}>
              <VectorImage/>
              </div>
        </div>
        <div className='flex'>
          <div className="ml-20 z-0">
            <VerticalLine color="black" duration={2000} delay={4000} />
          </div>
          <div className=' ml-auto mr-20 z-0'>
            <VerticalLine color="black" duration={2000} delay={4000} />
          </div>
        </div>
      </div>
      <div>
        <div onMouseEnter={() => setIsHoveringBlack(true)}
              onMouseLeave={() => setIsHoveringBlack(false)} className=''>
                <div className=''>
                  <AboutMe/>
                </div>
        </div>
        
      </div>
    {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
    </div>
    <div className='' onMouseEnter={() => setIsHoveringBlack(true)}
              onMouseLeave={() => setIsHoveringBlack(false)}>
      <StackingScrollShowcase/>
    </div>
    <div className='h-dvh width-full bg-white '>
      hello
    </div>

    </>
  )
}

export default App
