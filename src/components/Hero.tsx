import React from 'react';
import { Link } from 'react-router-dom';
import LogoNew from '../Logo-New.jpg';

const Hero: React.FC = () => {
  return (
    <div
      className="text-white"
      style={{
        backgroundImage: `url(${require('../bg.png')})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              100% Renewable. 100% You.
            </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-200 bg-black bg-opacity-40 p-2 rounded">
              Power your life with clean energy that’s always on — no compromises, no greenwashing. Just real, reliable, renewable power for your home, your hustle, and your planet.
            </p>
            <ul className="mb-4 text-lg list-none pl-0">
              <li className="text-[#444]">🌍 100% Renewable, 24/7</li>
              <li className="text-[#444]">⚡ Built for Your Lifestyle</li>
              <li className="text-[#444]">📱 Smart, Seamless, Sustainable</li>
            </ul>
            <div className="mb-6 text-lg text-[#444]">Make the switch. Be the change.</div>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/offers" 
                className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
              >
                Make the switch
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80">
              <div className="flex items-center justify-center w-full h-full p-8">
                <div className="text-center">
                  <img src={LogoNew} alt="Logo" className="mx-auto mb-4 w-[24rem] h-[24rem] object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
