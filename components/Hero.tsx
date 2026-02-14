import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <header className="w-full max-w-lg text-center flex flex-col items-center mb-8">
      <h1 className="text-[32px] sm:text-4xl font-extrabold text-black mb-8 px-4 leading-[1.2] tracking-[-0.02em] break-keep">
        신입 알바 교육 3일 → 30분
      </h1>

      <button 
        onClick={onCtaClick}
        className="mb-8 inline-flex items-center justify-center bg-black text-white px-6 py-4 rounded-xl active:scale-95 transition-transform hover:bg-gray-800 shadow-lg"
      >
        <span className="text-base font-bold leading-none">
          3분 만에 우리 매장 매뉴얼 만들기
        </span>
      </button>
    </header>
  );
};

export default Hero;