import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // මෙනු එකේ ලිංක් ටික ලේසියෙන් මැනේජ් කරන්න Array එකක් පාවිච්චි කරමු
  const navLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-white flex items-center gap-1 cursor-pointer">
          Kronix<span className="h-2 w-2 bg-[#bef264] rounded-full mt-2"></span>
        </div>
        
        {/* Desktop Links - අර UI එකේ විදිහටම */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
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

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button className="bg-[#bef264] text-black px-6 py-2.5 rounded-lg font-bold text-sm hover:shadow-[0_0_20px_rgba(190,242,100,0.3)] transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - ෆෝන් එකට විතරයි */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-white/10 px-6 py-8 flex flex-col gap-6 animate-in fade-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)} // ක්ලික් කළාම මෙනු එක වැහෙනවා
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