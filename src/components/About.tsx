import React from 'react';
import { GraduationCap, Briefcase, Target, Rocket } from 'lucide-react';
import p1 from "./imgs/p1.png";
import p2 from "./imgs/p2.png";
import p3 from "./imgs/p3.png";
import p4 from "./imgs/p4.png";
import p5 from "./imgs/p5.png";
import p6 from "./imgs/p6.png";

const About = () => {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About the Program</h2>
          <p className="text-lg text-gray-600 max-w-6xl mx-auto">
            Bridging the AI knowledge gap and fostering innovation through comprehensive training and practical application.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4"> Empowering Professionals</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Briefcase className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Advanced AI training</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>practical AI project development</span>
              </li>
              <li className="flex items-start">
                <Briefcase className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Industry-focused implementation</span>
              </li>
            </ul>

             <div className="flex flex-col md:flex-row gap-2 mb-4">
            </div>
            
            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
              <img src={p1} height={200} width={300} alt="AI Caravan" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 mb-4">
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
              <img src={p2} height={200} width={300} alt="AI Caravan" />
              </div>
            </div>

            
            
          </div>

          <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">Educating Students</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <GraduationCap className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Fundamental AI concepts</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>Entrepreneurship skills development</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>GenZ Juniors competition participation</span>
              </li>
            </ul>

            <div className="flex flex-col md:flex-row gap-2 mb-4">
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
              <img src={p4} height={200} width={300} alt="AI Caravan" />
              </div>
            </div>


            <div className="flex flex-col md:flex-row gap-2 mb-4">
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
              <img src={p3} height={200} width={300} alt="AI Caravan" />
              </div>
            </div>

          </div>

<div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-6">
              <div className="bg-[#f9a31a] p-3 rounded-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 ml-4">AI Summit</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>AI leaders</span>
              </li>
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>knowledge exchange</span>
              </li>
              <li className="flex items-start">
                <Rocket className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                <span>fostering collaboration </span>
              </li>
            </ul>
            
            <div className="flex flex-col md:flex-row gap-2 mb-4">
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
              <img src={p5} height={200} width={300} alt="AI Caravan" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 mb-4">
            </div>

            <div className="max-w-7xl mx-auto px-4 mt-1 mr-3 sm:px-6 lg:px-8">
              <div className="bg-[#f9a31a] p-1 rounded-lg">
              <img src={p6} height={200} width={300} alt="AI Caravan" />
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  );
};

export default About;