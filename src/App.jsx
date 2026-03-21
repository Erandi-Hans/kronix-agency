import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Process />
      <Portfolio />
      <Benefits />
      <Services />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;