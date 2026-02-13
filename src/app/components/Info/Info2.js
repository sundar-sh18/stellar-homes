import React from 'react'
import * as motion from 'motion/react-client'
import { MoveRight } from 'lucide-react'
import style from './Info.module.css'

export default function Info2() {

const data = [
    {
        id:1,
        title: 'A Lifestyle Rooted in Nature',
        desc: 'Experience peace and calmness with beautifully landscaped open spaces. Every morning here feels like a breath of fresh air, quite literally.',
        delay: 0.2,
    },
    {
        id:2,
        title: 'Flexible Living Options',
        desc: 'Whether dreaming of a cozy weekend cottage or a forever farmhouse, our plots offer the flexibility to build your vision amidst greenery while staying connected to the city.',
        delay: 0.4,
    },
    {
        id:3,
        title: 'Secure Gated Community',
        desc: 'We ensure safety and comfort for your family with round-the-clock security, well-planned internal roads, street lighting, and a peaceful neighborhood environment.',
        delay: 0.6,
    },
    {
        id:4,
        title: 'Strategic Location',
        desc: `Located in a tourism and spiritual hub near Nandi Hills and Isha Foundation, ensuring your property value grows alongside the region’s rapid infrastructure development.`,
        delay: 0.8,
    },
]

  return (
    <div className='h-dvh bg-primary flex flex-col justify-between gap-20 w-full '>
      <div className='bg-primary flex mt-60 ml-40 mb-0 mr-20 '>
        <motion.div initial={{ transform: "translateX(0px)", opacity: 0, filter: "blur(0px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.1, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
         className='text-bg-1 font-titan text-[8rem] leading-none uppercase h-fit'>
            Why Choose Stellar Mulberry?
        </motion.div>
        <div className='  w-full h-full'>
            <motion.div initial={{ transform: "translateY(0px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
            className={`${style.box} bg-gray-400 flex flex-col justify-center items-center rounded-md hover:shadow-2xl hover:shadow-gray-400 hover:transform transition-all duration-100 ease-in-out w-full h-full relative`}>
                <div className={`${style.rotate} bg-bg-1 rounded-4xl w-fit h-fit p-2 absolute transition-all duration-200 ease-in-out top-10 rotate`}><MoveRight/></div>
                <div className='bg-bg-1 text-center font-body text-4xl  m-10 absolute bottom-0 pl-20 pr-10 rounded-md shadow-md'>
                    Green, Gated, & Serene
                </div>
            </motion.div>
        </div>
      </div>
      <div className='bg-bg-1 h-1/3 w-full flex justify-around items-center pl-40 pr-40 gap-[10%]'> 
       {data.map((data) => (
        <motion.div initial={{ transform: "translateX(-50px)", opacity: 0, filter: "blur(0px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: data.delay,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
         key={data.id} >
            <h1 className='mb-5 bold font-subHead font-bold'>{data.title}</h1>
            <p className='font-body text-[1.3rem]'>{data.desc}</p>
        </motion.div>
       ))

       } 
        
      </div>
    </div>
  )
}
