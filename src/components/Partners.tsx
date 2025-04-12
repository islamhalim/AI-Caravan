import React from 'react';
import { Building2 } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      category: 'Main Partners',
      logos: [

        {
          name: 'IEEE Learning Network ',
          url: 'https://www.ieee.org/content/dam/ieee-org/ieee/web/org/educ/931277.png'
        },
        {
          name: 'University of Louisville',
          url: '/assets/univlouis.svg'
        },

        {
          name: 'IEEE Computer Society Egypt Chapter',
          url: '/assets/Egypt_Section_Chapter-removebg-preview.png'
        },
        {
          name: 'IEEE Egypt Consultants Network',
          url: '/assets/IEEE_CN_Logo-removebg-preview (1).png'
        },
        {
          name: 'ACM Cairo Chapter',
          url: '/assets/acm-removebg-preview.png'
        },
        
        {
          name: 'WIE',
          url: '/assets/wie-removebg-preview.png'
        },

        {
          name: 'NP',
          url: 'https://www.nu.edu.eg/sites/default/files/2022-06/nilepreneurs.png'
        },

        {
          name: 'CIS',
          url: '/assets/cis-removebg-preview.png'
        },

        {
          name: 'NAID',
          url: '/assets/naid-removebg-preview.png'
        },

        {
          name: 'NU',
          url: '/assets/nu-removebg-preview (1).png'
        },

        {
          name: 'AUC',
          url: 'https://niletesol.org/wp-content/uploads/2022/07/Group-7-1024x442.png'
        },

        {
          name: 'TKH',
          url: 'https://info.tkh.edu.eg/hs-fs/hubfs/Co%20-%20Branding%20English%20New-02-3.png?width=3507&height=675&name=Co%20-%20Branding%20English%20New-02-3.png'
        },

        {
          name: 'EUI',
          url: 'https://upload.wikimedia.org/wikipedia/ar/archive/c/cf/20231126094746%21%D8%AC%D8%A7%D9%85%D8%B9%D8%A9_%D9%85%D8%B5%D8%B1_%D9%84%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA%D9%8A%D8%A9.png'
        },

        {
          name: 'SU',
          url: 'https://mohesr.gov.eg/Style%20Library/ar-sa/assets/img/logos/SUT_LOGO.png'
        },

        {
          name: 'AASIT',
          url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEju9cZH6pj9QKadtTGycWi6W4v6G7rMQ0r-XhNdkfE79tCLT4JTYgbEmFyYll52BGfg8XR45y7Ny3zetyaOPjSt7RqMc-g61Hc2nzEd2Ht5ETt9fTcNB5tTTBB1d4D6HZFtND5FIFk7I9sl/s1600/retreiveOnePIC.php.gif'
        },

        {
          name: 'GIU',
          url: 'https://www.smartcities40.com/images/GIU-High-Res..png'
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
