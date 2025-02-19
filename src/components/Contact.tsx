import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions? We're here to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-[#f9a31a] mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@ieeecsai.org" className="text-gray-600 hover:text-[#f9a31a]">
                    contact@ieeecsai.org
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-6 h-6 text-[#f9a31a] mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+1234567890" className="text-gray-600 hover:text-[#f9a31a]">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-[#f9a31a] mt-1" />
                <div className="ml-4">
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                    IEEE Computer Society<br />
                    Region 8 Headquarters
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-[#f9a31a]">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f9a31a]">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#f9a31a]">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f9a31a] focus:ring-[#f9a31a] active:border-none focus:border-none after:border-none before:border-none border-none"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f9a31a] focus:ring-[#f9a31a]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f9a31a] focus:ring-[#f9a31a]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#f9a31a] focus:ring-[#f9a31a]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#f9a31a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e89918] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;