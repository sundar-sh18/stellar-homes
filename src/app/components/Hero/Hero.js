import React from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Hero.module.css'
import './Hero.module.css'
import { Courgette } from "next/font/google";

const courgette = Courgette({
  subsets: ['latin'],
  weight: '400'
})

export default function Hero() {
  return (
    <div>
      <div className={`${style.blur} fixed top-0 left-0 w-full z-10`}>
        <Navbar/>
      </div>
      <div className={`${style.text} ${courgette.className} h-dvh text-center text-primary capitalize break-normal flex flex-col absolute top-90 inset-0 items-center z-0`}>
          <div className='flex justify-center txt-color'>
            <h1 className='absolute -top-45'>Stellar</h1>
            <h1 className='absolute'>Mulberry</h1>
          </div>
          <div className={`${style.bar} absolute top-120 z-50 rounded-4xl`}></div>
      </div>
      
    </div>
  )
}
