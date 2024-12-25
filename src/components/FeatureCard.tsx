import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  return (
    <div
      className="group bg-white p-8 rounded-2xl hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-500 border border-gray-100 hover:border-violet-100"
      style={{
        animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
      }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-gray-900 group-hover:text-violet-900 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};