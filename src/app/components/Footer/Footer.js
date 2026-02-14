'use client'
import React, { useRef, useState } from 'react';
import { Mail, Phone, Globe, MapPin, Send } from 'lucide-react';
import * as motion from "motion/react-client"
import emailjs from '@emailjs/browser';

export default function Footer() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

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
    <footer id="contact" className="bg-primary text-bg-1 pt-20 pb-10 rounded-t-[3rem] -mt-10 relative z-10">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 mb-16 items-start">
       
          <div className='space-y-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                <h2 className="font-titan text-5xl lg:text-7xl mb-4 leading-none uppercase">
                    Stellar <br/> Mulberry
                </h2>
                <p className="font-body text-xl lg:text-2xl text-bg-1/80 max-w-md leading-relaxed">
                    Ready to invest in a greener future? Contact us to learn more about our managed farmlands and eco-communities.
                </p>
            </motion.div>

            <div className="space-y-6 font-body text-lg">
              <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-bg-1/10 p-3 rounded-full group-hover:bg-bg-1/20 transition-all">
                    <Phone size={24} />
                </div>
                <div>
                    <p className='opacity-60 text-sm uppercase tracking-widest'>Call Us</p>
                    <span className='text-xl'>08022330069</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-bg-1/10 p-3 rounded-full group-hover:bg-bg-1/20 transition-all">
                    <Globe size={24} />
                </div>
                <div>
                    <p className='opacity-60 text-sm uppercase tracking-widest'>Visit Us</p>
                    <span className='text-xl'>www.stellarhomesdevelopers.com</span>
                </div>
              </div>

              <div className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
                <div className="bg-bg-1/10 p-3 rounded-full group-hover:bg-bg-1/20 transition-all">
                    <Mail size={24} />
                </div>
                <div>
                    <p className='opacity-60 text-sm uppercase tracking-widest'>Email Us</p>
                    <span className='text-xl'>stellarbuilders@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          
         
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-bg-1/5 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-bg-1/10"
          >
            <h3 className="font-head text-4xl mb-6">Send us a Message</h3>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider opacity-70 mb-2">Your Name</label>
                <input 
                    type="text" 
                    name="user_name" 
                    required
                    className="w-full bg-transparent border-b-2 border-bg-1/20 py-3 text-xl focus:outline-none focus:border-bg-1 transition-colors placeholder:text-bg-1/30" 
                    placeholder="John Doe" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider opacity-70 mb-2">Your Email</label>
                <input 
                    type="email" 
                    name="user_email" 
                    required
                    className="w-full bg-transparent border-b-2 border-bg-1/20 py-3 text-xl focus:outline-none focus:border-bg-1 transition-colors placeholder:text-bg-1/30" 
                    placeholder="john@example.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold uppercase tracking-wider opacity-70 mb-2">Message</label>
                <textarea 
                    name="message" 
                    required
                    rows="3"
                    className="w-full bg-transparent border-b-2 border-bg-1/20 py-3 text-xl focus:outline-none focus:border-bg-1 transition-colors placeholder:text-bg-1/30 resize-none" 
                    placeholder="I'm interested in..." 
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full bg-bg-1 text-primary font-bold text-lg py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-4"
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                {!status && <Send size={20} />}
              </button>
              
              {status === 'success' && <p className="text-green-300 text-center mt-2">Thank you! We will get back to you soon.</p>}
              {status === 'error' && <p className="text-red-300 text-center mt-2">Something went wrong. Please try again.</p>}
            </form>
          </motion.div>
        </div>
        
       
        <div className="border-t border-bg-1/10 pt-8 flex flex-col md:flex-row justify-between items-center text-bg-1/40 text-sm font-body">
          <p>&copy; {new Date().getFullYear()} Stellar Homes. All rights reserved.</p>
          <div className='flex gap-6 mt-4 md:mt-0'>
            <span className='hover:text-bg-1 cursor-pointer transition-colors'>Privacy Policy</span>
            <span className='hover:text-bg-1 cursor-pointer transition-colors'>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}