import React from 'react';

const Hamburger = ({ onClick }) => {
  return (
    <button className="p-2 focus:outline-none" onClick={onClick}>
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
      </svg>
    </button>
  );
};

export default Hamburger;
