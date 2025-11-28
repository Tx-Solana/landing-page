import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is TX?',
      answer:
        'TX is a Web 3.0 ticketing solution powered by blockchain technology. It provides an all-in-one platform for buying, selling, and managing event tickets with NFT-based authentication, ensuring security, transparency, and authenticity.',
    },
    {
      question: 'How to login?',
      answer:
        'You can login to TX using your Web 3.0 wallet or create a new account through our secure authentication system. We support various wallet providers for seamless access.',
    },
    {
      question: 'How to buy a ticket?',
      answer:
        'Browse events on our platform, select your desired ticket, and complete the purchase using our supported payment methods. Your ticket will be minted as an NFT and stored securely in your wallet.',
    },
    {
      question: 'What are the payment options?',
      answer:
        'We accept various payment methods including credit cards, cryptocurrencies, and other digital payment systems to provide flexibility for our users.',
    },
    {
      question: 'Where is my ticket stored?',
      answer:
        'Your ticket is stored as an NFT in your Web 3.0 wallet. You have full custody and control over your digital ticket, which can be accessed anytime through your wallet.',
    },
    {
      question: 'How to use my ticket?',
      answer:
        'At the event, simply present your ticket QR code from your wallet. The code uses impenetrable encryption and can only be disclosed once, ensuring maximum security.',
    },
    {
      question: 'How can I re-sell my ticket?',
      answer:
        'You can list your ticket for resale on our secure secondary marketplace. All transactions are tracked on the blockchain, preventing fraud and ensuring fair pricing.',
    },
    {
      question: 'Can I get a refund if I cannot sell my ticket before the event?',
      answer:
        'Refund policies vary by event and promoter. Please check the specific event terms and conditions. Our platform provides transparency about refund eligibility for each event.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            <span className="text-primary-500">FAQ</span>s
          </h2>
          <p className="section-subheading">Find answers to commonly asked questions</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-gray-800 rounded-xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left bg-dark-800 hover:bg-dark-700 transition-colors duration-200"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white pr-8">{faq.question}</span>
                <span className="flex-shrink-0 text-primary-500">
                  {openIndex === index ? (
                    <FaChevronUp size={20} />
                  ) : (
                    <FaChevronDown size={20} />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed bg-dark-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
