import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col justify-between overflow-hidden bg-smarta-black">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-smarta-black via-smarta-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-smarta-black via-transparent to-smarta-black z-10" />
        <img 
          src="https://picsum.photos/1920/1080?grayscale" 
          alt="Studio Background" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-slow"
        />
      </div>

      <div className="relative z-20 flex-grow flex items-center justify-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <FadeIn delay={200} direction="up">
                <h2 className="text-smarta-highlight font-mono text-sm tracking-widest mb-4 border-l-2 border-smarta-accent pl-4">
                  EST. TEXAS • WORLDWIDE
                </h2>
                <h1 className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] font-display font-black text-white mb-6 uppercase tracking-tighter">
                  Smarta <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">Records</span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={400} direction="up">
                <p className="max-w-xl text-xl text-gray-400 font-light border-l border-white/20 pl-6 my-8">
                  The new frequency of global sound. Powered by <span className="text-white font-medium">Smartaman Multimedia Group</span>.
                </p>
                
                <div className="flex flex-wrap gap-4">
                   <a href="#uploads" className="px-8 py-4 bg-white text-black font-display font-bold text-sm uppercase tracking-widest hover:bg-smarta-accent hover:text-white transition-colors duration-300">
                     Submit Demo
                   </a>
                   <a href="#roster" className="px-8 py-4 border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 flex items-center gap-2">
                     <Play className="w-4 h-4 fill-current" /> Explore Roster
                   </a>
                </div>
              </FadeIn>
            </div>
            
            <div className="hidden lg:block lg:col-span-4 relative">
                <FadeIn delay={600} direction="left">
                    <div className="relative w-full aspect-[3/4] border border-white/10 p-2 group">
                        <img 
                            src="/smartaman.jpg" 
                            onError={(e) => {
                                e.currentTarget.src = "https://picsum.photos/800/1200?random=10";
                            }}
                            alt="Featured Artist" 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/10 backdrop-blur-md p-4 border-l-4 border-smarta-accent">
                                <p className="text-xs font-mono text-smarta-highlight mb-1">FEATURED ARTIST</p>
                                <p className="text-xl font-display font-bold">SMARTAMAN042</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="relative z-20 bg-smarta-accent py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
            {[...Array(10)].map((_, i) => (
                <div key={i} className="flex items-center gap-8">
                    <span className="text-sm font-display font-bold text-white uppercase tracking-[0.2em]">Next Gen Sound</span>
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span className="text-sm font-display font-bold text-black uppercase tracking-[0.2em]">Smarta Records</span>
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                    <span className="text-sm font-display font-bold text-white uppercase tracking-[0.2em]">Texas Based</span>
                    <span className="w-2 h-2 rounded-full bg-black"></span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};