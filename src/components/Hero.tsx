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
    Green Energy That Gets You
  </h1>
            <p className="text-lg md:text-xl mb-4 text-gray-200 bg-black bg-opacity-40 p-2 rounded">
              Power your life with clean energy that’s always on — no compromises, no greenwashing. Just real, reliable, renewable power for your home, your hustle, and your planet.
            </p>
            <ul className="mb-4 text-lg text-white list-none pl-0">
              <li>🌍 100% Renewable, 24/7</li>
              <li>⚡ Built for Your Lifestyle</li>
              <li>📱 Smart, Seamless, Sustainable</li>
            </ul>
            <div className="mb-6 text-lg text-white">Make the switch. Be the change.</div>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/energy-types" 
                className="inline-block bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Discover our energy sources
              </Link>
              <Link 
                to="/offers" 
                className="inline-block bg-accent text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors"
              >
                View our offers
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center">
            <div className="relative w-full h-80">
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-20 rounded-lg transform -rotate-3"></div>
              <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg shadow-lg flex items-center justify-center p-8">
                <div className="text-center">
                  <img src={LogoNew} alt="Logo" className="mx-auto mb-4 w-64 h-64 object-contain" />
                  <p className="text-gray-600 mb-6">Estimate how much you could save by choosing our energy offers</p>
                  <Link 
                    to="/compare" 
                    className="inline-block bg-primary text-white font-medium px-6 py-2 rounded-md hover:bg-secondary transition-colors"
                  >
                    Compare offers
                  </Link>
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
