import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  
  const navLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-black/80 backdrop-blur-md border-white/10">
      <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-7xl md:px-10">
        
       
        <div className="flex items-center gap-1 text-2xl font-bold text-white cursor-pointer">
          Kronix<span className="h-2 w-2 bg-[#bef264] rounded-full mt-2"></span>
        </div>
        
      
        <div className="hidden gap-8 text-sm font-medium text-gray-400 md:flex">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#bef264] transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

      
        <div className="hidden md:block">
          <button className="bg-[#bef264] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(190,242,100,0.3)] transition-all active:scale-95">
            Get Started
          </button>
        </div>

        
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="flex flex-col gap-6 px-6 py-8 duration-300 bg-black border-b md:hidden border-white/10 animate-in fade-in slide-in-from-top">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg text-gray-300 hover:text-[#bef264]"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-[#bef264] text-black px-6 py-3 rounded-lg font-bold w-full">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;