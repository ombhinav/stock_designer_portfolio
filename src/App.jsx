import './App.css'
import { useState } from 'react'
import Dialog from './components/Dialog'
import DottedCursor from './components/DottedCursor'

import Hero from './components/Hero'
import HorizontalLine from './components/HorizontalLine'
import Navbar from './components/Navbar'
import VerticalLine from './components/verticalLine'
import AboutMe from './components/AboutMe'
import VectorImage from './components/VectorImage'

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isHoveringBlack, setIsHoveringBlack] = useState(false);
  return (
    <>
    <DottedCursor isHovering={isHovering} isHoveringBlack={isHoveringBlack} />
    <div className='relative'>
      <div className='absolute py-7 z-20 w-full'>
        <Navbar/>
      </div>
      <div className='absolute mt-20 z-10'>
        <HorizontalLine/>
      </div>
      <div className='absolute z-30 mt-[190px] w-full'>
        <Hero/>
      </div>
      <div className='flex justify-center absolute z-30 mt-[360px] w-full mb-7' >
            <div onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <VectorImage/>
            </div>
      </div>
      <div className='flex'>
        <div className='ml-20 z-0'>
          <VerticalLine/>
        </div>
        <div className=' ml-auto mr-20 z-0'>
          <VerticalLine/>
        </div>
      </div>
    </div>
    <div>
      <div onMouseEnter={() => setIsHoveringBlack(true)}
            onMouseLeave={() => setIsHoveringBlack(false)}>
            <AboutMe/>
            </div>
    </div>

    </>
  )
}

export default App
