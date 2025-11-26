import React from 'react';
import { ArrowUpRight, Globe } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const artists = [
  {
    name: "SMARTAMAN042",
    role: "Artist / CEO",
    genre: "Afro-Fusion / Hip-Hop",
    // Set to local path. User should place their image as 'smartaman.jpg' in public folder.
    image: "/smartaman.jpg", 
    desc: "The visionary behind Smarta Records, blending Texas grit with global rhythms.",
    link: "https://smartaman042.com"
  },
  {
    name: "JAHARI",
    role: "Artist",
    genre: "R&B / Soul",
    image: "https://picsum.photos/800/1200?random=102",
    desc: "Soulful melodies that traverse the emotional landscape of modern life.",
    link: "#"
  }
];

export const Roster: React.FC = () => {
  return (
    <section id="roster" className="py-24 bg-black relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
                <FadeIn>
                    <span className="text-smarta-accent font-mono text-xs tracking-widest uppercase mb-2 block">
                        Our Talent
                    </span>
                    <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.8]">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-500 to-gray-800">Roster</span>
                    </h2>
                </FadeIn>
                <FadeIn delay={200} direction="left">
                    <p className="text-gray-400 mt-6 md:mt-0 md:text-right max-w-sm font-light">
                        Discover the diverse voices shaping the sound of tomorrow. <br/>
                        From Texas to the World.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {artists.map((artist, idx) => (
                    <FadeIn key={idx} delay={idx * 150} className="group relative aspect-[3/4] overflow-hidden bg-gray-900 cursor-pointer border border-white/10 hover:border-smarta-accent transition-colors duration-500">
                        <img 
                            src={artist.image} 
                            alt={artist.name} 
                            onError={(e) => {
                                // Fallback to placeholder if local image is not found
                                e.currentTarget.src = "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=800";
                            }}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0 grayscale opacity-80 group-hover:opacity-100"
                        />
                        
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 transition-opacity duration-300"></div>

                        {/* Content */}
                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                            <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
                                <a href={artist.link} className="p-3 bg-white text-black rounded-full hover:bg-smarta-accent hover:text-white transition-colors shadow-lg">
                                    <ArrowUpRight className="w-6 h-6" />
                                </a>
                            </div>

                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 bg-smarta-accent text-white text-[10px] font-bold uppercase tracking-wider mb-3">
                                    {artist.genre}
                                </span>
                                <h3 className="text-4xl font-display font-bold text-white uppercase tracking-tighter mb-2 leading-none">
                                    {artist.name}
                                </h3>
                                <p className="text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                                    {artist.desc}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <a href="https://smartaman042.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-white transition-colors duration-300">
                    <Globe className="w-4 h-4 text-smarta-accent" />
                    <span className="text-sm font-bold uppercase tracking-widest text-white">View Full Artist Profiles</span>
                </a>
            </div>
        </div>
    </section>
  );
};