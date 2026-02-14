import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-md flex flex-col items-center mt-auto py-12">
      
      {/* Footer Meta Links */}
      <div className="text-center space-y-2 opacity-40">
        <p className="text-sm font-bold text-gray-900">areum</p>
        <div className="flex flex-wrap justify-center items-center gap-1 text-[11px] font-medium text-gray-700">
          <a href="#" className="hover:underline">Contact</a>
          <span>•</span>
          <a href="#" className="hover:underline">Privacy policy</a>
        </div>
        <p className="text-[10px] font-medium text-gray-500 mt-4 uppercase tracking-tighter">
          Crafted in Seoul
        </p>
      </div>
    </footer>
  );
};

export default Footer;