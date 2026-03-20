import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-24 pb-16 px-6">
      {/* Background එකේ තියෙන අර ලස්සන Glow එක (Blur effect) */}
      <div className="absolute top-0 -z-10 h-[400px] w-[600px] bg-primary/20 blur-[120px] rounded-full" />

      {/* Heading Animation */}
      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight max-w-4xl"
      >
        Bringing Your <br /> 
        Dream Into <span className="text-primary italic">Reality</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-gray-400 max-w-xl text-lg"
      >
        We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.
      </motion.p>

      {/* Button */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <button className="bg-primary text-black font-bold py-4 px-8 rounded-xl hover:scale-105 transition-transform">
          Book A Meeting
        </button>
      </motion.div>

      {/* "Trusted by" text එක */}
      <div className="mt-20 flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-gray-700"></div>
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 font-semibold">
            Trusted by amazing brands
          </span>
          <div className="h-[1px] w-12 bg-gray-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;