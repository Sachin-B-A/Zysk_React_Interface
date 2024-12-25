import React from 'react';
import HeroTitle from './HeroTitle';
import HeroActions from './HeroActions';
import HeroImage from './HeroImage';
import HeroPartners from './HeroPartners';
import HeroBanner from './HeroBanner';

export default function Hero() {
  return (
    <section
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-indigo-100 via-white to-white"
      aria-labelledby="hero-section"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Banner */}
        <div className="animate-fadeIn">
          <HeroBanner />
        </div>

        {/* Hero Title */}
        <div className="animate-slideUp">
          <HeroTitle />
        </div>

        {/* Hero Actions */}
        <div className="flex justify-center animate-bounceIn">
          <HeroActions />
        </div>

        {/* Hero Image */}
        <div className="relative animate-zoomIn">
          <HeroImage />
        </div>

        {/* Hero Partners */}
        <div className="animate-fadeIn">
          <HeroPartners />
        </div>
      </div>
    </section>
  );
}
