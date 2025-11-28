import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FaShieldAlt,
  FaLock,
  FaUserSecret,
  FaEye,
  FaStar,
  FaMoneyBillWave,
  FaUsers,
} from 'react-icons/fa';

const WhatWeStandFor = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Authenticity',
      description:
        'Say goodbye to counterfeit tickets with NFT-based tickets ensuring authenticity and uniqueness.',
    },
    {
      icon: <FaLock />,
      title: 'Safety',
      description:
        'Ticket with impenetrable encryption allowing the QR code to be disclosed only once.',
    },
    {
      icon: <FaUserSecret />,
      title: 'Privacy',
      description:
        'Safeguard your identity and personal data, eliminating the risk of identity theft and sales of data.',
    },
    {
      icon: <FaEye />,
      title: 'Transparency',
      description: 'Pricing and fees as they are, all along the process.',
    },
    {
      icon: <FaStar />,
      title: 'Unique Experience',
      description:
        'Innovative and outstanding features bringing a new way to access and enjoy live entertainment.',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Revenue Sharing',
      description:
        'Generating extra revenue for artists and creating new way for them to interact with their fans and engage them.',
    },
    {
      icon: <FaUsers />,
      title: 'Stakeholders Incentive',
      description:
        'Incentivize promoters and ticketing companies, ensuring their participation and contribution to the system.',
    },
  ];

  return (
    <section id="what" className="py-20 bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            What <span className="text-primary-500">We Stand For</span>
          </h2>
          <p className="section-subheading max-w-3xl mx-auto">
            Our core values and principles that drive innovation in the ticketing industry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800 rounded-2xl p-8 border border-gray-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-2xl text-primary-500">{feature.icon}</span>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;
