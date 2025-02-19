import React from 'react';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const Outcomes = () => {
  return (
    <section id="outcomes" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Expected Outcomes</h2>
          <p className="text-lg text-gray-600">
            Measurable impact and tangible results from our program
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-[#f9a31a] rounded-full mb-6 mx-auto">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Pilot Projects</h3>
            <div className="text-center">
              <span className="text-4xl font-bold text-[#f9a31a]">10+</span>
              <p className="text-gray-600 mt-2">
                Successful AI implementations across different sectors
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-[#f9a31a] rounded-full mb-6 mx-auto">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">New Startups</h3>
            <div className="text-center">
              <span className="text-4xl font-bold text-[#f9a31a]">3-5</span>
              <p className="text-gray-600 mt-2">
                AI-focused startups launched from the program
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-[#f9a31a] rounded-full mb-6 mx-auto">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 text-center mb-4">Sector Strategies</h3>
            <div className="text-center">
              <span className="text-4xl font-bold text-[#f9a31a]">5+</span>
              <p className="text-gray-600 mt-2">
                Industry-specific AI implementation strategies
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Impact Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Trained Professionals', value: '500+' },
              { label: 'Student Participants', value: '1000+' },
              { label: 'Workshop Hours', value: '200+' },
              { label: 'Industry Partners', value: '20+' }
            ].map((metric) => (
              <div key={metric.label} className="text-center">
                <div className="text-3xl font-bold text-[#f9a31a] mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;