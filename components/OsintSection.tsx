
import React from 'react';
import { osintTools, trainingLink } from '../constants';
import { BookOpenIcon, ToolIcon } from './icons';

const OsintSection: React.FC = () => {
  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-md border border-gray-800 rounded-2xl p-6 shadow-2xl shadow-gray-500/10 space-y-6">
      <div>
        <h2 className="text-lg font-bold text-white flex items-center mb-3">
          <ToolIcon className="w-5 h-5 mr-2" />
          OSINT Toolkit
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {osintTools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group text-center bg-gray-900/80 hover:bg-gray-800/90 border border-gray-700/50 rounded-lg py-2 px-3 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <p className="text-gray-300 group-hover:text-white transition-colors text-sm truncate">{tool.name}</p>
            </a>
          ))}
        </div>
      </div>
      <div>
         <h2 className="text-lg font-bold text-white flex items-center mb-3">
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Training
         </h2>
        <a
            href={trainingLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center text-sm w-full bg-gray-900/80 hover:bg-gray-800/90 border border-gray-700/50 rounded-lg p-3 transition-all duration-300 ease-in-out transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
            <span className="text-gray-300 group-hover:text-white transition-colors">{trainingLink.name}</span>
        </a>
      </div>
    </div>
  );
};

export default OsintSection;
