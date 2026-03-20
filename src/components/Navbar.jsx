import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 border-b border-gray-800">
      <div className="text-2xl font-bold text-white">
        Kronix<span className="text-primary">.</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-white">Process</a>
        <a href="#" className="hover:text-white">Benefits</a>
        <a href="#" className="hover:text-white">Services</a>
        <a href="#" className="hover:text-white">Portfolio</a>
        <a href="#" className="hover:text-white">FAQ</a>
      </div>

      <button className="bg-primary text-black px-6 py-2 rounded-full font-bold text-sm">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;