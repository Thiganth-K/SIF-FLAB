import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaCogs, FaFlask, FaLaptop, FaClock,
  FaIndustry, FaCubes
} from 'react-icons/fa';
// Assuming logo is imported here, e.g.: // Make sure this path is correct for your logo image

gsap.registerPlugin(ScrollTrigger);

interface AboutPageProps {
  darkMode?: boolean;
}

const AboutPage: React.FC<AboutPageProps> = ({ darkMode = false }) => {
  // Refs for section containers
  const sifRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLDivElement>(null);
  const platformRef = useRef<HTMLDivElement>(null);

  // Ref for the branch diagram specifically, if you want to animate it separately
  const branchDiagramRef = useRef<HTMLDivElement>(null);


  // Scroll animation for all sections
useEffect(() => {
  const sections = [sifRef.current, fabRef.current, platformRef.current];

  sections.forEach((section) => {
    if (!section) return;

    // Target a broader range of elements including the new diagram components
    const elements = section.querySelectorAll<HTMLElement>('h2, p, span, div:not(.absolute.z-10, .absolute.top, .absolute.bottom, .svg-container), button, .feature-node-circle, .feature-node-text');


    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 40,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        ease: 'power3.out',
        stagger: 0.06,
        duration: 0.6, // fast reveal speed
        scrollTrigger: {
          trigger: section,
          start: 'top 85%', // trigger slightly before entering
          toggleActions: 'play none none none', // only play once (no reverse)
          once: true, // plays only once even if scrolled back
        },
      }
    );
  });

  // Optional: Animate SVG lines drawing in
  if (branchDiagramRef.current) {
    gsap.fromTo(
      branchDiagramRef.current.querySelectorAll('.branch-line'),
      {
        strokeDasharray: (_i, target) => target.getTotalLength(),
        strokeDashoffset: (_i, target) => target.getTotalLength(),
      },
      {
        strokeDashoffset: 0,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: branchDiagramRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
      }
    );
  }


  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);




  const services = [
    {
      icon: <FaFlask className="text-4xl" />,
      title: 'Lab Slot Booking',
      desc: 'Seamless online reservation system for laboratory time slots across all departments and research facilities.',
    },
    {
      icon: <FaLaptop className="text-4xl" />,
      title: 'Equipment Booking',
      desc: 'Advanced booking platform for specialized research equipment with real-time availability tracking.',
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: 'Real-time Management',
      desc: 'Live monitoring and management of bookings with automated notifications and scheduling conflicts resolution.',
    },
  ];

  return (
    <section
      className={`relative min-h-screen transition-all duration-500 ${
        darkMode
          ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-gray-50'
          : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-16">
        {/* ----------- About Fab Lab Section ----------- */}
        <div ref={fabRef} className="mb-20">
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
        </div>

        {/* ----------- Platform Features Section ----------- */}
        <div ref={platformRef} className="mb-20">
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
        </div>

      </div>
    </section>
  );
};

export default AboutPage;