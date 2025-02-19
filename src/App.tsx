import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Agenda from './components/Agenda';
import Partners from './components/Partners';
import Outcomes from './components/Outcomes';
import Registration from './components/Registration';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
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