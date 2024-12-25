import React from 'react';

export default function FooterCTA() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-2xl font-semibold mb-2">Start your free trial</h2>
      <p className="text-gray-600 mb-6">
        Join over 4,000+ startups already growing with Untitled.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3">
        <button className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
          Learn more
        </button>
        <button className="px-5 py-2.5 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700">
          Get started
        </button>
      </div>
    </div>
  );
}