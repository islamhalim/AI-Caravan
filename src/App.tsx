import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Header from './components/layout/Header'; 

// Section components
import Hero from './components/sections/Hero';
import SummitInfo from './components/SummitInfo';
import About from './components/sections/About';
import Partners from './components/sections/Partners';
import Timeline from './components/sections/Timeline';
import Team from './components/sections/Team';
import Outcomes from './components/sections/Outcomes';
import Contact from './components/sections/Contact';
import Activities from './components/sections/Activities';
import Highlights from './components/sections/Highlights';
import Gallery from './components/sections/Gallery';
import Registration from './components/Registration';



const LandingPage = () => {
  return (
    <>
      <Hero />
      <SummitInfo />
    </>
  );
};

function App() {
  return (
    <Router>
      <Header />
      <Routes>
          {/* Main landing page */}
          <Route path="/" element={<LandingPage />} />
          {/* Dedicated pages for each menu item */}
          <Route path="/About" element={<About />} />
          <Route path="/Activities" element={<Activities />} />
          <Route path="/Highlights" element={<Highlights />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Timeline" element={<Timeline />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Outcomes" element={<Outcomes />} />
          <Route path="/Registration" element={<Registration />} />
{/*           <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Videos" element={<RecordedVideos />} />
          <Route path="/fdc" element={<FDC />} />
          {/* University/Sponsor pages */}
          {/* <Route path="/takh" element={<TKH />} />
          <Route path="/naid" element={<NAID />} />
          <Route path="/auc" element={<AUC />} />
          <Route path="/guc" element={<GUC />} />
          <Route path="/nu" element={<NU />} />
          <Route path="/cs" element={<CS />} />
          <Route path="/sut" element={<SUT />} />
          <Route path="/aastmt" element={<AASTMT />} />
          <Route path="/eui" element={<EUI />} />
          <Route path="/auc-students" element={<AUC2 />} />
          <Route path="/cs-students" element={<CS2 />} />
          <Route path="/nu-students" element={<NU2 />} /> */} 
          {/* Optional: simple 404 */}
          <Route path="*" element={<div className="p-20 text-center">404 - Page Not Found</div>} />
        </Routes>
    </Router>
  );
}

export default App;