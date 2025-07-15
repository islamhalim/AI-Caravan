import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Agenda from './components/Agenda';
import Partners from './components/Partners';
import Outcomes from './components/Outcomes';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Team from './components/Team';
import RecordedVideos from './components/RecordedVideos';
import Highlights from './components/Highlights';
import NAID from './components/NAID';
import AUC from './components/AUC';
import GUC from './components/GUC';
import NU from './components/NU';
import CS from './components/CS';
import SUT from './components/SUT';
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
      <RecordedVideos/>
       <SUT/> 
      <CS/>
       <NU/>
      <GUC/>
      <AUC/>
      <NAID/>
       <Highlights/>
      <Gallery />
      <About />
      <Partners />
      <Agenda />
      <Team />
      <Outcomes />
      <Registration />
      <Contact />
    </div>
  );
}

export default App;
