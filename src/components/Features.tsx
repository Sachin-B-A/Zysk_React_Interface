import React from 'react';
import { FeatureCard } from './FeatureCard';
import { Testimonial } from './Testimonial';
import { DeviceFrames } from './DeviceFrames';
import { features } from './feature';

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-violet-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-violet-900 to-purple-900 bg-clip-text text-transparent mb-6 leading-tight animate-fade-in">
            Analytics that feels like it's from the future
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-delayed">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10 mb-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={<feature.icon className="w-6 h-6" />}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>

        <Testimonial />

        {/* Bottom Section with Devices */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-violet-600 mb-4 uppercase tracking-wide animate-fade-in">
            Real time analytics
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-violet-900 to-purple-900 bg-clip-text text-transparent animate-fade-in">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-20 animate-fade-in-delayed">
            Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
          </p>

          <DeviceFrames />
        </div>
      </div>
    </section>
  );
};

export default Features;