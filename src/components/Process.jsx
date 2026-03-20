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
    <section id="process" className="py-24 px-6 md:px-10 bg-black relative overflow-hidden">
      {/* Background එකේ ලාවට පේන Glow එකක් */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#bef264]/5 blur-[120px] -z-10 rounded-full" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16">
            <h2 className="text-[#bef264] font-serif italic text-2xl mb-2">How it works</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Our simple process</h3>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-12 relative">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="flex-1 relative z-10"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-[#bef264] rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(190,242,100,0.4)] transition-transform hover:scale-110">
                {step.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed max-w-sm">
                {step.desc}
              </p>

              {/* Connecting Line (Desktop Only) */}
              {index < 2 && (
                <div className="hidden md:block absolute top-7 left-20 w-[calc(100%-40px)] h-[1px] bg-gradient-to-r from-[#bef264]/50 to-transparent -z-10"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;