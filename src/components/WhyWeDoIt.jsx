import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const WhyWeDoIt = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="why" className="py-20 bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Why <span className="text-primary-500">We Do It</span>
          </h2>
          <p className="section-subheading">It Is More Than Ticketing</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-300 leading-relaxed">
                TX offers an all-in-one ticketing solution tailored for performers, event promoters,
                and ticketing companies. By tokenizing tickets, TX effectively addresses challenges
                like <strong className="text-white">scalping and fraud</strong> across both primary and secondary sales.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It also integrates unique features designed to enhance user engagement, providing
                an elevated and seamless experience.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The core concept is to establish a <strong className="text-white">collaborative system</strong> that
                actively engages all stakeholders and rewards their contributions to ensure their
                sustained participation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Audiences, ticketing companies, promoters, and performers are incentivized to
                interact transparently and securely, creating mutual benefits and fostering a
                thriving ecosystem.
              </p>
            </div>

            <div className="bg-dark-800 border-l-4 border-primary-500 p-6 rounded-r-lg">
              <p className="text-gray-200 font-medium italic">
                TX is committed to fostering a community-driven approach to ticketing, redefining
                access to live entertainment through principles and mechanisms that encourage
                collaboration among all stakeholders.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20 border-2 border-primary-500/30 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://5fdd605ef101e574db574be5504f3f7f.cdn.bubble.io/cdn-cgi/image/w=512,h=381,f=auto,dpr=1,fit=contain/f1733648159546x572585970139352100/TX_home.png"
                  alt="TX Home Platform"
                  className="w-full h-auto"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary-500/20 border-2 border-primary-500/30 transform hover:scale-105 transition-transform duration-300">
                <img
                  src="https://5fdd605ef101e574db574be5504f3f7f.cdn.bubble.io/cdn-cgi/image/w=512,h=381,f=auto,dpr=1,fit=contain/f1733648038433x494815609082667840/TX_Tickets.png"
                  alt="TX Tickets"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeDoIt;
