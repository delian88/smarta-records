import React from 'react';
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn direction="right">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg">
                Ready to take your sound to the next level? Contact Smarta Records today. 
                Based in Texas, working globally.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Phone</h4>
                    <p className="text-gray-400 font-mono mt-1">+1 (346) 552-6534</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-gray-400 mt-1">Texas, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="p-3 bg-white/5 rounded-lg text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Email</h4>
                    <p className="text-gray-400 mt-1">smart@smartaman042.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex gap-6">
                 <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Instagram className="w-6 h-6"/></a>
                 <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Twitter className="w-6 h-6"/></a>
                 <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors"><Facebook className="w-6 h-6"/></a>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <form className="glass-panel p-8 rounded-2xl border border-white/10">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
              </div>

              <div className="mb-6">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message / Demo Link</label>
                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all"></textarea>
              </div>

              <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300">
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};