import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FaLinkedin } from 'react-icons/fa';

const Team = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const teamMembers = [
    {
      name: 'Laurent Koehler',
      role: 'CEO',
      image: './images/team/laurent.jpg',
      linkedin: 'https://www.linkedin.com/in/lkoehler81/',
    },
    {
      name: 'Michael Tse',
      role: 'CTO',
      image: './images/team/michael.jpg',
      linkedin: 'https://www.linkedin.com/in/man-kit-michael-tse-4013a5176/',
    },
    {
      name: 'Nsikan Friday',
      role: 'CMO',
      image: './images/team/nsikan.jfif',
      linkedin: 'https://www.linkedin.com/in/nsikan-friday-757397b1/',
    },
  ];

  return (
    <section id="team" className="py-20 bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Who <span className="text-primary-500">We Are</span>
          </h2>
          <p className="section-subheading">Meet the team behind TX Ticketing</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-800 rounded-2xl p-8 border border-gray-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-300 transform hover:-translate-y-2 text-center">
                <div className="relative inline-block mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary-500/30 group-hover:border-primary-500 transition-colors duration-300 mx-auto">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary-500 font-semibold text-lg mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary-500/10 hover:bg-primary-500 text-primary-500 hover:text-dark-900 border border-primary-500/30 hover:border-primary-500 rounded-full transition-colors duration-300"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
