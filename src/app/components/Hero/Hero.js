import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Hero.module.css'


export default function Hero() {
  return (
    <div id='home' className='relative h-dvh w-dvw'>
      <div className={`lg:backdrop-blur-[2px] fixed top-0 left-0 w-dvw lg:w-full z-10`}>
        <Navbar/>
      </div>
      <div className={`text-7xl lg:text-[12rem] font-head lg:h-dvh text-center text-primary capitalize text-balance flex flex-col absolute top-90 lg:top-60 inset-0 items-center z-0`}>
          <div className='leading-none'>
            <h1>Stellar</h1>
            <h1>Mulberry</h1>
          </div>
          <div className={`${style.bar} absolute hidden lg:top-160 z-50 rounded-4xl`}></div>
      </div>
    </div>
  )
}
