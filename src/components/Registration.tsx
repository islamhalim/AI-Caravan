import React, { useState } from 'react';
import { User, Briefcase, CheckCircle, ExternalLink } from 'lucide-react';

const Registration = () => {
  const [formType, setFormType] = useState('student');

  return (
    <section id="registration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Join the Program</h2>
          <p className="text-lg text-gray-600">
            Select your track and begin your AI journey
          </p>
        </div>

        <div className="flex flex-col center md:flex-row gap-8 mb-12">
          <button
            onClick={() => setFormType('student')}
            className={`flex-1 p-6 rounded-lg border-2 transition-all ${
              formType === 'student'
                ? 'border-[#f9a31a] bg-[#f9a31a] text-white'
                : 'border-gray-200 hover:border-[#f9a31a]'
            }`}
          >
            <User className={`w-8 h-8 mx-auto mb-4 ${
              formType === 'student' ? 'text-white' : 'text-[#f9a31a]'
            }`} />
            <h3 className="text-xl font-bold mb-2">Student Track</h3>
            <p className={formType === 'student' ? 'text-white' : 'text-gray-600'}>
              For students interested in AI fundamentals and the GenZ Juniors competition
            </p>
          </button>

          <button
            onClick={() => setFormType('professional')}
            className={`flex-1 p-6 rounded-lg border-2 transition-all ${
              formType === 'professional'
                ? 'border-[#f9a31a] bg-[#f9a31a] text-white'
                : 'border-gray-200 hover:border-[#f9a31a]'
            }`}
          >
            <Briefcase className={`w-8 h-8 mx-auto mb-4 ${
              formType === 'professional' ? 'text-white' : 'text-[#f9a31a]'
            }`} />
            <h3 className="text-xl font-bold mb-2">Professional Track</h3>
            <p className={formType === 'professional' ? 'text-white' : 'text-gray-600'}>
              For professionals seeking advanced AI training and project implementation
            </p>
          </button>
        </div>

       
       
        <div className=" my-2  max-w-2xl mx-auto text-center">
          <h3 className="text-xl font-bold  text-gray-900 mb-4">Eligibility Criteria</h3>
          <ul className="space-y-3">
            {formType === 'student' ? (
              <>
                <li className="flex items-start text-center">
                  <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3 " />
                  <span>Currently enrolled in a school/university program</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                  <span>Basic programming knowledge</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                  <span>Strong interest in AI and technology</span>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                  <span>Minimum 3 years of professional experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                  <span>Technical background or equivalent experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#f9a31a] mt-1 mr-3" />
                  <span>Commitment to complete the entire program</span>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Register?</h3>
          <p className="text-gray-600 mb-6">Click the button below to complete your registration.</p>
          <a
            href="https://forms.gle/SJit7BG93TUwWcCX6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-[#f9a31a] text-white font-semibold rounded-lg shadow-md hover:bg-[#e6951a] transition"
          >
            Go to Registration Form
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;
