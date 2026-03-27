import { useState } from 'react'; // මේක අමතක කරන්න එපා
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import CTA from './components/Cta';
import ContactModal from './components/ContactModal';

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