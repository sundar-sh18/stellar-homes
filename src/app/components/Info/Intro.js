import React from 'react'
import style from './Info.module.css'
import * as motion from "motion/react-client"
import Image from 'next/image'

export default function Info() {
  return (
    <div id='about' className='min-h-dvh w-full bg-bg-1 text-primary flex flex-col justify-center items-center py-10 lg:py-0'>
        <div className='px-6 md:px-10 lg:pl-40 lg:pr-20 flex flex-col lg:flex-row justify-between gap-10 lg:gap-20 w-full max-w-[1920px]'>
            
            <div className={`w-full lg:w-[65%] flex flex-col`}>
                <motion.h1 
                    initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                    whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                    transition={{duration: 1, delay: 0.2, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
                    viewport={{ amount: 0.5, margin: "-20% 0px -20% 0px", once: true }}
                    className={`text-4xl md:text-5xl lg:text-[3.5rem] font-head font-extrabold leading-none text-left mb-8 lg:mb-0`}
                >
                    Introduction to <br /> Stellar Mulberry
                </motion.h1>

                <section className='w-full flex flex-col lg:flex-row font-subHead text-md justify-between lg:mt-20 gap-10 lg:gap-20'>
                    <div className='flex flex-col lg:w-1/2'>
                        <motion.h3 
                            initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                            transition={{duration: 1, delay: 0.2, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
                            viewport={{ amount: 0.5, margin: "-40% 0px -20% 0px", once: true }}
                            className='font-subHead text-2xl lg:text-[1.2rem] font-bold'
                        >
                            Where Nature Meets Opportunity
                        </motion.h3>
                        <motion.p 
                            initial={{ transform: "translateY(0px)", opacity: 0, filter: "blur(2px)"}}
                            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                            transition={{duration: 1, delay: 0.2, scale: { type: "spring", visualDuration: 1, bounce: 1}}}  
                            viewport={{ amount: 0.5, margin: "-40% 0px -20% 0px", once: true }}
                            className='leading-tight mt-6 lg:mt-30 text-justify text-base lg:text-lg'
                        >
                            At Stellar Homes, we believe a home should be more than just walls—it should be a legacy. Stellar Mulberry is a premium plotted development in Chikkaballapur designed to offer a wholesome lifestyle away from city chaos. Whether you are building a weekend retreat or securing a future asset, this is your gateway to peaceful living and smart investment.
                        </motion.p>
                    </div>
                    
                    <ul className='list-disc leading-tight flex flex-col gap-6 lg:gap-10 lg:w-[40%] pl-5 lg:pl-0'>
                    
                        <motion.li 
                            initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                            transition={{duration: 1, delay: 0.2, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
                            viewport={{ amount: 0.5, margin: "-40% 0px -20% 0px", once: true }}
                        > 
                            Designed to bring nature to your doorstep with abundant tropical green patches, tree-lined paths, and landscaped open spaces that offer a breath of fresh air.
                        </motion.li>
                        <motion.li 
                            initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                            transition={{duration: 1, delay: 0.4, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
                            viewport={{ amount: 0.5, margin: "-40% 0px -10% 0px", once: true }}
                        > 
                            A future-ready asset with DTCP & RERA approvals and high appreciation potential, located in a rapidly growing region with easy bank loan options up to 90%.
                        </motion.li>
                        <motion.li 
                            initial={{ transform: "translateY(50px)", opacity: 0, filter: "blur(2px)"}}
                            whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                            transition={{duration: 1, delay: 0.6, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
                            viewport={{ amount: 0.5, margin: "-40% 0px 0% 0px", once: true }}
                        > 
                            Strategically located near Nandi Hills and the Isha Foundation, offering excellent connectivity to Bengaluru via highways while remaining a serene spiritual and tourism hub.
                        </motion.li>
                    </ul>
                </section>
            </div>

           
            <div className={` w-full lg:w-[35%] lg:h-auto pb-10 lg:pb-0 rounded-2xl`}>
                <motion.div 
                    initial={{ transform: "translateY(0px)", opacity: 0, filter: "blur(3px)"}}
                    whileInView={{ opacity: 1, transform: "translateY(0px)", filter: "blur(0)" }} 
                    transition={{duration: 1, delay: 0.2, scale: { type: "spring", visualDuration: 1, bounce: 0.5}}}  
                    viewport={{ amount: 0.5, margin: "-40% 0px -20% 0px", once: true }}
                    className={`${style.pulse} bg-gray-300 w-full h-full rounded-2xl hover:shadow-md hover:scale-105 transition-all duration-500 ease-in-out`}
                >
                    <Image src="/intro1.jpeg" fill className="object-cover opacity-100 rounded-2xl" alt="stellar mulberry" />
                </motion.div>
            </div>
        </div>
    </div>
  )
}