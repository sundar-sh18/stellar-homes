'use client'
import React, { useRef, useState } from 'react';
import { Mail, Phone, Globe, Send } from 'lucide-react';
import * as motion from "motion/react-client"
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your actual EmailJS keys
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
      }, (error) => {
          setStatus('error');
      });
  };

  return (
    <footer id="contact" className="bg-primary text-bg-1 border-t-[30px] border-bg-1 relative z-10 py-10 lg:pt-20 lg:pb-10">
      <div className="container mx-auto px-6 lg:px-20">
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-10 items-start">
       
       
          <div className='space-y-8 order-2 lg:order-1'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col items-start"
            >   
                <div className='w-24 h-24 mb-4 relative'>
                  <Image src='/favicon.ico' alt='Stellar Homes' fill className="object-contain" />
                </div>
                <p className="font-body text-lg lg:text-2xl text-bg-1/80 max-w-md leading-relaxed">
                    Ready to invest in a greener future? Contact us to learn more about our managed farmlands and eco-communities.
                </p>
            </motion.div>

            <div className="space-y-6 font-body text-lg">
             
              <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-bg-1/10 p-3 rounded-full group-hover:bg-bg-1/20 transition-all shrink-0">
                    <Phone size={24} />
                </div>
                <div className='break-all'>
                    <p className='opacity-60 text-sm uppercase tracking-widest'>Call Us</p>
                    <Link href='tel:08022330069' className='text-xl hover:underline'>08022330069</Link>
                </div>
              </div>
              
             
              <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-bg-1/10 p-3 rounded-full group-hover:bg-bg-1/20 transition-all shrink-0">
                    <Globe size={24} />
                </div>
                <div className='break-all'>
                    <p className='opacity-60 text-sm uppercase tracking-widest'>Visit Us</p>
                    <Link href='https://stellarhomesdevelopers.com' target='_blank' className='text-lg lg:text-xl hover:underline'>www.stellarhomesdevelopers.com</Link>
                </div>
              </div>

              
              <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-bg-1/10 p-3 rounded-full group-hover:bg-bg-1/20 transition-all shrink-0">
                    <Mail size={24} />
                </div>
                <div className='break-all'>
                    <p className='opacity-60 text-sm uppercase tracking-widest'>Email Us</p>
                    <Link href='mailto:stellarbuilders@gmail.com' className='text-lg lg:text-xl hover:underline'>stellarbuilders@gmail.com</Link>
                </div>
              </div>
            </div>
          </div>
          
         
          <motion.div 
            initial={{ opacity: 0, x: 0, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-bg-1/5 backdrop-blur-sm p-6 lg:p-10 rounded-3xl border border-bg-1/10 w-full order-1 lg:order-2"
          >
            <h3 className="font-head text-3xl lg:text-4xl mb-6 text-center lg:text-left">Send us a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4 lg:space-y-6">
              <div>
                <input 
                    type="text" 
                    name="user_name" 
                    required
                    className="w-full bg-transparent p-3 lg:p-4 border-2 rounded-xl lg:rounded-2xl border-bg-1/20 text-lg lg:text-xl focus:outline-none focus:border-bg-1 transition-colors placeholder:text-bg-1/30" 
                    placeholder="Your Name" 
                />
              </div>
              
              <div>
                <input 
                    type="email" 
                    name="user_email" 
                    required
                    className="w-full bg-transparent p-3 lg:p-4 border-2 rounded-xl lg:rounded-2xl border-bg-1/20 text-lg lg:text-xl focus:outline-none focus:border-bg-1 transition-colors placeholder:text-bg-1/30" 
                    placeholder="Email Address" 
                />
              </div>

              <div>
                <textarea 
                    name="message" 
                    required
                    rows="4"
                    className="w-full bg-transparent p-3 lg:p-4 border-2 rounded-xl lg:rounded-2xl border-bg-1/20 text-lg lg:text-xl focus:outline-none focus:border-bg-1 transition-colors placeholder:text-bg-1/30 resize-none" 
                    placeholder="I'm interested in..." 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-bg-1 text-primary font-bold text-lg py-3 lg:py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-2 shadow-lg"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                {!status && <Send size={20} />}
              </button>
              
              {status === 'success' && <p className="text-green-300 text-center mt-2 text-sm">Thank you! We will get back to you soon.</p>}
              {status === 'error' && <p className="text-red-300 text-center mt-2 text-sm">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
        
       
        <div className="border-t border-bg-1/10 pt-6 flex flex-col md:flex-row justify-between items-center text-bg-1/40 text-sm font-body gap-4 md:gap-0">
          <p className="text-center md:text-left">&copy; {new Date().getFullYear()} Stellar Homes. All rights reserved.</p>
          <div className='flex gap-6'>
            <span className='hover:text-bg-1 cursor-pointer transition-colors'>Privacy Policy</span>
            <span className='hover:text-bg-1 cursor-pointer transition-colors'>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}