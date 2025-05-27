
import { Brain, Network,Calendar } from 'lucide-react';
import logo from './imgs/caravanlogo.png';
const Hero = () => {
  return (
    <section
      id="home"
      className="w-full h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('https://static.wixstatic.com/media/9aed5a_c3342b57960045bf987afca120721474~mv2.png/v1/fill/w_888,h_494,al_c,lg_1,q_90/9aed5a_c3342b57960045bf987afca120721474~mv2.png')] bg-cover bg-center opacity-10 w-full h-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
            <div className="flex-shrink-0">
                  {/*  <img  src='src\imgs\Logo_-_Copy-removebg-preview.png' alt='AI Caravan'> </img> */}

                  <span className="text-[#f9a31a] font-bold text-xl"> <img src={logo} height={300} width={300} alt="AI Caravan" /></span>
                   

          </div>

            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          IEEE Computer Society AI Caravan 2025 
          </h1>
          <h3> (R8 Edition) </h3>

          <p className="text-xl sm:text-1.5xl text-gray-600 mb-12 max-w-3xl mx-auto">
            The Right to Knowledge and Practical Application in Artificial Intelligence <br />
            Leaving No One Behind
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
              <p className="text-gray-800 flex items-center gap-2">
                <Calendar className="font-semibold"></Calendar>
                 May–November 2025
              </p>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#registration"
              className="bg-[#f9a31a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e89918] transition-colors shadow-lg"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="bg-white text-[#f9a31a] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg border-2 border-[#f9a31a]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
