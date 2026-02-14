import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"
import { MoveRight, MapPin } from 'lucide-react'

const attractionsData = [
    {
        id: 1,
        title: "Nandi Hills",
        desc: "Perfect for sunrise views and early morning treks.",
        src: "/nandiHills.jpg", 
        delay: 0.2
    },
    {
        id: 2,
        title: "Skandagiri Hills",
        desc: "Well known for adventurous night treks and panoramic views.",
        src: "/skandagiri.jpg",
        delay: 0.3
    },
    {
        id: 3,
        title: "Isha Foundation",
        desc: "A blessed spiritual retreat that adds calmness to your weekends.",
        src: "/isha.jpeg",
        delay: 0.4
    },
    {
        id: 4,
        title: "Kethanahalli Falls",
        desc: "Ideal for refreshing nature retreats with family and friends.",
        src: "/waterfall.jpg",
        delay: 0.5
    }
]

export default function Attractions() {
  return (
    <div id='benefits' className='flex flex-col lg:border-t-[40] lg:pt-10 border-primary lg:flex-row w-full min-h-dvh bg-bg-1 overflow-hidden'>
        
        
        <div className='w-full lg:w-1/2 p-6 lg:p-20 flex flex-col justify-center'>
            
           
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className='mb-10 lg:mb-16'
            >
                <div className='flex items-center gap-2 text-primary/70 mb-2'>
                    <MapPin size={18} />
                    <span className='uppercase tracking-widest text-sm font-bold'>Destinations</span>
                </div>
                <h2 className='font-head text-5xl lg:text-6xl text-primary'>Weekend Getaways</h2>
                <p className='font-body text-xl mt-4 max-w-md text-gray-600'>
                    Discover nature trails, spiritual centers, and scenic hills just a short drive from your home.
                </p>
            </motion.div>

            
            <div className='grid grid-cols-1  md:grid-cols-2 gap-8 lg:gap-x-10 lg:gap-y-12'>
                {attractionsData.map((item) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: item.delay, type: "spring", bounce: 0.4 }}
                        viewport={{ amount: 0.2, once: true }}
                        className='flex flex-col gap-3 group cursor-pointer'
                    >
                        <div className='overflow-hidden rounded-xl h-48 w-full relative shadow-sm'>
                           
                            <div className='bg-gray-300 w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-in-out'>
                                <Image src={item.src} alt={item.title} fill className="object-cover" />
                            </div>
                        </div>
                        <div>
                            <h3 className='font-subHead font-bold text-xl text-primary'>{item.title}</h3>
                            <p className='font-body text-lg leading-tight text-gray-600 mt-1'>{item.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        
        <div className='w-full lg:w-1/2 bg-primary text-bg-1 relative flex flex-col justify-between p-6 lg:p-20 min-h-[50vh] lg:min-h-auto rounded-bl-xl rounded-tl-2xl'>
            
           
            <div className='relative w-full h-full lg:h-[55%] flex flex-col justify-center lg:block'>
                <motion.div 
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className='w-full h-64 lg:h-full bg-gray-500 rounded-lg overflow-hidden relative mb-10 lg:mb-0'
                >
                     <Image src="/feature-img.jpg" fill className="object-cover opacity-80" alt="Nature" />
                </motion.div>

               
                <motion.div 
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='relative lg:absolute lg:top-[30%] lg:-left-20 bg-white/10 backdrop-blur-[5px] border border-white/20 p-6 lg:p-10 w-full lg:w-[70%] shadow-2xl rounded-tr-xl rounded-br-xl'
                >
                    <p className='text-bg-1 lg:text-white font-body text-xl lg:text-2xl font-medium leading-snug'>
                        "Living at Stellar Mulberry means you are always minutes away from Karnataka's iconic destinations."
                    </p>
                </motion.div>
            </div>

           
            <div className='flex flex-col gap-6 mt-10 lg:mt-0 '>
                <motion.h2 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='font-titan text-5xl md:text-7xl lg:text-[7rem] leading-[0.9] uppercase text-right lg:text-left'
                >
                    Nearby <br/> Attractions
                </motion.h2>

                <div className='flex justify-end'>
                    <motion.button 
                        whileHover={{ scale: 1.1, rotate: -45 }}
                        whileTap={{ scale: 0.9 }}
                        className='bg-bg-1 text-primary rounded-full p-4 lg:p-6 w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center cursor-pointer transition-all shadow-lg'
                    >
                        <MoveRight size={32} />
                    </motion.button>
                </div>
            </div>

        </div>
    </div>
  )
}