import React from 'react';

export const Testimonial = () => {
  return (
    <div className="max-w-3xl mx-auto mb-32">
      <div className="bg-gradient-to-br from-white to-violet-50/30 rounded-2xl p-10 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] transition-all duration-500">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400 to-purple-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100&h=100"
              alt="Profile"
              className="relative w-16 h-16 rounded-full object-cover ring-4 ring-violet-50"
            />
          </div>
        </div>
        <p className="text-2xl text-gray-900 text-center mb-8 font-medium leading-relaxed">
          "We've been using Untitled to kick start every new project and can't imagine working without it."
        </p>
        <div className="text-center">
          <p className="font-semibold text-gray-900">Caroline Wu</p>
          <p className="text-gray-500">Product Manager, Sisyphus</p>
        </div>
      </div>
    </div>
  );
};