import { ArrowUpRight, Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 rounded-t-[50px] relative z-10 -mt-12">
      <div className="mx-auto max-w-7xl">
        
        {/* Call to Action Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="mb-10 text-5xl font-bold tracking-tighter md:text-7xl">
            Ready to <span className="text-[#bef264] italic font-serif">transform</span> <br /> your business?
          </h2>
          <button className="bg-[#bef264] text-black font-bold py-5 px-12 rounded-2xl text-xl hover:scale-105 transition-transform flex items-center gap-3">
            Book a call <ArrowUpRight size={24} />
          </button>
        </div>

        <hr className="mb-12 border-white/10" />

        {/* Bottom Footer Part */}
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-6 text-2xl font-bold text-white">
              Design<span className="text-[#bef264]">Agency</span>
            </div>
            <p className="leading-relaxed text-gray-400">
              We help brands grow through high-end web design and development.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-bold">Navigation</h4>
            <a href="#process" className="text-gray-400 hover:text-[#bef264] transition-colors">How it works</a>
            <a href="#portfolio" className="text-gray-400 hover:text-[#bef264] transition-colors">Portfolio</a>
            <a href="#services" className="text-gray-400 hover:text-[#bef264] transition-colors">Services</a>
            <a href="#faq" className="text-gray-400 hover:text-[#bef264] transition-colors">FAQ</a>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-bold">Contact</h4>
            <span className="text-gray-400">hello@designagency.com</span>
            <span className="text-gray-400">+1 (555) 000-0000</span>
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-bold">Social Media</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#bef264] hover:text-black transition-all cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#bef264] hover:text-black transition-all cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#bef264] hover:text-black transition-all cursor-pointer">
                <Linkedin size={20} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-12 text-sm text-center text-gray-500 border-t border-white/10">
          © {new Date().getFullYear()} Design Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;