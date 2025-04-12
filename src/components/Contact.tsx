import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">Have questions? We're here to help!</p>
        </div>

        <div className="grid gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg text-center" >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6 flex flex-col sm:flex-row flex-wrap justify-center sm:justify-around items-center w-full">
              <div className="flex items-start w-full sm:w-auto">
                <Mail className="w-6 h-6 text-[#f9a31a]" />
                <div className="ml-2">
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@ieeecsai.org" className="text-gray-600 hover:text-[#f9a31a]">
                    help@computer.org <br />
                    islamhalim@ieee.org
                  </a>
                </div>
              </div>

              <div className="flex items-start w-full sm:w-auto">
                <Phone className="w-6 h-6 text-[#f9a31a]" />
                <div className="ml-2">
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-[#f9a31a]">
                  +1-202-371-0101 <br />
                  +2-010-0114-6444
                  </a>
                </div>
              </div>

              <div className="flex items-start w-full sm:w-auto">
                <MapPin className="w-6 h-6 text-[#f9a31a]" />
                <div className="ml-2">
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                  Washington, DC Office<br />
                  2001 L Street N.W., Suite 700
                  Washington, DC 20036-4928
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-center">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/company/ieee-computer-society-r8-ai-caravan/" className="text-gray-600 hover:text-[#f9a31a]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f9a31a]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61573846683564" className="text-gray-600 hover:text-[#f9a31a]">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
