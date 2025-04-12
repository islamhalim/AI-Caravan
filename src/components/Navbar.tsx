import  { useState, useEffect } from 'react';
import caravanlogo from './imgs/caravanlogo.png';
import cslogo from './imgs/IEEE-CS_LogoTM-orange.png';
import r8logo from './imgs/ieee_r8_cs_rgb_ko.png';
import gaclogo from './imgs/mga_gac_color.png';
import dvplogo from './imgs/dvp_logo-removebg-preview.png';
import { Menu, X } from 'lucide-react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Disable/enable scrolling in the body based on the state of the menu
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup on unmount
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} ${isOpen ? 'bg-white shadow-md' : ''} `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
                  <span className="text-[#f9a31a] font-bold text-xl"> <a href=""> <img src={caravanlogo} height={75} width={75} alt="AI Caravan" /></a> </span>   
          </div>
          <div className="flex-shrink-0">
                  <span className="text-[#f9a31a] font-bold text-xl"> <a href="https://www.computer.org/"> <img src={cslogo} height={75} width={75} alt="AI Caravan" /></a></span>   
          </div>
          <div className="flex-shrink-0">
                  <span className="text-[#f9a31a] font-bold text-xl"> <a href="https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities"> <img src={gaclogo} height={75} width={75} alt="AI Caravan" /></a></span>   
          </div>
          <div className="flex-shrink-0">
                  <span className="text-[#f9a31a] font-bold text-xl"> <a href="https://www.computer.org/communities/professional-chapters/distinguished-visitors-program"> <img src={dvplogo} height={75} width={75} alt="AI Caravan" /></a></span>   
          </div>
          <div className="flex-shrink-0">
                  <span className="text-[#f9a31a] font-bold text-xl"> <a href="https://www.computer.org/volunteering/boards-and-committees/member-geographic-activities"> <img src={r8logo} height={75} width={75} alt="AI Caravan" /></a></span>   
          </div>
           {/*<div className="flex-shrink-0">
                  {/*  <img  src='src\imgs\Logo_-_Copy-removebg-preview.png' alt='AI Caravan'> </img> 

                   

            <span className="text-[#f9a31a] font-bold text-xl"> IEEE Computer Society R8</span>
          </div>*/}


          <div className="hidden lg:block"> {/* Change md to lg */}
            <div className="ml-10 flex items-baseline space-x-4">
              {['Home', 'About', 'Partners', 'Agenda', 'Team',  'Outcomes',  'Registration', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-800 hover:text-[#f9a31a] px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:hidden"> {/* Change md to lg */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-100 bg-white mt-16"> {/* Menu with z-index 100 */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Partners', 'Agenda', 'Team',  'Outcomes',  'Registration', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-800 hover:text-[#f9a31a] block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
