import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-12 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Call to Action Section - "Become part of the design revolution" */}
        <div className="bg-[#1a1c18] rounded-[3rem] p-12 md:p-20 text-center mb-24 border border-white/5">
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Become part of the <br /> design revolution
          </h2>
          <p className="mb-10 text-lg text-gray-400">
            Jump on a membership and start requesting designs right away!
          </p>
          <button className="bg-[#bef264] text-black font-bold py-4 px-10 rounded-xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
            See Pricing <span className="text-xl">→</span>
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 pb-16 md:grid-cols-12">
          {/* Logo & Description */}
          <div className="md:col-span-4">
            <div className="mb-6 text-2xl font-bold">
              Kronix<span className="text-[#bef264]">.</span>
            </div>
            <p className="max-w-sm leading-relaxed text-gray-400">
              Kronix - the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#bef264] hover:text-black transition-all cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#bef264] hover:text-black transition-all cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#bef264] hover:text-black transition-all cursor-pointer">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex md:col-span-4 md:justify-center">
            <div className="grid grid-cols-2 text-sm font-medium gap-x-12 gap-y-4">
              <a href="#process" className="text-gray-400 transition-colors hover:text-white">Process</a>
              <a href="#benefits" className="text-gray-400 transition-colors hover:text-white">Benefits</a>
              <a href="#services" className="text-gray-400 transition-colors hover:text-white">Services</a>
              <a href="#portfolio" className="text-gray-400 transition-colors hover:text-white">Portfolio</a>
              <a href="#faq" className="text-gray-400 transition-colors hover:text-white">FAQ</a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4 text-sm md:col-span-4 md:items-end">
            <div className="flex items-center gap-3 text-gray-400">
              <span>info@kronix.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span>(001) 1234 3435</span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-gray-500 border-t border-white/5 md:flex-row">
          <p>© 2026 Kronix - All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;