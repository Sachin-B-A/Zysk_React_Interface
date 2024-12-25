import React from 'react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Beautiful analytics to grow smarter
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700">
            Demo
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50">
            Sign up
          </button>
        </div>
      </div>
      
      <div className="mt-16 max-w-6xl mx-auto">
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Analytics Dashboard"
          className="rounded-lg shadow-xl w-full"
        />
      </div>
      
      <div className="mt-16 flex flex-wrap justify-center gap-8 items-center">
        <img src="/logos/bolt.svg" alt="Bolt" className="h-8" />
        <img src="/logos/lightbox.svg" alt="Lightbox" className="h-8" />
        <img src="/logos/featherdev.svg" alt="FeatherDev" className="h-8" />
        <img src="/logos/globalbank.svg" alt="GlobalBank" className="h-8" />
        <img src="/logos/metacritic.svg" alt="Metacritic" className="h-8" />
      </div>
    </section>
  );
}