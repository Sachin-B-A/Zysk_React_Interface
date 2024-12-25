import React from 'react';

export default function HeroImage() {
  return (
    <div className="mt-16 max-w-6xl mx-auto">
      <img 
        src="./mainpageimage.png"
        alt="Analytics Dashboard"
        className="rounded-lg shadow-xl w-full border-t-4 border-l-4 border-r-4 border-black"
        style={{ height: 'calc(100% - 6px)' }} 
      />
    </div>
  );
}
