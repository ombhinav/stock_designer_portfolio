import './App.css'
import { useState } from 'react'
import Dialog from './components/Dialog'
import DottedCursor from './components/DottedCursor'

import Hero from './components/Hero'
import HorizontalLine from './components/HorizontalLine'
import Navbar from './components/Navbar'
import VerticalLine from './components/verticalLine'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <>
    <DottedCursor/>
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
      <AboutMe/>
    </div>

    </>
  )
}

export default App
