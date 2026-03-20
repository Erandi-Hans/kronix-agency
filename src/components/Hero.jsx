import { motion } from 'framer-motion';
import { Sparkles, Layers, Disc, Target, Hourglass, Zap } from 'lucide-react';

const Hero = () => {
  const brands = [
    { name: 'Layers', icon: <Layers size={18} /> },
    { name: 'Quotient', icon: <Disc size={18} /> },
    { name: 'Circooles', icon: <Target size={18} /> },
    { name: 'Hourglass', icon: <Hourglass size={18} /> },
    { name: 'Command+R', icon: <Zap size={18} /> }
  ];

  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-32 pb-20 overflow-hidden text-center">
      
      {/* Background Aura */}
      <div className="absolute top-0 -z-10 h-[500px] w-[800px] bg-[#bef264]/10 blur-[150px] rounded-full" />
      
      {/* Sparkle Icon */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-40 right-[15%] md:right-[18%] text-[#bef264]/80"
      >
        <Sparkles size={48} strokeWidth={1} />
      </motion.div>

      {/* Main Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] max-w-5xl"
      >
        Bringing Your <br /> 
        Dream Into <span className="text-[#bef264] italic font-serif font-normal">Reality</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-xl mt-8 text-[1.1rem] leading-relaxed text-gray-400/80"
      >
        We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.
      </motion.p>

      {/* Primary CTA Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <button className="bg-[#bef264] text-black font-bold py-4 px-10 rounded-xl text-[1.1rem] hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(190,242,100,0.2)]">
          Book A Meeting
        </button>
      </motion.div>

      {/* Trusted By Section */}
      <div className="w-full max-w-5xl mt-28">
        
        {/* Vibrant Green Lines */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="h-[2px] w-14 bg-[#bef264] shadow-[0_0_12px_#bef264]"></div>
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">
            Trusted by amazing brands
          </span>
          <div className="h-[2px] w-14 bg-[#bef264] shadow-[0_0_12px_#bef264]"></div>
        </div>
        
        {/* The Glass Logo Bar */}
        <div className="relative group">
          {/* Bar එකට පල්ලෙහායින් තියෙන අඳුරු Shadow එක */}
          <div className="absolute inset-0 translate-y-4 rounded-full bg-black/40 blur-2xl -z-10" />
          
          <div className="flex flex-wrap items-center justify-around gap-10 py-6 px-10 bg-[#1a1a1a]/40 backdrop-blur-md border border-white/[0.08] rounded-2xl shadow-2xl">
            {brands.map((brand) => (
              <div key={brand.name} className="flex items-center gap-2.5 transition-all duration-300 opacity-60 hover:opacity-100 hover:scale-105 cursor-default">
                {/* Icon Container with subtle white tint */}
                <div className="text-white/90 bg-white/5 p-1.5 rounded-md shadow-inner">
                  {brand.icon}
                </div>
                <span className="text-[1.3rem] font-bold text-white/90 tracking-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;