import { motion } from 'framer-motion';
import { Sparkles, Send, RefreshCcw } from 'lucide-react';

const Process = () => {
  const steps = [
    { 
      title: "Subscribe & get started", 
      desc: "Submit as many design tasks as you need without worrying about individual project fees.",
      icon: <Sparkles className="text-black" size={24} />
    },
    { 
      title: "Polished designs - on time", 
      desc: "Our designers get to work to deliver your request. Receive your design within a few days.",
      icon: <Send className="text-black" size={24} />
    },
    { 
      title: "Revisions made simple", 
      desc: "Custom designs, prompt replies and as many revisions as you need.",
      icon: <RefreshCcw className="text-black" size={24} />
    }
  ];

  return (
    <section id="process" className="relative px-6 py-24 overflow-hidden text-white bg-black md:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Top Header Section: Grid Layout එකක් භාවිතයෙන් */}
        <div className="grid items-end gap-10 mb-24 md:grid-cols-2">
          <div>
            <span className="text-[#bef264] uppercase text-xs font-bold tracking-[0.3em] block mb-6">How we work</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.15] max-w-md">
              Get a dedicated design team at fraction of the cost.
            </h2>
          </div>
          
          <div className="flex flex-col items-start gap-8">
            <p className="max-w-lg text-lg leading-relaxed text-gray-400">
              Grow your brand with high-quality design for a flat monthly fee. Work with senior designers. Subscribe and make as many requests as you need - no limits.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#bef264] text-black font-bold py-4 px-10 rounded-xl text-lg transition-all"
            >
              See Pricing
            </motion.button>
          </div>
        </div>

        {/* Bottom Process Steps */}
        <div className="relative grid gap-16 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Neon Green Circle with Glow */}
              <div className="w-16 h-16 bg-[#bef264] rounded-full flex items-center justify-center mb-10 shadow-[0_0_40px_rgba(190,242,100,0.35)] group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Connecting Line (Desktop Only) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-8 left-20 w-full h-[1px] bg-gradient-to-r from-[#bef264]/40 to-transparent -z-10" />
              )}

              <h3 className="mb-5 text-2xl font-bold tracking-tight">{step.title}</h3>
              <p className="text-lg leading-relaxed text-gray-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;