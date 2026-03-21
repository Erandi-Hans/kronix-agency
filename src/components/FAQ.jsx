import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your typical turnaround time?",
      answer: "Most design requests are completed within 2-3 business days. More complex tasks like full website designs may take longer."
    },
    {
      question: "How do I make a design request?",
      answer: "Once you subscribe, you'll get access to your own Trello board where you can add as many requests as you'd like."
    },
    {
      question: "Are there any limits on revisions?",
      answer: "Not at all! We'll keep refining the design until you are 100% satisfied with the result."
    },
    {
      question: "What software do you use for designing?",
      answer: "We primarily use Figma for all UI/UX design and Webflow for development tasks."
    }
  ];

  return (
    <section id="faq" className="px-6 py-24 text-black bg-white">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about our design subscription.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-none"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex items-center justify-between w-full py-6 text-left transition-all group"
              >
                <span className="text-xl font-bold group-hover:text-gray-600">
                  {faq.question}
                </span>
                <div className="p-2 bg-gray-100 rounded-full">
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-lg leading-relaxed text-gray-500">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;