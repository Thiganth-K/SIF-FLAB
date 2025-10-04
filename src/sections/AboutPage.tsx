import React from 'react';
import { FaCogs, FaThumbsUp, FaFlask, FaLaptop, FaQuoteLeft, FaClock, FaBuilding, FaIndustry, FaRocket, FaLightbulb, FaSeedling, FaCubes, FaUsers, FaAward } from 'react-icons/fa';

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

  const testimonials = [
    { 
      name: 'Dr. Priya Sharma', 
      role: 'Head of Research Department', 
      quote: 'SIF-FLAB has revolutionized how we manage our laboratory resources. The booking system is intuitive and has eliminated scheduling conflicts entirely.' 
    },
    { 
      name: 'Prof. Rajesh Kumar', 
      role: 'Chemistry Department', 
      quote: 'The Fab Lab equipment booking feature has streamlined our research workflow. Students can now easily access specialized instruments when needed.' 
    }
  ];

  return (
    <section className={`relative min-h-screen transition-all duration-500 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-gray-50' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
    }`}>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        
        {/* About SIF Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                  <FaBuilding className={`text-2xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h2 className={`text-4xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                  About SIF
                </h2>
              </div>
              <div className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-4`}>
                <p>
                  <span className="font-bold text-blue-600">Sona Incubation Foundation (SIF)</span> has been established as a Section 8 company non-profit organization funded by <span className="font-semibold">DST-NIDHI & Facilitating Startup India Seed Fund</span>.
                </p>
                <p>
                  SIF acts as a <span className="font-bold text-yellow-600">"One-Stop Shop – Business Incubator"</span> for innovators and start-ups, encouraging and facilitating an entrepreneurial and innovative ecosystem for all stakeholders, including innovators, student community, faculty, and society at large.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'}`}>
                  DST-NIDHI Funded
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'}`}>
                  Startup India Seed Fund
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800'}`}>
                  Section 8 Non-Profit
                </span>
              </div>
              <button className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/25' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/25'
              }`}>
                <FaRocket className="mr-2" />
                Explore Incubation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${darkMode ? 'bg-blue-600' : 'bg-blue-100'}`}>
                    <FaSeedling className={`text-3xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                    Startup Incubation
                  </h3>
                </div>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${darkMode ? 'bg-green-600' : 'bg-green-100'}`}>
                    <FaLightbulb className={`text-3xl ${darkMode ? 'text-white' : 'text-green-600'}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-green-400' : 'text-green-800'}`}>
                    Innovation Hub
                  </h3>
                </div>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${darkMode ? 'bg-yellow-600' : 'bg-yellow-100'}`}>
                    <FaUsers className={`text-3xl ${darkMode ? 'text-white' : 'text-yellow-600'}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-800'}`}>
                    Community Ecosystem
                  </h3>
                </div>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-full mb-4 ${darkMode ? 'bg-purple-600' : 'bg-purple-100'}`}>
                    <FaAward className={`text-3xl ${darkMode ? 'text-white' : 'text-purple-600'}`} />
                  </div>
                  <h3 className={`text-lg font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>
                    Government Support
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Fab Lab Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`relative p-8 rounded-2xl ${darkMode ? 'bg-slate-800/50' : 'bg-white/80'} backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 order-2 lg:order-1`}>
              <div className="text-center">
                <div className={`inline-flex p-6 rounded-full mb-6 ${darkMode ? 'bg-gradient-to-br from-blue-600 to-purple-600' : 'bg-gradient-to-br from-blue-100 to-purple-100'}`}>
                  <FaCubes className={`text-5xl ${darkMode ? 'text-white' : 'text-blue-600'}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-800'}`}>
                  Advanced Prototyping
                </h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  State-of-the-art tools for rapid prototyping and product development
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>3D Printing</span>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>CNC Machines</span>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Electronics Lab</span>
                  </div>
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-700' : 'bg-gray-100'}`}>
                    <span className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Testing Equipment</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-xl ${darkMode ? 'bg-purple-600' : 'bg-purple-100'}`}>
                  <FaIndustry className={`text-2xl ${darkMode ? 'text-white' : 'text-purple-600'}`} />
                </div>
                <h2 className={`text-4xl font-bold ${darkMode ? 'text-purple-400' : 'text-purple-800'}`}>
                  About Fab Lab
                </h2>
              </div>
              <div className={`text-xl leading-relaxed font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'} space-y-4`}>
                <p>
                  <span className="font-bold text-purple-600">Sona Incubation's Fab Lab</span> is a state-of-the-art innovation space that supports innovators and startups, including early-stage ventures, in turning ideas into reality.
                </p>
                <p>
                  Equipped with <span className="font-semibold">advanced tools and expert guidance</span>, the Fab Lab enables rapid prototyping, product development, and testing. It provides a collaborative environment where entrepreneurs can validate concepts, reduce risks, and accelerate their journey from idea to market.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Rapid prototyping and testing facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Expert guidance and mentorship support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Collaborative innovation ecosystem</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-purple-400' : 'bg-purple-600'}`}></div>
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-medium`}>Concept validation and risk reduction</span>
                </div>
              </div>
              <button className={`inline-flex items-center px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                darkMode 
                  ? 'bg-purple-600 hover:bg-purple-500 text-white hover:shadow-purple-500/25' 
                  : 'bg-purple-600 hover:bg-purple-700 text-white hover:shadow-purple-600/25'
              }`}>
                <FaCubes className="mr-2" />
                Book Fab Lab
              </button>
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
