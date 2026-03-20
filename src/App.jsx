import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* අනිත් sections පස්සේ මෙතනට දාමු */}
    </div>
  );
}

export default App;