import React from 'react';

export default function HeroBanner() {
  return (
    <div className="text-center mb-4">
      <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 text-sm px-4 py-2 rounded-full shadow-md">
        <div className="bg-purple-200 px-3 py-1 rounded-full font-medium text-xs text-purple-700">
          New feature
        </div>
        <span className="mx-2">|</span>
        
        <a
          href="#team-dashboard"
          className="inline-flex items-center text-purple-600 font-medium underline hover:no-underline"
        >
          Check out the team dashboard
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
