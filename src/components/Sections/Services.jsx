import { ArrowUpRight } from 'lucide-react';

const Services = () => {
  const serviceList = [
    "Web Design", "Webflow Development", "UI/UX Design", 
    "Branding", "SEO Optimization", "App Design",
    "Social Media Graphics", "Landing Pages", "Pitch Decks"
  ];

  return (
    <section id="services" className="px-6 py-24 text-black bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col items-end justify-between gap-8 mb-16 md:flex-row">
          <div className="max-w-2xl">
            <span className="text-[#bef264] uppercase text-xs font-bold tracking-[0.3em] block mb-4">Our Services</span>
            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              We can help you with <br /> almost <span className="font-serif italic font-medium">anything.</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="max-w-sm text-lg text-gray-500">
              From high-end web design to complex Webflow development, we've got you covered.
            </p>
          </div>
        </div>

        {/* Services Tags Layout */}
        <div className="flex flex-wrap gap-4">
          {serviceList.map((service, index) => (
            <div 
              key={index}
              className="group flex items-center gap-2 px-8 py-5 border border-black/10 rounded-full hover:bg-[#bef264] hover:border-[#bef264] transition-all duration-300 cursor-default"
            >
              <span className="text-xl font-bold transition-colors md:text-2xl group-hover:text-black">
                {service}
              </span>
              <ArrowUpRight 
                className="transition-all opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" 
                size={24} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;