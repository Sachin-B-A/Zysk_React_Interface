import React from 'react';

export default function HeroActions() {
  return (
    <div className="flex justify-center gap-6 mt-8">
      {/* Demo Button */}
      <button
        aria-label="Watch Demo"
        className="flex items-center gap-3 px-4 py-2 text-gray-900 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
      >

        <div className="flex items-center justify-center w-7 h-7 bg-gray-300 rounded-full border-2 border-gray-400 shadow-inner">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14.752 11.168l-6.084-3.446A1.2 1.2 0 007 8.554v6.892a1.2 1.2 0 001.668 1.08l6.084-3.446a1.2 1.2 0 000-2.16z"
            />
          </svg>
        </div>
        <span className="font-medium text-sm">Watch Demo</span>
      </button>


      <button
        aria-label="Sign Up"
        className="px-4 py-2 text-white bg-purple-600 hover:bg-purple-700 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        <span className="font-semibold text-sm">Sign Up</span>
      </button>
    </div>
  );
}
