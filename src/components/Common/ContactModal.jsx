import React, { useState } from 'react';
import { X, CheckCircle2, Calendar, Clock } from 'lucide-react'; // අලුත් Icons එකතු කළා
import { motion, AnimatePresence } from 'framer-motion';

const ContactModal = ({ isOpen, onClose, title }) => {
  const [issubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-[#0a0a0a] border border-white/10 w-full max-w-md rounded-2xl p-8 relative shadow-2xl"
      >
        <button onClick={handleClose} className="absolute top-4 right-4 text-gray-500 hover:text-[#bef264] transition-colors">
          <X size={24} />
        </button>

        {!issubmitted ? (
          <>
            <h2 className="mb-2 font-serif text-3xl italic font-bold tracking-tight text-white">
              {title} <span className="text-[#bef264]">.</span>
            </h2>
            <p className="mb-6 text-sm text-gray-400">
              {title === "Book a Meeting" 
                ? "Pick a convenient time for our strategy call." 
                : "Let's build something amazing together."}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1.5 font-bold">Full Name</label>
                <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white focus:border-[#bef264] outline-none transition-all placeholder:text-gray-700" placeholder="John Doe" />
              </div>
              
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1.5 font-bold">Email Address</label>
                <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white focus:border-[#bef264] outline-none transition-all placeholder:text-gray-700" placeholder="john@example.com" />
              </div>

              {/* Conditional Fields: පේන්නේ Book a Meeting එබුවොත් විතරයි */}
              {title === "Book a Meeting" && (
                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2">
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1.5 font-bold">Preferred Date</label>
                    <div className="relative">
                      <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-[#bef264] outline-none transition-all [color-scheme:dark]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1.5 font-bold">Preferred Time</label>
                    <select required className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm text-white focus:border-[#bef264] outline-none transition-all appearance-none">
                      <option className="bg-[#0a0a0a]" value="">Select Slot</option>
                      <option className="bg-[#0a0a0a]" value="morning">Morning</option>
                      <option className="bg-[#0a0a0a]" value="afternoon">Afternoon</option>
                      <option className="bg-[#0a0a0a]" value="evening">Evening</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1.5 font-bold">Project Brief</label>
                <textarea required rows={title === "Book a Meeting" ? "2" : "4"} className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-white focus:border-[#bef264] outline-none transition-all placeholder:text-gray-700" placeholder="Tell us about your vision..."></textarea>
              </div>

              <button type="submit" className="w-full bg-[#bef264] text-black font-bold py-4 rounded-xl hover:brightness-110 transition-all shadow-[0_10px_20px_rgba(190,242,100,0.15)] uppercase tracking-wider text-sm">
                {title === "Book a Meeting" ? "Confirm Booking" : "Send Message"}
              </button>
            </form>
          </>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-10 text-center"
          >
            <div className="flex justify-center mb-4">
              <CheckCircle2 size={60} className="text-[#bef264]" />
            </div>
            <h2 className="mb-2 font-serif text-2xl italic font-bold text-white">
              {title === "Book a Meeting" ? "Meeting Requested!" : "Message Sent!"}
            </h2>
            <p className="mb-8 text-sm text-gray-400">
              {title === "Book a Meeting" 
                ? "We've received your request and will confirm the calendar invite via email." 
                : "Thank you for reaching out. We'll get back to you within 24 hours."}
            </p>
            <button 
              onClick={handleClose}
              className="px-8 py-3 text-white transition-all border bg-white/10 rounded-xl hover:bg-white/20 border-white/10"
            >
              Close
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default ContactModal;