"use client"
import React, { useState } from 'react'
import * as motion from 'motion/react-client'
import { MoveRight } from 'lucide-react'
import style from './Info.module.css'
import Image from 'next/image'

export default function Info2() {

  const [showImage, setShowImage] = useState(false)

const data = [
    { id:1, title: 'A Lifestyle Rooted in Nature', desc: 'Experience peace and calmness with beautifully landscaped open spaces. Every morning here feels like a breath of fresh air, quite literally.', delay: 0.2 },
    { id:2, title: 'Flexible Living Options', desc: 'Whether dreaming of a cozy weekend cottage or a forever farmhouse, our plots offer the flexibility to build your vision amidst greenery while staying connected to the city.', delay: 0.4 },
    { id:3, title: 'Secure Gated Community', desc: 'We ensure safety and comfort for your family with round-the-clock security, well-planned internal roads, street lighting, and a peaceful neighborhood environment.', delay: 0.6 },
    { id:4, title: 'Strategic Location', desc: `Located in a tourism and spiritual hub near Nandi Hills and Isha Foundation, ensuring your property value grows alongside the region’s rapid infrastructure development.`, delay: 0.8 },
]

  return (
    <div id='lifestyle' className='min-h-dvh bg-primary flex flex-col justify-between gap-10 lg:gap-20 w-full py-20 lg:py-0'>
      
      
      <div className='bg-primary flex flex-col lg:flex-row mt-10 lg:mt-60 mx-6 lg:mx-20 mb-0 gap-10 '>
        <motion.div 
            initial={{ transform: "translateX(0px)", opacity: 0, filter: "blur(0px)"}}
            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
            transition={{duration: 1, delay: 0, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
            viewport={{ amount: 0.1, margin: "-40% 0px -20% 0px", once: true }}
            className='text-bg-1 font-titan text-5xl lg:text-[clamp(2rem,7vw,8rem)]  leading-none uppercase h-fit'
        >
            Why Choose Stellar Mulberry?
        </motion.div>
        
        <div className='flex w-full lg:w-full lg:h-auto justify-center cursor-pointer'>
          <motion.div 
              initial={{ transform: "translateX(60px)", opacity: 0, filter: "blur(0px)"}}
            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
              transition={{duration: 1, delay: 0, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
            viewport={{ amount: 0.1, margin: "-40% 0px -20% 0px", once: true }}
              className="relative lg:w-lg h-[400px] lg:h-[450px] rounded-2xl overflow-hidden"
              onClick={() => setShowImage(true)}
          >   
              <Image 
                  src="/ROI.jpeg" 
                  fill 
                  className=" rounded-2xl" 
                  alt="ROI" 
              />
          </motion.div>
        </div>
      </div>

      
        <div className='bg-bg-1 w-full grid grid-cols-1 lg:grid-cols-4 px-6 lg:px-40 py-20 lg:py-10 gap-10'>
          {data.map((data) => (
            <motion.div 
              initial={{ transform: "translateX(-50px)", opacity: 0 }}
              whileInView={{ opacity: 1, transform: "translateY(0px)" }} 
              transition={{
                duration: 1,
                delay: data.delay
              }}  
              viewport={{ amount: 0.2, once: true }}
              key={data.id} 
              className='border border-primary rounded-2xl p-6 lg:p-10 text-center flex flex-col justify-between items-center hover:shadow-2xl transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)]  h-full'
            >
              <div className="flex flex-col items-center h-full justify-between">
                <h1 className='mb-3 lg:mb-5 font-subHead font-bold text-xl lg:text-2xl'>{data.title}</h1>
                <p className='font-subHead text-lg lg:text-[1.1rem] leading-normal'>{data.desc}</p>
              </div>
            </motion.div>
          ))} 
        </div>
        {showImage && (
  <div 
    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
    onClick={() => setShowImage(false)}
  >
    <div className="relative w-[95%] h-[90%]">
      <Image
        src="/ROI.jpeg"
        fill
        className="object-contain"
        alt="Full View"
      />
    </div>
  </div>
)}
    </div>
    
  )
}