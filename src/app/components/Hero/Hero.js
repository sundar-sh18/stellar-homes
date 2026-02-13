import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Hero.module.css'


export default function Hero() {
  return (
    <div id='home' className='relative h-dvh w-full'>
      <div className={`${style.blur} fixed top-0 left-0 w-full z-10`}>
        <Navbar/>
      </div>
      <div className={`${style.text} font-head h-dvh text-center text-primary capitalize break-normal flex flex-col absolute top-60 inset-0 items-center z-0`}>
          <div className='leading-none'>
            <h1>Stellar</h1>
            <h1>Mulberry</h1>
          </div>
          <div className={`${style.bar} absolute top-160 z-50 rounded-4xl`}></div>
      </div>
    </div>
  )
}
