import { Zap, ShieldCheck, Smile, Clock } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "On-time delivery",
      description: "Receive your design within a few business days on average. No more waiting weeks.",
      icon: <Clock className="text-[#bef264]" size={28} />
    },
    {
      title: "Fixed monthly rate",
      description: "No surprises here! Pay the same fixed price each month, no matter how many requests.",
      icon: <Zap className="text-[#bef264]" size={28} />
    },
    {
      title: "Top-tier quality",
      description: "Get high-end designs from senior designers. We don't settle for average.",
      icon: <ShieldCheck className="text-[#bef264]" size={28} />
    },
    {
      title: "Flexible and scalable",
      description: "Scale your design needs up or down. Pause or cancel your subscription anytime.",
      icon: <Smile className="text-[#bef264]" size={28} />
    }
  ];

  return (
    <section id="benefits" className="px-6 py-24 text-black bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-black md:text-5xl">
            Design that helps <br /> your business grow.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:border-[#bef264] transition-all duration-300 group"
            >
              <div className="p-3 mb-6 transition-transform bg-white shadow-sm w-fit rounded-xl group-hover:scale-110">
                {benefit.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-black">{benefit.title}</h3>
              <p className="leading-relaxed text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;