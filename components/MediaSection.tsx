import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Disc, Share2, ExternalLink, Download } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const tracks = [
  {
    id: 1,
    title: "Texas Heat (Anthem)",
    artist: "SMARTAMAN042",
    duration: "3:45",
    cover: "https://picsum.photos/400/400?random=201"
  },
  {
    id: 2,
    title: "Global Frequency",
    artist: "SMARTAMAN042 ft. Jahari",
    duration: "4:12",
    cover: "https://picsum.photos/400/400?random=202"
  },
  {
    id: 3,
    title: "Night Drive Phonk",
    artist: "SMARTAMAN042",
    duration: "2:58",
    cover: "https://picsum.photos/400/400?random=20"
  },
  {
    id: 4,
    title: "The Come Up",
    artist: "JAHARI",
    duration: "3:30",
    cover: "https://picsum.photos/400/400?random=204"
  }
];

export const MediaSection: React.FC = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
            if (prev >= 100) {
                setIsPlaying(false);
                return 0;
            }
            return prev + 0.4;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  
  const playTrack = (index: number) => {
    setCurrentTrackIndex(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    setProgress(0);
    setIsPlaying(true);
  };

  const handleDownload = (e: React.MouseEvent, trackTitle: string) => {
    e.stopPropagation();
    
    // Simulate a file download using Blob
    const blob = new Blob(["Simulated audio content for " + trackTitle], { type: 'audio/mpeg' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${trackTitle.replace(/\s+/g, '_')}.mp3`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="music" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smarta-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
            <div className="flex items-center gap-4 mb-12">
                <span className="w-12 h-[1px] bg-smarta-highlight"></span>
                <span className="text-smarta-highlight font-mono text-xs tracking-widest uppercase">Latest Releases</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-16 leading-none">
                Sight & <span className="text-transparent bg-clip-text bg-gradient-to-r from-smarta-highlight to-smarta-accent">Sound</span>
            </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Video Section - Main Focus */}
            <div className="lg:col-span-7">
                <FadeIn delay={200} className="h-full">
                    <div className="relative aspect-video w-full bg-black border border-white/10 group overflow-hidden">
                        <img 
                            src="https://picsum.photos/1920/1080?random=301" 
                            alt="Featured Video" 
                            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                            <button className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-white fill-current ml-1" />
                            </button>
                            <div className="mt-8 text-center">
                                <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2">New Video</span>
                                <h3 className="text-3xl font-display font-bold text-white uppercase">Smartaman042 - "Texas Forever"</h3>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Music Player Section */}
            <div className="lg:col-span-5 flex flex-col">
                <FadeIn delay={400} className="flex-grow">
                    <div className="bg-smarta-card border border-white/5 p-6 h-full flex flex-col">
                        {/* Now Playing */}
                        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-white/5">
                            <div className="relative w-24 h-24 flex-shrink-0 group">
                                <img src={currentTrack.cover} alt="Cover" className={`w-full h-full object-cover shadow-2xl ${isPlaying ? 'animate-pulse-slow' : ''}`} />
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <Disc className={`w-10 h-10 text-white/80 ${isPlaying ? 'animate-spin-slow' : ''}`} />
                                </div>
                            </div>
                            <div className="flex-grow min-w-0">
                                <h3 className="text-xl font-display font-bold text-white truncate">{currentTrack.title}</h3>
                                <p className="text-sm text-smarta-highlight font-medium mb-4">{currentTrack.artist}</p>
                                
                                {/* Controls */}
                                <div className="flex items-center gap-4">
                                    <button onClick={prevTrack} className="text-gray-400 hover:text-white transition-colors"><SkipBack className="w-5 h-5" /></button>
                                    <button onClick={togglePlay} className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-smarta-highlight transition-colors">
                                        {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                                    </button>
                                    <button onClick={nextTrack} className="text-gray-400 hover:text-white transition-colors"><SkipForward className="w-5 h-5" /></button>
                                    <button onClick={(e) => handleDownload(e, currentTrack.title)} className="ml-auto text-gray-400 hover:text-white transition-colors" title="Download Track">
                                        <Download className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-8">
                            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                                <div className="h-full bg-smarta-accent transition-all duration-300" style={{ width: `${progress}%` }}></div>
                            </div>
                            <div className="flex justify-between mt-2 text-[10px] text-gray-500 font-mono">
                                <span>{isPlaying ? "0:42" : "0:00"}</span>
                                <span>{currentTrack.duration}</span>
                            </div>
                        </div>

                        {/* Tracklist */}
                        <div className="flex-grow overflow-y-auto no-scrollbar space-y-2">
                            {tracks.map((track, idx) => (
                                <div 
                                    key={track.id} 
                                    onClick={() => playTrack(idx)}
                                    className={`flex items-center gap-4 p-3 cursor-pointer group transition-colors ${currentTrackIndex === idx ? 'bg-white/5 border-l-2 border-smarta-accent' : 'hover:bg-white/5 border-l-2 border-transparent'}`}
                                >
                                    <span className="text-xs font-mono text-gray-500 w-4">{idx + 1}</span>
                                    <div className="flex-grow min-w-0">
                                        <p className={`text-sm font-bold truncate ${currentTrackIndex === idx ? 'text-smarta-accent' : 'text-white group-hover:text-white'}`}>
                                            {track.title}
                                        </p>
                                        <p className="text-xs text-gray-500">{track.artist}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={(e) => handleDownload(e, track.title)}
                                            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded-full"
                                            title="Download"
                                        >
                                            <Download className="w-3 h-3 text-white" />
                                        </button>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                            {currentTrackIndex === idx && isPlaying ? (
                                                <div className="flex gap-0.5 h-3 items-end">
                                                    <span className="w-0.5 h-full bg-smarta-accent animate-pulse"></span>
                                                    <span className="w-0.5 h-2/3 bg-smarta-accent animate-pulse delay-75"></span>
                                                    <span className="w-0.5 h-1/2 bg-smarta-accent animate-pulse delay-150"></span>
                                                </div>
                                            ) : (
                                                <Play className="w-3 h-3 text-white" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap justify-between items-center gap-4">
                            <button className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white flex items-center gap-2">
                                <Share2 className="w-3 h-3" /> Share
                            </button>
                            
                            <div className="flex gap-4">
                                <a href="https://open.spotify.com/artist/3bA2a8FnW6zjYgbOw8fsYW?si=n1MqfoBVQiSPar83UpsDrg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 bg-[#1DB954] text-white rounded-full text-xs font-bold uppercase tracking-wider hover:bg-[#1ed760] transition-colors">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.72 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                    </svg>
                                    Listen on Spotify
                                </a>
                                <a href="https://smartaman042.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-smarta-accent hover:text-white flex items-center gap-2 py-1.5">
                                    More <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
};