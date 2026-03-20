import { motion } from 'framer-motion';

const Portfolio = () => {
  const services = [
    "Webflow Development", "UI/UX Design", "Web Design", 
    "SEO Optimization", "Branding", "Landing Page"
  ];

  const projects = [
    {
      title: "Digital Agency Website",
      category: "Web Design / Development",
      // Reliable link 1
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      title: "Fintech App Landing",
      category: "UI/UX Design",
      // Reliable link 2 (Fintech themed)
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-white text-black rounded-t-[50px] -mt-12 relative z-20">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold tracking-tight text-black md:text-6xl">Our Beautiful Works</h2>
          <p className="max-w-xl mx-auto text-lg text-gray-500">
            We help our clients grow their bottom-line with clear and professional websites.
          </p>
        </div>

        <div className="flex flex-wrap justify-center max-w-3xl gap-3 mx-auto mb-20">
          {services.map((service, index) => (
            <span 
              key={index}
              className="px-6 py-2.5 rounded-full border border-black/10 text-sm font-medium hover:bg-[#bef264] hover:border-[#bef264] transition-all cursor-pointer"
            >
              {service}
            </span>
          ))}
        </div>

        <div className="grid gap-8 mb-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-[2rem] bg-gray-200 aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1000";
                  }}
                />
              </div>
              <div className="flex items-start justify-between px-2 mt-6">
                <div>
                  <h3 className="text-2xl font-bold text-black">{project.title}</h3>
                  <p className="mt-1 text-gray-500">{project.category}</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 text-xl font-bold transition-all border rounded-full border-black/10 group-hover:bg-black group-hover:text-white">
                  ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-12 py-4 text-lg font-bold text-black transition-all border-2 border-black rounded-xl hover:bg-black hover:text-white">
            Load More
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;