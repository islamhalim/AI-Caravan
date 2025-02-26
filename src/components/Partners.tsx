import React from 'react';
import { Building2 } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      category: 'Main Partners',
      logos: [
        {
          name: 'IEEE Computer Society',
          url: 'https://edu.ieee.org/pk-superior/wp-content/uploads/sites/900/2022/07/IEEE-CS_LogoTM-orange.png'
        },
        {
          name: 'IEEE Learning Network ',
          url: 'https://www.ieee.org/content/dam/ieee-org/ieee/web/org/educ/931277.png'
        },
        {
          name: 'IEEE Egypt Consultants Network',
          url: 'https://media.licdn.com/dms/image/v2/D4D0BAQGCZCa5mreqTQ/company-logo_200_200/company-logo_200_200/0/1690727581768?e=2147483647&v=beta&t=iKHyLi_sT8b7QWJHIowH1TqWVbLn41AIUvY-vZor9DQ'
        },
        {
          name: 'University of Louisville',
          url: '/assets/univlouis.svg'
        },
      ]
    },
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-lg text-gray-600">
            Collaborating with leading institutions to drive AI innovation
          </p>
        </div>

        <div className="space-y-16">
          {partners.map((category) => (
            <div key={category.category}>
              <div className="flex items-center justify-center mb-8">
                <Building2 className="w-6 h-6 text-[#f9a31a] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-3 lg:grid-cols-4">
                {category.logos.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex items-center justify-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow w-full md:w-auto"
                  >
                    <img
                      src={partner.url}
                      alt={partner.name}
                      className="max-h-16 object-contain w-full md:w-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-[#f9a31a] text-[#f9a31a] rounded-lg hover:bg-[#f9a31a] hover:text-white transition-colors"
          >
            Become a Partner
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
