
import React from 'react';
import { musicTracks } from '../constants';
import { PlayIcon, PauseIcon, NextIcon, PrevIcon } from './icons';

interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentTrackIndex: number;
  setCurrentTrackIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ isPlaying, setIsPlaying, currentTrackIndex, setCurrentTrackIndex }) => {
  const currentTrack = musicTracks[currentTrackIndex];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % musicTracks.length);
  };

  const handlePrev = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + musicTracks.length) % musicTracks.length);
  };

  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-md border border-gray-800 rounded-2xl p-4 flex items-center justify-between shadow-2xl shadow-gray-500/10">
      <div className="flex flex-col overflow-hidden">
        <p className="text-white font-semibold truncate">{currentTrack.title}</p>
        <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
      </div>
      <div className="flex items-center space-x-3">
        <button onClick={handlePrev} className="p-2 rounded-full bg-gray-900/80 hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <PrevIcon className="w-5 h-5 text-white" />
        </button>
        <button onClick={handlePlayPause} className="p-3 rounded-full bg-gray-800/90 hover:bg-gray-700/90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500">
          {isPlaying ? <PauseIcon className="w-6 h-6 text-white" /> : <PlayIcon className="w-6 h-6 text-white" />}
        </button>
        <button onClick={handleNext} className="p-2 rounded-full bg-gray-900/80 hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-500">
          <NextIcon className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
