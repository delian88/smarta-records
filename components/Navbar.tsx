import React, { useState, useEffect } from 'react';
import { Menu, X, Disc } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Music', href: '#music' },
    { name: 'Artists', href: '#roster' },
    { name: 'Services', href: '#services' },
    { name: 'Uploads', href: '#uploads' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Studio', href: '#creative-ai' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-smarta-black/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center z-50">
            <a href="#" className="flex items-center gap-3 group">
              <div className="relative">
                <Disc className="w-10 h-10 text-white group-hover:rotate-180 transition-transform duration-700" />
                <div className="absolute inset-0 bg-smarta-accent blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter text-white leading-none">
                  SMARTA
                </span>
                <span className="font-display font-bold text-xs tracking-[0.2em] text-smarta-highlight">
                  RECORDS
                </span>
              </div>
            </a>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-display text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white hover:text-smarta-highlight transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-smarta-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-white hover:bg-white/10 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-smarta-black z-40 transition-all duration-500 flex flex-col justify-center items-center ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="space-y-6 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-3xl font-display font-black text-white hover:text-smarta-accent transition-colors uppercase tracking-tighter"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};