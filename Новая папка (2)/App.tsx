import React, { useState, useEffect, useRef, useCallback } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import ProfileCard from './components/ProfileCard';
import MusicPlayer from './components/MusicPlayer';
import OsintSection from './components/OsintSection';
import { musicTracks } from './constants';

const App: React.FC = () => {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleEnter = useCallback(() => {
    if (!entered) {
      setEntered(true);
      // User interaction allows us to play audio
      if (audioRef.current) {
        audioRef.current.play().then(() => {
            setIsPlaying(true);
        }).catch(error => {
            // Autoplay was prevented. User will have to click play manually.
            console.warn("Autoplay was prevented:", error);
            setIsPlaying(false);
        });
      }
    }
  }, [entered]);

  // Consolidated effect for managing all audio playback logic
  useEffect(() => {
    if (entered && audioRef.current) {
      const audio = audioRef.current;
      
      // Update the src only if it has actually changed to prevent unnecessary reloads.
      if (audio.src !== musicTracks[currentTrackIndex].src) {
        audio.src = musicTracks[currentTrackIndex].src;
      }
      
      // Sync the play/pause state with the isPlaying state.
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            // The AbortError is expected when the user quickly changes tracks or play state.
            // We can safely ignore it to avoid cluttering the console.
            if (error.name !== 'AbortError') {
              console.error("Audio playback error:", error.message);
            }
          });
        }
      } else {
        audio.pause();
      }
    }
  }, [currentTrackIndex, isPlaying, entered]);

  return (
    <>
      <audio ref={audioRef} src={musicTracks[currentTrackIndex].src} loop={false} onEnded={() => setCurrentTrackIndex((prev) => (prev + 1) % musicTracks.length)} />
      {!entered && (
        <div 
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center cursor-pointer text-white"
          onClick={handleEnter}
        >
          <img src="https://picsum.photos/id/43/150/150" alt="Profile Avatar" className="w-32 h-32 rounded-full mb-6 border-2 border-gray-600 shadow-lg shadow-gray-500/20"/>
          <h1 className="text-3xl font-bold tracking-widest animate-pulse">CLICK TO ENTER</h1>
          <p className="mt-2 text-gray-400">User interaction is required to enable audio.</p>
        </div>
      )}

      <div className={`min-h-screen bg-black text-white font-mono transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        <ParticlesBackground />
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 overflow-hidden">
          <div className="w-full max-w-2xl mx-auto space-y-8">
            <ProfileCard />
            <MusicPlayer 
              audioRef={audioRef}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
              currentTrackIndex={currentTrackIndex}
              setCurrentTrackIndex={setCurrentTrackIndex}
            />
            <OsintSection />
          </div>
          <footer className="w-full text-center py-4 text-gray-500 text-xs">
            <p>Crafted for km_fucker</p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default App;