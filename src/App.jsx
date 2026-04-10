import { useState } from 'react'; 
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';

import Hero from './components/Sections/Hero';
import Process from './components/Sections/Process';
import Portfolio from './components/Sections/Portfolio';
import FAQ from './components/Sections/FAQ';
import Benefits from './components/Sections/Benefits';
import Services from './components/Sections/Services';

import Pricing from './components/Sections/Pricing';
import CTA from './components/Sections/Cta';

import ContactModal from './components/Common/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (title) => {
    setModalTitle(title);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-black">
 
      <Navbar onGetStarted={() => handleOpenModal("Get Started")} />
      
    
      <Hero onBookMeeting={() => handleOpenModal("Book a Meeting")} />
      
      <Process />
      <Portfolio />
      <Benefits />
      <Services />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />

      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalTitle} 
      />
    </div>
  );
}

export default App;