import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaTwitter />, href: 'https://x.com/txticketing', label: 'Twitter' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/tx-ticketing/about/', label: 'LinkedIn' },
    // { icon: <FaGithub />, href: '#', label: 'GitHub' },
    // { icon: <FaDiscord />, href: '#', label: 'Discord' },
  ];

  const footerLinks = {
    Product: [
      { name: 'Features', href: '#what' },
      { name: 'Technology', href: '#how' },
      { name: 'FAQs', href: '#faqs' },
      { name: 'Pricing', href: '#' },
    ],
    Company: [
      { name: 'About Us', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press Kit', href: '#' },
    ],
    Resources: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support', href: '#contact' },
      { name: 'Community', href: '#' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Compliance', href: '#' },
    ],
  };

  return (
    <footer className="bg-dark-900 text-gray-400 border-t border-gray-800">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="text-2xl font-bold text-white mb-4 block">
              TX <span className="text-primary-500">Ticketing</span>
            </a>
            <p className="text-gray-500 mb-6">
              Redefining ticketing through blockchain technology and Web 3.0 innovation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-dark-900 border border-gray-800 hover:border-primary-500 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-primary-500 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-12 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-3">Subscribe to our newsletter</h3>
            <p className="text-gray-500 mb-4">
              Get the latest updates on TX features and industry news.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-dark-800 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-600"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-500 hover:bg-primary-600 text-dark-900 font-bold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} TX Ticketing. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
