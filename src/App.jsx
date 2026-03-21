import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Process />
      <Portfolio />
      <FAQ />
    </div>
  );
}

export default App;