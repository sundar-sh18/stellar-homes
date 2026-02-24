import React from 'react'
import * as motion from "motion/react-client"
import { MapPin, Navigation, Car, Mountain, Plane, Building2 } from 'lucide-react'

export default function Location() {
  return (
    <div id="location" className='w-full min-h-1/3 bg-primary text-bg-1 flex flex-col lg:flex-row '>
        
     
        <div className='w-full lg:w-1/2 p-6 lg:p-16 flex flex-col justify-center relative z-10'>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className='flex items-center gap-2 text-bg-1/60 mb-4'>
                    <MapPin size={20} />
                    <span className='uppercase tracking-widest text-sm font-bold'>Strategic Location</span>
                </div>
                
                <h2 className='font-titan text-5xl lg:text-[4rem] leading-[0.9] mb-8'>
                    Connected <br/> Yet Secluded
                </h2>

                <p className='font-body text-lg text-bg-1/80 mb-10 leading-relaxed'>
                    Stellar Mulberry is strategically located in Chikkaballapur, a rapidly developing region. Enjoy the perfect balance of peaceful living with effortless connectivity to Bengaluru’s key hubs.
                </p>

             
                <div className='space-y-6'>
                    {[
                        { dest: "Nandi Hills", time: "20 Mins", icon: <Mountain size={20}/> },
                        { dest: "Isha Foundation", time: "15 Mins", icon: <Navigation size={20}/> },
                        { dest: "Kempegowda Intl. Airport", time: "45 Mins", icon: <Plane size={20}/> },
                        { dest: "Bengaluru City Center", time: "60 Mins", icon: <Building2 size={20}/> },
                    ].map((item, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            viewport={{ once: true }}
                            className='flex items-center justify-between border-b border-bg-1/20 pb-3'
                        >
                            <div className='flex items-center gap-3 font-head text-xl'>
                                <span className='bg-bg-1/10 p-2 rounded-full'>{item.icon}</span>
                                {item.dest}
                            </div>
                            <span className='font-bold font-body opacity-60'>{item.time}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>

        
        <div className='w-full lg:w-1/2 h-[50vh] lg:h-auto relative bg-bg-1/5'>
           
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85967.10720538751!2d77.73743830820472!3d13.44507265563614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1f10987712213%3A0xccfea168cbbce700!2sStellar%20mulberry!5e0!3m2!1sen!2sin!4v1771426759157!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                allowFullScreen=""
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className='absolute inset-0 w-full h-full transition-all duration-500 ease-in-out grayscale-75 hover:grayscale-0'
            ></iframe>

          
            <div className='absolute inset-0 bg-linear-to-r from-primary via-primary/50 to-transparent pointer-events-none hidden lg:block lg:w-1/4'></div>
            <div className='absolute inset-0 bg-linear-to-b from-primary via-transparent to-transparent pointer-events-none lg:hidden h-10 bottom-0'></div>
        </div>
    </div>
  )
}