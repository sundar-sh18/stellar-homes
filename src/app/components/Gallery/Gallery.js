import React from 'react'
import Image from 'next/image'
import * as motion from "motion/react-client"

const images = [
  { id: 1, src: "/gallery1.jpg", span: "row-span-2" }, 
  { id: 2, src: "/gallery2.jpeg", span: "col-span-1" }, 
  { id: 3, src: "/gallery4.jpeg", span: "row-span-2" }, 
  { id: 4, src: "/gallery5.jpeg", span: "row-span-1" }, 
  { id: 5, src: "/gallery3.jpeg", span: "col-span-1" }, 
  { id: 6, src: "/gallery6.jpeg", span: "col-span-1" }, 
//   { id: 7, src: "/gallery1.jpg", span: "col-span-1" }, 

]

export default function Gallery() {
  return (
    <div id="gallery" className='w-full min-h-dvh bg-bg-1 py-20 px-6 lg:px-20'>
        
        
        <div className='text-center mb-16'>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='font-titan text-5xl lg:text-[5rem] text-primary uppercase leading-none'
            >
                Life at Stellar
            </motion.h2>
            <p className='font-body text-xl text-gray-600 mt-4 max-w-2xl mx-auto'>
                A glimpse into the serene landscapes, modern infrastructure, and the vibrant community building their legacy here.
            </p>
        </div>

       
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[250px]'>
            {images.map((img, i) => (
                <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative rounded-2xl overflow-hidden group ${img.span} min-h-62.5 grayscale-[10%] hover:grayscale-0`}
                >
                    <div className='bg-gray-300 w-full h-full absolute inset-0 transition-transform duration-700 group-hover:scale-110 '>
                      
                        <Image src={img.src} alt="Gallery Image" fill className="object-cover " />
                    </div>
                    
                   
                    <div className='absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500'></div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}