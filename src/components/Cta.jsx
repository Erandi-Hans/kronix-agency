import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="mx-auto max-w-7xl">
        {/* Dark Card Container */}
        <div className="bg-[#1a1c18] rounded-[3rem] p-12 md:p-24 text-center border border-white/5 relative overflow-hidden">
          
          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tighter leading-[1.1]">
              Become part of the <br /> 
              <span className="italic font-serif font-medium text-[#bef264]">design revolution</span>
            </h2>
            
            <p className="max-w-2xl mx-auto mb-12 text-lg leading-relaxed text-gray-400 md:text-xl">
              Jump on a membership and start requesting high-end designs for your business right away. No hidden fees, just pure creativity.
            </p>
            
            <button className="bg-[#bef264] text-black font-extrabold py-5 px-12 rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto text-lg shadow-[0_0_30px_rgba(190,242,100,0.2)]">
              See Pricing <ArrowRight size={24} />
            </button>
          </div>

          {/* Optional: Subtle Background Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#bef264]/5 blur-[120px] rounded-full pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default CTA;