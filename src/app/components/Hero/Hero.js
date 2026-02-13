import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Hero.module.css'

export default function Hero() {
  return (
    <div id='home' className='relative h-dvh w-dvw overflow-hidden'>
      <div className={`lg:backdrop-blur-[2px] fixed top-0 left-0 w-full z-20`}>
        <Navbar/>
      </div>
      
      {/* Centering container */}
      <div className={`flex flex-col justify-center items-center h-full w-full text-center text-primary z-0 pt-20 lg:pt-0`}>
          <div className='font-head leading-[0.9] flex flex-col items-center'>
            {/* Responsive Text Sizes */}
            <h1 className="text-6xl md:text-8xl lg:text-[12rem]">Stellar</h1>
            <h1 className="text-6xl md:text-8xl lg:text-[12rem]">Mulberry</h1>
          </div>
          
          <div className={`${style.bar} absolute hidden lg:block bottom-10 lg:bottom-40 z-50 rounded-4xl`}></div>
      </div>
    </div>
  )
}