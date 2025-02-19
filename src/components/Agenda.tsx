import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const phases = [
  {
    title: 'Preparation Phase',
    date: 'March 2025',
    items: [
      'Program launch and participant onboarding',
      'Initial assessments and group formation',
      'Resource distribution and platform setup'
    ]
  },
  {
    title: 'Training Phase',
    date: 'April-May 2025',
    items: [
      'Intensive AI fundamentals workshops',
      'Specialized track training sessions',
      'Mentorship program initiation'
    ]
  },
  {
    title: 'Practical Application',
    date: 'June-August 2025',
    items: [
      'Project development and implementation',
      'GenZ Juniors competition',
      'Industry collaboration workshops'
    ]
  },
  {
    title: 'Summit & Closure',
    date: 'September 2025',
    items: [
      'International conference',
      'Project showcase and competitions',
      'Awards ceremony and networking event'
    ]
  }
];

const Agenda = () => {
  return (
    <section id="agenda" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Program Timeline</h2>
          <p className="text-lg text-gray-600">A comprehensive journey from learning to practical implementation</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#f9a31a] hidden md:block"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={phase.title} className={`flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="flex-1 md:w-1/2"></div>
                <div className="relative flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-[#f9a31a] flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 md:w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-[#f9a31a] font-semibold mb-4">{phase.date}</p>
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;