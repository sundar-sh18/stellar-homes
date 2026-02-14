import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import { MoveRight } from 'lucide-react'

const highlights = [
    {
        id: 1,
        title: "Gated Community Security",
        desc: "Round-the-clock security and perimeter fencing ensuring safety and peace of mind.",
        src: "/sample.jpg", 
        delay: 0.2
    },
    {
        id: 2,
        title: "Green Living",
        desc: "Abundant tropical green patches and landscaped open spaces that bring nature to your doorstep.",
        src: "/sample.jpg", 
        delay: 0.3
    },
    {
        id: 3,
        title: "Modern Infrastructure",
        desc: "Well-planned internal roads, street lighting, and essential utilities for stress-free living.",
        src: "/sample.jpg", 
        delay: 0.4
    }
]

export default function Highlights() {
  return (
   
    <div id='highlights' className='flex flex-col lg:flex-row w-full min-h-dvh lg:h-dvh lg:overflow-hidden bg-bg-1'>
        
      
        <div className='w-full lg:w-[70%] bg-primary text-bg-1 p-6 lg:p-16 flex flex-col justify-center gap-6 lg:gap-10 h-full rounded-tr-2xl rounded-br-2xl'>
            
          
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className='font-titan text-5xl md:text-6xl lg:text-[6rem] xl:text-[7.5rem] leading-[0.85] tracking-tight uppercase'>
                    Project <br /> Highlights
                </h1>
            </motion.div>

            
            <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex justify-between items-end border-b border-bg-1/20 pb-6'
            >
                <h3 className='font-subHead text-2xl lg:text-3xl max-w-sm'>
                    Designed for Excellence
                </h3>
                
                <div className='bg-bg-1 text-primary rounded-full p-3 hidden lg:block hover:scale-110 transition-transform cursor-pointer'>
                    <MoveRight size={24} />
                </div>
            </motion.div>

            
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                viewport={{ once: true }}
                className='font-body text-base lg:text-lg text-justify leading-relaxed opacity-90 max-w-xl'
            >
                Stellar Mulberry is more than just a plotted development; it is a gated community thoughtfully designed to offer a wholesome lifestyle. We believe that your home should be more than just walls and roofs—it should be an experience, a lifestyle, and a legacy. With DTCP & RERA approvals, we ensure your investment is safe.
            </motion.p>
        </div>

       
        <div className='lg:w-[30%] bg-bg-1 p-4 lg:p-6 flex flex-col items-center justify-center gap-4 lg:gap-4 h-full'>
            {highlights.map((item) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
                    viewport={{ once: true }}
                   
                    className='relative w-full h-[300px] lg:h-auto lg:flex-1 rounded-xl overflow-hidden group shadow-md'
                >
                   
                    <div className='bg-gray-400 w-full h-full relative'>
                        <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    </div>

                    
                    <div className='absolute bottom-4 left-4 right-4 bg-primary/95 backdrop-blur-sm p-4 lg:p-5 rounded-lg shadow-lg z-10'>
                        <h4 className='text-bg-1 font-bold font-subHead text-lg lg:text-xl mb-1'>{item.title}</h4>
                        <p className='text-bg-1/80 font-body text-sm leading-tight line-clamp-2'>
                            {item.desc}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}