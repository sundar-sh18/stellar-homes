"use client"
import React, { useEffect, useRef } from 'react'
import Navbar from '../Navbar/Navbar'
import style from './Hero.module.css'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CircleArrowDown } from 'lucide-react'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {

  const lenis = useLenis()

  const containerRef = useRef(null)
  const bgRef = useRef(null)
  const mainRef = useRef(null)
  const titleRef = useRef([])

  useEffect(() => {
    const tl = gsap.timeline()
    tl.fromTo(bgRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 2, ease: "power3.out" }
    )

    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
      },
      "-=1.2" // overlap with bg
    )

    tl.to(mainRef.current, {
      y: -10,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    })

    gsap.to(bgRef.current, {
      scale: 1.3,
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

    gsap.to(mainRef.current, {
      x: 300,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    })

  }, [])

  const scrollToNextSection = () => {
    lenis.scrollTo('#about', { duration: 1.5 }) 
  }

  return (
    <div ref={containerRef} id='home' className='relative h-dvh w-dvw overflow-hidden'>

      {/* NAVBAR */}
      <div className='fixed top-0 left-0 w-full z-20'>
        <Navbar/>
      </div>

      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full z-0"
      >
        <img 
          src="/bg.jpeg"  
          alt="background"
          className="w-full h-full object-cover"
        />

  
        <div className="absolute inset-0 bg-black/30"></div>
      </div>


      <div ref={mainRef} className="relative z-10 w-full h-full">

        <div className={`${style.float} flex flex-col justify-center items-center h-full text-center pt-20 lg:pt-0`}>


          <h1 
            ref={(el) => titleRef.current[0] = el}
            className='text-white font-mont text-6xl md:text-8xl lg:text-[6rem] uppercase tracking-wider font-bold'
          >
            Stellar
          </h1>

          <h1 
            ref={(el) => titleRef.current[1] = el}
            className='text-white font-harrington text-9xl lg:text-[12rem]'
          >
            Mulberry
          </h1>

          <h5 
            ref={(el) => titleRef.current[2] = el}
            className='text-white font-mont text-base lg:text-[1.5rem] uppercase tracking-[20px]'
          >
            Chikkaballapur
          </h5>

          <div className={`${style.bar} absolute hidden lg:block bottom-10 lg:bottom-20 z-50 rounded-4xl`}><CircleArrowDown  onClick={()=>scrollToNextSection()} className='text-white size-10 hover:fill-white hover:text-primary  hover:scale-120 transition-all duration-200 ease-in-out border-0 rounded-full' strokeWidth={1} /></div>
        </div>
      </div>
    </div>
  )
}