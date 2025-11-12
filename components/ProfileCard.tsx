
import React from 'react';
import { socialLinks } from '../constants';
import { TelegramIcon, GithubIcon, SignalIcon, DiscordIcon, LinkIcon } from './icons';

const IconMap: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
    'Telegram': TelegramIcon,
    'Telegram Bio': TelegramIcon,
    'GitHub': GithubIcon,
    'Signal': SignalIcon,
    'Discord': DiscordIcon,
    'default': LinkIcon
};

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-md border border-gray-800 rounded-2xl p-6 text-center shadow-2xl shadow-gray-500/10">
      <img 
        src="https://picsum.photos/id/43/150/150" 
        alt="Profile Avatar" 
        className="w-28 h-28 rounded-full mx-auto mb-4 border-2 border-gray-600 shadow-lg"
      />
      <h1 className="text-2xl font-bold text-white">km_fucker</h1>
      <p className="text-gray-400 mt-1">Digital Ghost & OSINT Enthusiast</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
        {socialLinks.map((link) => {
            const Icon = IconMap[link.name] || IconMap['default'];
            return (
                <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center text-sm bg-gray-900/80 hover:bg-gray-800/90 border border-gray-700/50 rounded-lg p-3 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-white transition-colors"/>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{link.username}</span>
                </a>
            );
        })}
      </div>
    </div>
  );
};

export default ProfileCard;
