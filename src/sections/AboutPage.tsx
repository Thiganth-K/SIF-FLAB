import React from 'react';
import { FaEye, FaFlag, FaHistory, FaCogs, FaThumbsUp, FaFlask, FaCalendarAlt, FaLaptop, FaQuoteLeft, FaUsers, FaAward, FaClock } from 'react-icons/fa';

interface AboutPageProps {
  darkMode?: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ darkMode = false }) => {

  const services = [
    { 
      icon: <FaFlask className="text-4xl" />, 
      title: 'Lab Slot Booking', 
      desc: 'Seamless online reservation system for laboratory time slots across all departments and research facilities.' 
    },
    { 
      icon: <FaLaptop className="text-4xl" />, 
      title: 'Equipment Booking', 
      desc: 'Advanced booking platform for specialized research equipment with real-time availability tracking.' 
    },
    { 
      icon: <FaClock className="text-4xl" />, 
      title: 'Real-time Management', 
      desc: 'Live monitoring and management of bookings with automated notifications and scheduling conflicts resolution.' 
    }
  ];

  const timeline = [
    { 
      year: '2020', 
      title: 'System Launch', 
      desc: 'Launched SIF-FLAB with basic lab booking capabilities, serving 5 laboratories and 200+ students across engineering departments.' 
    },
    { 
      year: '2021', 
      title: 'Equipment Integration', 
      desc: 'Expanded platform to include specialized equipment booking with inventory management and usage analytics for research optimization.' 
    },
    { 
      year: '2022', 
      title: 'Smart Analytics', 
      desc: 'Introduced AI-powered scheduling optimization, predictive maintenance alerts, and comprehensive usage reporting for institutional planning.' 
    }
  ];

  const testimonials = [
    { 
      name: 'Dr. Priya Sharma', 
      role: 'Head of Research Department', 
      quote: 'SIF-FLAB has revolutionized how we manage our laboratory resources. The booking system is intuitive and has eliminated scheduling conflicts entirely.' 
    },
    { 
      name: 'Prof. Rajesh Kumar', 
      role: 'Chemistry Department', 
      quote: 'The equipment booking feature has streamlined our research workflow. Students can now easily access specialized instruments when needed.' 
    }
  ];

  return (
    <section className={`relative min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-gray-50' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
    }`}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        
        {/* Vision Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                  <FaEye className={`text-2xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h2 className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                  Our Vision
                </h2>
              </div>
              <p className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To transform laboratory management through intelligent booking systems, making research facilities 
                accessible, efficient, and optimized for academic excellence and scientific innovation.
              </p>
              <button className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/25'
              }`}>
                Explore Platform
              </button>
            </div>
            <div className={`relative p-8 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
              <div className="text-center">
                <div className={`inline-flex p-6 rounded-full mb-4 ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                  <FaCalendarAlt className={`text-5xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                  Smart Scheduling
                </h3>
                <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Intelligent lab and equipment booking system
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 ${darkMode ? 'bg-yellow-600' : 'bg-yellow-100'}`}>
                  <FaUsers className={`text-3xl ${darkMode ? 'text-white' : 'text-yellow-600'}`} />
                </div>
                <h4 className={`text-xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                  10,000+ Users
                </h4>
                <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Students & Researchers
                </p>
              </div>
            </div>

            <div className="space-y-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                  <FaFlag className={`text-2xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h2 className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                  Our Mission
                </h2>
              </div>
              <p className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Empowering educational institutions with seamless laboratory resource management, 
                reducing scheduling conflicts, and maximizing research productivity through innovative technology.
              </p>
              <button className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/25'
              }`}>
                Book Now
              </button>
            </div>

            <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
              <div className="text-center">
                <div className={`inline-flex p-4 rounded-full mb-4 ${darkMode ? 'bg-green-600' : 'bg-green-100'}`}>
                  <FaAward className={`text-3xl ${darkMode ? 'text-white' : 'text-green-600'}`} />
                </div>
                <h4 className={`text-xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                  99.9% Uptime
                </h4>
                <p className={`text-sm mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  System Reliability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* History Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                <FaHistory className={`text-2xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                Our Journey
              </h2>
            </div>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              From a simple booking system to a comprehensive laboratory management platform
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${darkMode ? 'bg-blue-600' : 'bg-blue-300'} hidden lg:block`}></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                  <div className="flex-1">
                    <div className={`p-8 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                      <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-4 ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                        {item.year}
                      </div>
                      <h3 className={`text-2xl font-bold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className={`w-4 h-4 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-300'} border-4 ${darkMode ? 'border-slate-900' : 'border-white'} hidden lg:block`}></div>
                  
                  <div className="flex-1 lg:block hidden"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 gap-6">
              {services.map((service, index) => (
                <div key={index} className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105`}>
                  <div className="flex items-start space-x-4">
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-100'} flex-shrink-0`}>
                      <div className={`${darkMode ? 'text-white' : 'text-blue-600'}`}>
                        {service.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                        {service.title}
                      </h4>
                      <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                  <FaCogs className={`text-2xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h2 className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                  Platform Features
                </h2>
              </div>
              <p className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                SIF-FLAB provides comprehensive laboratory management solutions with intelligent scheduling, 
                real-time availability tracking, and seamless integration with academic workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Real-time lab and equipment availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Automated conflict resolution and notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Comprehensive usage analytics and reporting</span>
                </div>
              </div>
              <button className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/25'
              }`}>
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                <FaThumbsUp className={`text-2xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
              </div>
              <h2 className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                Success Stories
              </h2>
            </div>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Hear from educators and researchers who have transformed their lab management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`p-8 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className="mb-6">
                  <FaQuoteLeft className={`text-3xl ${darkMode ? 'text-blue-400' : 'text-blue-600'} opacity-50`} />
                </div>
                <p className={`text-lg leading-relaxed mb-6 italic ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-100'} flex items-center justify-center`}>
                    <span className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-blue-600'}`}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className={`font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                      {testimonial.name}
                    </h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutPage;
