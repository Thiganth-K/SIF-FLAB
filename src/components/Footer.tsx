import React from 'react';
import { FaFlask, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

interface FooterProps {
  darkMode?: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode = false }) => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Lab Booking', href: '#lab-booking' },
    { name: 'Equipment Booking', href: '#equipment' },
  ];

  const services = [
    { name: 'Laboratory Management', href: '#lab-booking' },
    { name: 'Equipment Booking', href: '#equipment' },
    { name: 'Real-time Scheduling', href: '#about' },
    { name: 'Analytics & Reports', href: '#about' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, href: '#', name: 'Facebook' },
    { icon: <FaTwitter />, href: '#', name: 'Twitter' },
    { icon: <FaLinkedin />, href: '#', name: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', name: 'Instagram' },
    { icon: <FaGithub />, href: '#', name: 'GitHub' },
  ];

  return (
    <footer className={`transition-all duration-300 ${
      darkMode 
        ? 'bg-slate-900 border-t border-slate-700 text-gray-300' 
        : 'bg-gray-900 border-t border-gray-200 text-gray-300'
    }`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-blue-600">
                <FaFlask className="text-xl text-white" />
              </div>
              <span className="font-bold text-2xl text-blue-400">
                SIF-FLAB
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming laboratory management through intelligent booking systems, 
              making research facilities accessible and efficient for academic excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-400">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-blue-400">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-blue-600 text-lg mt-1 flex-shrink-0" />
                <p className="text-gray-400 leading-relaxed">
                  Sona College of Technology,<br />
                  Salem, Tamil Nadu, India
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-600 text-lg flex-shrink-0" />
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-600 text-lg flex-shrink-0" />
                <p className="text-gray-400">info@sonatech.ac.in</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className={`border-t py-6 ${
        darkMode ? 'border-slate-700' : 'border-gray-800'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} SIF-FLAB. All rights reserved. Built with passion for education.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
