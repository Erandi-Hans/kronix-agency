import React from 'react';
import { X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-md p-8 border bg-zinc-900 border-zinc-800 rounded-2xl"
        >
          {/* Close Button */}
          <button onClick={onClose} className="absolute top-4 right-4 text-zinc-400 hover:text-white">
            <X size={24} />
          </button>

          <h2 className="mb-2 text-2xl font-bold text-white">{title}</h2>
          <p className="mb-6 text-sm text-zinc-400">Tell us about your dream project.</p>

          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-xs uppercase text-zinc-500">Full Name</label>
              <input type="text" className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-[#bef264] outline-none transition" placeholder="John Doe" />
            </div>
            <div>
              <label className="block mb-1 text-xs uppercase text-zinc-500">Email</label>
              <input type="email" className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-[#bef264] outline-none transition" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block mb-1 text-xs uppercase text-zinc-500">Message</label>
              <textarea rows="4" className="w-full bg-black border border-zinc-800 rounded-lg p-3 text-white focus:border-[#bef264] outline-none transition" placeholder="Tell us more..."></textarea>
            </div>
            <button className="w-full bg-[#bef264] text-black font-bold py-3 rounded-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;