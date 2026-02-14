import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import { MoveRight } from 'lucide-react'

export default function Community() {
  return (
    <div className='w-full min-h-dvh bg-bg-1 text-primary flex flex-col items-center py-10 lg:py-20 overflow-hidden'>
        
       
        <div className='w-full px-6 lg:px-20 mb-10 lg:mb-20'>
            <motion.div 
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
                className='relative w-full h-[30vh] md:h-[50vh] lg:h-[60vh] rounded-xl overflow-hidden'
            >
                <div className='bg-gray-400 w-full h-full relative transition-all duration-500 ease-in-out overflow-hidden hover:scale-105'>
                    
                    <Image 
                        src="/wellness-community.jpg" 
                        alt="Community Wellness" 
                        fill 
                        className="object-cover"
                    />
                    
                    
                    <div className='absolute inset-0 bg-black/10'></div>
                </div>
            </motion.div>
        </div>

     
        <div className='w-full px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10'>

         
            <div className='lg:col-span-3 flex flex-col justify-between h-full gap-10 lg:gap-0'>
                <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='font-subHead font-bold text-3xl lg:text-4xl leading-tight'
                >
                    Designed for <br/> Connection
                </motion.h3>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className='font-body text-lg lg:text-base text-gray-900  leading-snug'
                >
                    Living at Stellar Mulberry means belonging to a neighborhood that values peace, safety, and shared experiences. It is more than just a plot of land; it is a retreat where like-minded families come together to build a legacy.
                </motion.p>
            </div>

            <div className='lg:col-span-3 flex items-end pb-2'>
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='font-body text-lg text-justify lg:text-left leading-relaxed text-gray-800'
                >
                    Our amenities are the social heart of the project, designed to bridge the gap between urban isolation and community living. From evening walks on tree-lined paths to weekend gatherings at the clubhouse, every corner encourages interaction. With dedicated zones for senior citizens, pet parks, and meditation areas, every generation finds their space to thrive and connect.
                </motion.p>
            </div>

           
            <div className='lg:col-span-6  flex flex-col justify-between items-start lg:items-end h-full gap-10 lg:gap-0'>
                
              
                <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                    className='order-2 lg:order-1'
                >
                    <button className='bg-primary text-bg-1 rounded-full p-4 lg:p-5 hover:scale-110 transition-transform duration-300'>
                        <MoveRight size={32} />
                    </button>
                </motion.div>

               
                <motion.h1 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='font-titan text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.85] uppercase text-left lg:text-right order-1 lg:order-2 tracking-tight'
                >
                    Community <br/> Wellness
                </motion.h1>
            </div>

        </div>
    </div>
  )
}