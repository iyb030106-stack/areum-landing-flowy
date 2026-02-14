import React, { useState, useRef } from 'react';

import landing1 from '../src/assets/landing1.png';
import landing2 from '../src/assets/landing2.png';
import landing3 from '../src/assets/landing3.png';

// TODO: Replace these placeholder URLs with your actual image paths.
// Ensure your images are roughly 9:19.5 aspect ratio (e.g., 1179x2556) for best results.
const screenshots = [
  landing1,
  landing2,
  landing3
];

const AppShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveIndex(index);
    }
  };

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.clientWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full max-w-md mx-auto mb-16 flex flex-col items-center">
      <div className="relative w-[300px]">
        {/* iPhone 16 Frame: Aspect ratio approx 9:19.5 */}
        <div className="bg-black rounded-[55px] p-[10px] shadow-xl relative z-10 overflow-hidden ring-4 ring-gray-900/10">
           {/* Dynamic Island Placeholder */}
           <div className="absolute top-[18px] left-1/2 transform -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 pointer-events-none"></div>

          <div className="rounded-[46px] overflow-hidden aspect-[9/19.5] bg-white relative">
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="w-full h-full overflow-x-auto flex snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none'
              }}
            >
              {screenshots.map((src, idx) => (
                <div key={idx} className="w-full h-full flex-shrink-0 snap-center relative">
                   <img 
                    alt={`Landing Screen ${idx + 1}`} 
                    className="w-full h-full object-cover pointer-events-none select-none" 
                    src={src} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              className={`h-2 rounded-full transition-all duration-300 ease-out ${
                activeIndex === idx ? 'w-6 bg-black' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;