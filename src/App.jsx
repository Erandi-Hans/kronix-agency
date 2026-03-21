import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Benefits from './components/Benefits';
import Services from './components/Services';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Process />
      <Benefits />
      <Services />
      <Portfolio />
      <FAQ />
    </div>
  );
}

export default App;