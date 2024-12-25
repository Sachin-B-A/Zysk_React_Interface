import React from 'react';

export const DeviceFrames = () => {
  return (
    <div className="relative max-w-5xl mx-auto h-[500px]">
      {/* iPhone 14 Pro Frame */}
      <div className="absolute left-1/2 md:left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:translate-x-0 w-[300px] z-10 animate-float md:top-[60%]">
        <div className="relative transform hover:scale-105 transition-transform duration-500">
          <div className="rounded-[3rem] bg-gradient-to-b from-[#1d1d1f] to-[#2d2d2f] p-2 shadow-2xl">
            <div className="rounded-[2.7rem] overflow-hidden bg-white">
              <div className="pt-[200%] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-[120px] bg-black rounded-b-3xl z-10"></div>
                <img
                  src="./iphone.png"
                  alt="Analytics Mobile App"
                  className="absolute inset-0 w-full h-full object-cover translate-y-6"
                />
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-gradient-to-b from-black/20 to-transparent rounded-[100%]"></div>
        </div>
      </div>

      {/* MacBook Pro Frame - Hidden on mobile */}
      <div className="hidden md:block relative ml-48 animate-float-delayed">
        <div className="transform hover:scale-105 transition-transform duration-500">
          <div className="rounded-[1.25rem] bg-gradient-to-b from-[#1d1d1f] to-[#2d2d2f] p-3 pt-4 shadow-2xl">
            <div className="rounded-[1rem] overflow-hidden bg-white">
              <img
                src="./laptop.png"
                alt="Analytics Dashboard"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
            <div className="relative">
              <div className="h-3 bg-[#1d1d1f] mt-2 rounded-b-[1rem]">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#2d2d2f] rounded-full"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] h-6 bg-gradient-to-b from-black/20 to-transparent rounded-[100%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};