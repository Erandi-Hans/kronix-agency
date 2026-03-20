import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">
      
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#bef264]/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />

      <Navbar />
      <Hero />
      <Process />
      
    </div>
  );
}

export default App;