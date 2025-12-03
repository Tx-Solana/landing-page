import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here (frontend only)
    console.log('Subscribed:', email);
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Get In <span className="text-primary-500">Touch</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ3ImXg2ew3g7NTztBppxrQly5jfb9ty-7zz7LAS3-6iXT8gnBxybWON5sdOPLxdtp88uU1umu8W"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-3 min-w-[200px] justify-center"
            >
              <FaCalendarAlt size={20} />
              <span>Book a Demo</span>
            </a>
            <a
              href="mailto:info@txticketing.com"
              className="btn-secondary flex items-center gap-3 min-w-[200px] justify-center"
            >
              <FaEnvelope size={20} />
              <span>Email Us</span>
            </a>
          </motion.div>

          {/* Subscribe Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-dark-800 border border-gray-800 rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Subscribe
              </h3>
              <p className="text-gray-400 text-lg">
                Stay updated with the latest news and features from TX Ticketing
              </p>
            </div>

            {isSubscribed ? (
              <div className="py-8 text-center">
                <div className="w-16 h-16 bg-primary-500/10 border-2 border-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-primary-500">✓</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Thank You for Subscribing!</h4>
                <p className="text-gray-400">
                  You'll receive updates about TX Ticketing in your inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-4 py-3 bg-dark-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all placeholder-gray-600"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold rounded-lg transition-colors whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
