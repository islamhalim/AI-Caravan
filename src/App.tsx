import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Agenda from './components/Agenda';
import Partners from './components/Partners';
import Outcomes from './components/Outcomes';
import Registration from './components/Registration';
import Contact from './components/Contact';
import { LocationCard } from './components/Location';
const locations = [
  {
    id: 1,
    name: "Egypt",
    date: "June 15, 2024",
    revealed: true,
    image: "/assets/egp.svg"
  },
  {
    id: 2,
    name: "Alexandria, Egypt",
    date: "June 20, 2024",
    revealed: false,
    image: ""
  },
  {
    id: 3,
    name: "Luxor, Egypt",
    date: "June 25, 2024",
    revealed: false,
    image: ""
  }
];

function App() {
  return (
    <div >
      <Navbar />

      <Hero />
      <div className='sm:px-6 lg:px-8 py-20'>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Next Destionations</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our upcoming destinations and get ready for your next adventure!
          </p>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-12 ">
  {locations.map((location, index) => (
    <div key={location.id} className="relative w-full lg:w-[280px]">
      {/* Original horizontal line for larger screens */}
      {index !== locations.length - 1 && (
        <div
          className="absolute left-[18.2rem] top-[9rem] w-8 h-[2px] z-10 lg:block hidden"
          style={{
            background: 'linear-gradient(to right, #d6d3d1 50%, transparent 50%)',
            backgroundSize: '8px 100%',
            backgroundRepeat: 'repeat-x',
          }}
        />
      )}

      {/* New vertical line for mobile */}
      {index !== locations.length - 1 && (
        <div
  className="absolute left-1/2 bottom-[-2.5rem] w-[2px] h-8 z-10 lg:hidden block"
  style={{
    background: 'repeating-linear-gradient(to bottom, #d6d3d1, #d6d3d1 2px, transparent 2px, transparent 4px)',
  }}
/>

      )}

      <LocationCard location={location} onClick={() => { }} />
    </div>
  ))}
</div>


      </div>


      <About />
      <Agenda />
      <Partners />
      <Outcomes />
      <Registration />
      <Contact />
    </div>
  );
}

export default App;