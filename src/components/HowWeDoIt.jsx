import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaCube, FaLink, FaShieldAlt } from 'react-icons/fa';

const HowWeDoIt = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="how" className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How <span className="text-primary-500">We Do It</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Powered by cutting-edge Web 3.0 and blockchain technology
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/30 rounded-lg flex items-center justify-center">
                    <FaCube className="text-2xl text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Web 3.0 Technology</h3>
                  <p className="text-gray-300 leading-relaxed">
                    TX is a Web 3.0 solution, powered by blockchain technology. Web 3.0 is the next
                    generation of Internet where users can own digital assets and have their custody
                    unlike in the Web we know and use now.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/30 rounded-lg flex items-center justify-center">
                    <FaLink className="text-2xl text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Blockchain Innovation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    It is possible thanks to the blockchain technology that allows creating tickets in
                    the form of unique digital assets, which cannot be replicated nor modified.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/30 rounded-lg flex items-center justify-center">
                    <FaShieldAlt className="text-2xl text-primary-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-white">Safe & Transparent</h3>
                  <p className="text-gray-300 leading-relaxed">
                    TX is committed to offer a safe space, where buying and selling tickets is
                    transparent and secured, guaranteeing trust, authenticity and fairness for the
                    users.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* YouTube Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary-500/30 shadow-2xl shadow-primary-500/20 aspect-video">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/hLYuwTw99R0"
                  title="TX demo Oct 2024"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
