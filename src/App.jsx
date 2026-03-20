import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Process />
    </div>
  );
}

export default App;