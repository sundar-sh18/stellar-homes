import React from 'react';
import { Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-white py-16 -z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              Ready to invest in a greener future? Contact us to learn more about our managed farmlands and eco-communities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={20} className="text-green-500" />
                <span>+123-456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Globe size={20} className="text-green-500" />
                <span>www.reallygreatsite.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={20} className="text-green-500" />
                <span>hello@reallygreatsite.com</span>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-2xl">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input type="text" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500" placeholder="Your Email" />
              </div>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Stellar Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}