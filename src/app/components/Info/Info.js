import React from 'react'
import Image from 'next/image'
import style from './Info.module.css'
import { Courgette } from 'next/font/google'
import * as motion from "motion/react-client"

const courgette = Courgette({
    weight: '400'
})

export default function Info() {
  return (
    <div className='h-dvh w-dvw bg-bg-1 text-primary lg:flex lg:flex-col justify-center items-center'>
        <div className='pt-20 pr-10 pl-10 lg:pt-80 lg:pl-40 lg:pb-40 lg:pr-20 flex flex-col lg:flex-row justify-between gap-20 w-full'>
            <div className={`w-dvw lg:flex lg:flex-col  lg:w-[65%] `}>
                <motion.h1 initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-20% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
                                            className={`w-dvw md:text-[1.5rem] text-left lg:text-[3.5rem] font-head font-extrabold leading-none`}>Introduction to Stellar Mulberry</motion.h1>
                <section className='w-dvw font-subHead text-md flex justify-between md:flex-col lg:mt-20 gap-30'>
                    <div className='flex flex-col'>
                        <motion.h3 initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
                         className='font-subHead md:text-[1rem] lg:text-[1.2rem] font-bold'>Where Nature Meets Opportunity</motion.h3>
                        <motion.p 
                        initial={{ transform: "translateY(0px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 1}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
         className='w-fit text-wrap leading-tight mt-30 text-justify'>At Stellar Homes, we believe a home should be more than just walls—it should be a legacy. Stellar Mulberry is a premium plotted development in Chikkaballapur designed to offer a wholesome lifestyle away from city chaos. Whether you are building a weekend retreat or securing a future asset, this is your gateway to peaceful living and smart investment.</motion.p>
                    </div>
                    
                    <ul className='list-disc leading-tight w-dvw flex gap-30'>
                        <motion.li initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
                        className='pb-5'> Designed to bring nature to your doorstep with abundant tropical green patches, tree-lined paths, and landscaped open spaces that offer a breath of fresh air.</motion.li>
                        <motion.li initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.4,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -10% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
                         className='pb-5'> A future-ready asset with DTCP & RERA approvals and high appreciation potential, located in a rapidly growing region with easy bank loan options up to 90%.</motion.li>
                        <motion.li initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.6,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px 0% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
                         className='pb-5'> Strategically located near Nandi Hills and the Isha Foundation, offering excellent connectivity to Bengaluru via highways while remaining a serene spiritual and tourism hub.</motion.li>
                    </ul>
                </section>

            </div>
            <div className=' pb-40 w-[35%] '>
                {/* <Image className=' rounded' width={1600} height={500} src='/weekend-home.jpg' alt='weekend-home'></Image> */}
                <motion.div initial={{ transform: "translateY(0px)", opacity: 0, filter: "blur(3px)"}}
                        whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                        transition={{duration: 1,
                                            delay: 0.2,
                                            scale: { type: "spring", visualDuration: 1, bounce: 0.5}
                        }}  viewport={{
          amount: 0.5, // 50% of element must be in view
          margin: "-40% 0px -20% 0px", // trigger at viewport middle
          once: true, // true = animate only once
        }}
                 className='bg-gray-300 h-fit w-full md:h-full rounded-2xl hover:shadow-md transition-all duration-500 ease-in-out'></motion.div>
            </div>
        </div>
    </div>

  )
}
