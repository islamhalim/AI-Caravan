import React from 'react';
import { Brain, Network } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Brain className="w-20 h-20 text-[#f9a31a]" />
              <Network className="w-16 h-16 text-[#f9a31a] absolute -bottom-4 -right-4" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            IEEE CS R8 AI Caravan 2025
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Right to Knowledge and Practical Application in AI: Leaving No One Behind
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
              <p className="text-gray-800">
                <span className="font-semibold">When:</span> March–September 2025
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
              <p className="text-gray-800">
                <span className="font-semibold">Where:</span> Multiple Locations
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#registration"
              className="bg-[#f9a31a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e89918] transition-colors shadow-lg"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="bg-white text-[#f9a31a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-[#f9a31a]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;