import React from 'react'
import * as motion from 'motion/react-client'
import { MoveRight } from 'lucide-react'
import style from './Info.module.css'
import Image from 'next/image'

export default function Info2() {

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
        
        <div className='w-full lg:w-full lg:h-auto transition-all duration-1000 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)] hover:scale-95'>
            <motion.div 
                initial={{ transform: "translateY(0px)", opacity: 0, filter: "blur(2px)"}}
                whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                transition={{duration: 1, delay: 0.2, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
                viewport={{ amount: 0.5, margin: "-40% 0px -20% 0px", once: true }}
                className={`${style.box} bg-gray-400 flex flex-col justify-center items-center rounded-2xl hover:shadow-2xl hover:shadow-gray-400 hover:transform transition-all duration-1000 ease-in-out w-full h-full relative `}
            >   
                <Image src="/why1.jpeg" fill className="object-cover opacity-100 rounded-2xl" alt="Why Stellar" />
                <div className={`${style.rotate} bg-bg-1 rounded-4xl w-fit h-fit p-2 absolute transition-all duration-1000 ease-[cubic-bezier(0.075, 0.82, 0.165, 1)] top-5 lg:top-10 rotate`}><MoveRight/></div>
                <div className='bg-bg-1 text-center font-body text-2xl lg:text-4xl -m-3 lg:m-10 absolute bottom-0 px-10 py-2 rounded-md shadow-xl'>
                    Green, Gated, & Serene
                </div>
            </motion.div>
        </div>
      </div>

      
      <div className='bg-bg-1 h-auto lg:h-1/3 w-full flex flex-col lg:flex-row justify-around items-start lg:items-start px-6 lg:px-40 py-20 lg:py-10 gap-10 lg:gap-[5%]'> 
       {data.map((data) => (
        <motion.div 
            initial={{ transform: "translateX(-50px)", opacity: 0, filter: "blur(0px)"}}
            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
            transition={{duration: 1, delay: data.delay, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
            viewport={{ amount: 0.2, margin: "-40% 0px -20% 0px", once: true }}
            key={data.id} 
            className='w-full lg:w-1/4'
        >
            <h1 className='mb-3 lg:mb-5 bold font-subHead font-bold text-xl lg:text-2xl'>{data.title}</h1>
            <p className='font-subHead text-lg lg:text-[1.1rem] leading-normal'>{data.desc}</p>
        </motion.div>
       ))} 
      </div>
    </div>
  )
}