import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Standard",
      price: "$2,995",
      tag: "Most Popular",
      features: ["1x active task at a time", "Unlimited revisions", "Dedicated project manager", "Daily comms through Slack", "2-3 days turn around time"]
    },
    {
      name: "Growth",
      price: "$4,795",
      tag: "Best Value",
      features: ["2x active task at a time", "Unlimited revisions", "Dedicated project manager", "Daily comms through Slack", "2-3 days turn around time"]
    },
    {
      name: "Basic - Weekly",
      price: "$890",
      features: ["Fixed scope of work", "2 rounds of revisions", "Dedicated project manager", "Daily comms through Slack", "1x designer"]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <span className="text-[#bef264] text-sm font-bold tracking-widest uppercase">Clear & Simple Pricing</span>
          <h2 className="mt-4 text-5xl font-bold">Simple pricing to level up your brand.</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="p-8 rounded-[2rem] bg-[#1a1a1a] border border-white/5 hover:border-[#bef264]/50 transition-all">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                {plan.tag && <span className="bg-[#bef264] text-black text-xs font-bold px-3 py-1 rounded-full">{plan.tag}</span>}
              </div>
              <div className="mb-8">
                <span className="text-4xl font-bold text-[#bef264]">{plan.price}</span>
                <span className="text-gray-500">/m</span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-400">
                    <Check size={18} className="text-[#bef264]" /> {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#bef264] text-black font-bold rounded-xl hover:bg-[#a3d94b] transition-colors">
                Click to buy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;