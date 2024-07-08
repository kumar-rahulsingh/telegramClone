import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faAddressBook,
  faPhone,
  faSave,
  faCog,
  faMoon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"; // Import icons from Font Awesome
import avatarImage from "../assets/Images/avatar.jpg"; // Adjust the path as necessary

const Sidebar = ({ isOpen, onClose, isDarkMode, onToggleDarkMode }) => {
  const toggleDarkMode = () => {
    onToggleDarkMode(!isDarkMode); // Toggle the dark mode state
  };

  return (
    <div
      className={`sidebar fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="p-4">
        {/* Profile Section */}
        <div className="mb-4">
          <div className="relative w-20 h-20">
            <img
              className="w-full h-full object-cover rounded-full"
              src={avatarImage}
              alt="User Avatar"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="mt-2">
            <h2 className="text-lg font-semibold">Username</h2>
          </div>
        </div>

        {/* Menu Items */}
        <div className="mb-">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="mt-6">
            <li className="mb-6">
              <a href="#" className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                New Channel
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center">
                <FontAwesomeIcon icon={faAddressBook} className="mr-2" />
                Contacts
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Calls
              </a>
            </li>
            <li className="mb-6">
              <a href="#" className="flex items-center">
                <FontAwesomeIcon icon={faSave} className="mr-2" />
                Saved Messages
              </a>
            </li>
            <li className="mb-6">
              <FontAwesomeIcon icon={faCog} className="mr-2" />
              Settings
            </li>
          </ul>
        </div>

        {/* Dark Mode */}
        <div className="mb-6 flex items-center">
          <h2 className="text-xl font-semibold mr-2">Dark Mode</h2>
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleDarkMode}
          >
            <FontAwesomeIcon
              icon={faMoon}
              className={`cursor-pointer ${
                isDarkMode ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          </button>
        </div>

        {/* Close Sidebar Button */}
        <button
          className="absolute top-4 right-4 p-2 focus:outline-none"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
