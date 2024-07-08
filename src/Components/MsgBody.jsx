import React, { useState } from 'react';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { ApiContext } from '../Context/ApiContext'; // Adjust the path as necessary
import avatarImage from '../assets/Images/avatar.jpg'; // Adjust the path as necessary

const MsgBody = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDarkMode = (darkModeEnabled) => {
    setIsDarkMode(darkModeEnabled);
    document.body.classList.toggle('dark-mode', darkModeEnabled);
  };

  return (
    <div className="relative w-2/5 h-full p-4 shadow-lg bg-white">
      {/* Hamburger Menu */}
      <div className="flex items-center justify-between mb-4">
        <Hamburger onClick={toggleSidebar} />
        <form className="relative flex-1">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className={`relative bg-slate-200 rounded-lg border border-gray-300 overflow-hidden`}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            </div>
            <input
              type="search"
              id="default-search"
              className={`block w-full p-2 pl-10 text-sm focus:outline-none bg-slate-200`}
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>

      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        avatarImage={avatarImage}
      />
    </div>
  );
};

export default MsgBody;
