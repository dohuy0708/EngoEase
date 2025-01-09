import {
  HomeIcon,
  BookOpenIcon,
  ClipboardIcon,
  VideoCameraIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10 h-hheader">
      <div className="bg-white py-2 px-6 flex justify-between items-center font-regular text-lg border-b">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-14" />
          <img src="/Logo-name.png" alt="Logo Name" className="h-10" />
        </div>
        <div className="flex items-center space-x-28">
          <nav className="flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? 'text-main transition duration-200 ease-in-out flex items-center space-x-1'
                  : 'text-gray-700 hover:text-main transition duration-200 ease-in-out flex items-center space-x-1'
              }
            >
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/grammar"
              className={({ isActive }) =>
                isActive
                  ? 'text-main transition duration-200 ease-in-out flex items-center space-x-1'
                  : 'text-gray-700 hover:text-main transition duration-200 ease-in-out flex items-center space-x-1'
              }
            >
              <BookOpenIcon className="h-5 w-5" />
              <span>Grammar</span>
            </NavLink>
            <NavLink
              to="/vocabulary"
              className={({ isActive }) =>
                isActive
                  ? 'text-main transition duration-200 ease-in-out flex items-center space-x-1'
                  : 'text-gray-700 hover:text-main transition duration-200 ease-in-out flex items-center space-x-1'
              }
            >
              <ClipboardIcon className="h-5 w-5" />
              <span>Vocabulary</span>
            </NavLink>
            <NavLink
              to="/video"
              className={({ isActive }) =>
                isActive
                  ? 'text-main transition duration-200 ease-in-out flex items-center space-x-1'
                  : 'text-gray-700 hover:text-main transition duration-200 ease-in-out flex items-center space-x-1'
              }
            >
              <VideoCameraIcon className="h-5 w-5" />
              <span>Video</span>
            </NavLink>
            <NavLink
              to="/practice"
              className={({ isActive }) =>
                isActive
                  ? 'text-main transition duration-200 ease-in-out flex items-center space-x-1'
                  : 'text-gray-700 hover:text-main transition duration-200 ease-in-out flex items-center space-x-1'
              }
            >
              <PuzzlePieceIcon className="h-5 w-5" />
              <span>Practice</span>
            </NavLink>
          </nav>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Name</span>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              l=av
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
