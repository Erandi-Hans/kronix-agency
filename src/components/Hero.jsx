import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const brands = ['Layers', 'Quotient', 'Circooles', 'Hourglass', 'Command+R'];

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center">
      <div className="absolute top-0 -z-10 h-[500px] w-[800px] bg-[#bef264]/15 blur-[150px] rounded-full" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-40 right-[15%] md:right-[20%] text-[#bef264]"
      >
        <Sparkles size={40} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        className="absolute top-80 left-[10%] text-[#bef264]"
      >
        <Sparkles size={20} />
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-[1.1] max-w-5xl"
      >
        Bringing Your <br /> 
        Dream Into <span className="text-[#bef264] italic font-serif">Reality</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-2xl mt-8 text-lg leading-relaxed text-gray-400"
      >
        We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <button className="bg-[#bef264] text-black font-bold py-4 px-10 rounded-lg text-lg hover:scale-105 transition-transform active:scale-95 shadow-[0_0_20px_rgba(190,242,100,0.3)]">
          Book A Meeting
        </button>
      </motion.div>

      <div className="w-full max-w-5xl mt-24">
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#bef264]/50"></div>
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold whitespace-nowrap">
            Trusted by amazing brands
          </span>
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#bef264]/50"></div>
        </div>
        
        <div className="flex flex-wrap items-center justify-around gap-8 p-8 border bg-white/5 backdrop-blur-md border-white/10 rounded-3xl">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center gap-2 transition-all cursor-pointer grayscale hover:grayscale-0 opacity-60 hover:opacity-100">
              <div className="w-6 h-6 rounded-md bg-white/20 rotate-12"></div>
              <span className="text-xl font-bold text-white">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;