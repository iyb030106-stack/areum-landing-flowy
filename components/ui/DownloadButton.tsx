import React from 'react';
import { AppleLogoIcon } from './Icons';

interface DownloadButtonProps {
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ className = "" }) => {
  return (
    <a 
      href="#" 
      className={`inline-flex items-center bg-black text-white px-5 py-2.5 rounded-xl active:scale-95 transition-transform ${className}`}
      aria-label="Download for iOS"
    >
      <AppleLogoIcon className="w-6 h-6 mr-2" />
      <div className="text-left">
        <p className="text-[10px] uppercase font-bold leading-none mb-0.5">Download for</p>
        <p className="text-base font-semibold leading-none">iOS</p>
      </div>
    </a>
  );
};

export default DownloadButton;