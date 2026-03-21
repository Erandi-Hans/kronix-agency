import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6">
      <div className="mx-auto max-w-7xl">
        
        <div className="flex flex-col items-start justify-between gap-12 mb-16 md:flex-row">
          {/* Logo & Description */}
          <div className="max-w-sm">
            <div className="mb-6 text-2xl font-bold">
              Kronix<span className="text-[#bef264]">.</span>
            </div>
            <p className="mb-8 text-sm leading-relaxed text-gray-400">
              Kronix - the leading digital agency based in the UK, working with top-tier clients, from start-ups to enterprises.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#bef264] hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 text-sm font-medium gap-x-20 gap-y-4">
            <a href="#process" className="text-gray-400 hover:text-white">Process</a>
            <a href="#benefits" className="text-gray-400 hover:text-white">Benefits</a>
            <a href="#services" className="text-gray-400 hover:text-white">Services</a>
            <a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a>
            <a href="#faq" className="text-gray-400 hover:text-white">FAQ</a>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-sm text-gray-400">
            <p>info@kronix.com</p>
            <p>(001) 1234 3435</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-gray-500 font-bold">
          <p>© 2026 KRONIX - ALL RIGHTS RESERVED</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;