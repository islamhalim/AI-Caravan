import React from 'react';
import { GraduationCap, Briefcase, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About the Program</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bridging the AI knowledge gap and fostering innovation through comprehensive training and practical application.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Empowering Professionals</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Target className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Advanced AI training and R&D opportunities</span>
              </li>
              <li className="flex items-start">
                <Target className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Hands-on practical AI project development</span>
              </li>
              <li className="flex items-start">
                <Target className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Industry-focused implementation strategies</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 ml-4">Educating Students</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Fundamental AI concepts and applications</span>
              </li>
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Entrepreneurship skills development</span>
              </li>
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>GenZ Juniors competition participation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;