import { useState } from 'react'; 




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