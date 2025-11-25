import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MediaSection } from './components/MediaSection';
import { Roster } from './components/Roster';
import { Services } from './components/Services';
import { SongUploads } from './components/SongUploads';
import { Gallery } from './components/Gallery';
import { AiAssistant } from './components/AiAssistant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <MediaSection />
        <Roster />
        <Services />
        <SongUploads />
        <Gallery />
        <AiAssistant />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;