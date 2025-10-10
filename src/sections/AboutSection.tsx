import { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import {
  FaRocket, FaCubes,
  FaLightbulb, FaSeedling, FaUsers, FaAward, FaSun, FaMoon
} from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const [darkMode, setDarkMode] = useState(true);
  // Refs for sections and diagram (to enable scroll-based animations like AboutPage)
  const sifRef = useRef<HTMLDivElement>(null);
  const fabRef = useRef<HTMLDivElement>(null);
  const branchDiagramRef = useRef<HTMLDivElement>(null);

  // Apply on-scroll animations similar to AboutPage
  useEffect(() => {
    const sections = [sifRef.current, fabRef.current];

    sections.forEach((section) => {
      if (!section) return;

      const elements = section.querySelectorAll<HTMLElement>(
        'h2, p, span, button, .feature-node-circle, .feature-node-text'
      );

      gsap.fromTo(
        elements,
        { opacity: 0, y: 40, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          ease: 'power3.out',
          stagger: 0.06,
          duration: 0.6,
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    });

    if (branchDiagramRef.current) {
      const lines = branchDiagramRef.current.querySelectorAll<SVGPathElement>('.branch-line');
      gsap.fromTo(
        lines,
        {
          strokeDasharray: (_i, target: any) => (target as SVGPathElement).getTotalLength(),
          strokeDashoffset: (_i, target: any) => (target as SVGPathElement).getTotalLength(),
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
  return (
    <section
      id="about"
      className={`relative min-h-screen transition-all duration-500 px-6 py-20 ${
        darkMode
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-50'
          : 'bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 text-gray-800'
      }`}
    >
      {/* Theme toggle */}
      <button
        type="button"
        onClick={() => setDarkMode((d) => !d)}
        aria-pressed={!darkMode}
        title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        className={`absolute top-6 right-6 inline-flex items-center gap-2 rounded-full px-4 py-2 shadow-sm border transition-colors ${
          darkMode
            ? 'bg-slate-800/70 text-gray-100 border-slate-700 hover:bg-slate-700'
            : 'bg-slate-100/80 text-slate-800 border-slate-300 hover:bg-slate-200'
        }`}
      >
        {darkMode ? <FaSun className="text-amber-300" /> : <FaMoon className="text-indigo-500" />}
        <span className="text-sm font-medium">{darkMode ? 'Dark' : 'Light'} mode</span>
      </button>

      <div className="max-w-7xl mx-auto">
        
        {/* ----------- About SIF Section ----------- */}
        <motion.div
          ref={sifRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                
                <motion.h2 
                  className={`text-4xl font-extrabold tracking-tight cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-800 hover:text-blue-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sona Incubation Foundation
                </motion.h2>
              </div>

              <div className={`text-xl leading-relaxed font-medium space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-blue-600 text-white' : 'bg-blue-200 text-blue-900'}`}>DST-NIDHI Funded</span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-green-600 text-white' : 'bg-green-200 text-green-900'}`}>Startup India Seed Fund</span>
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${darkMode ? 'bg-yellow-600 text-white' : 'bg-yellow-200 text-yellow-900'}`}>Section 8 Non-Profit</span>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 transform hover:shadow-lg ${
                  darkMode ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/25' : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/25'
                }`}
              >
                <FaRocket className="mr-2" />
                Explore Incubation
              </motion.button>
            </div>

            {/* SIF Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {[
                {
                  icon: FaSeedling,
                  title: "Startup Incubation",
                  //description: "We nurture innovative ideas from concept to reality, providing the resources and mentorship needed to grow.",
                  color: "blue"
                },
                {
                  icon: FaLightbulb,
                  title: "Innovation Hub",
                  //description: "A collaborative space where creativity and technology converge to solve real-world problems.",
                  color: "yellow"
                },
                {
                  icon: FaUsers,
                  title: "Community Ecosystem",
                  //description: "Connect with a vibrant network of entrepreneurs, mentors, and investors to build meaningful partnerships.",
                  color: "yellow"
                },
                {
                  icon: FaAward,
                  title: "Government Support",
                  //description: "Leverage our strong government ties to access funding, grants, and other essential support programs.",
                  color: "blue"
                }
              ].map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`p-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                            darkMode
                            ? `bg-slate-800/50 hover:bg-slate-700/80 border border-slate-700`
                            : `bg-slate-100/80 hover:bg-slate-200/90 border border-slate-300/60 shadow`
                        }`}
                    >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-full ${
                      darkMode 
                        ? `bg-${feature.color}-500/10 text-${feature.color}-400` 
                        : `bg-${feature.color}-100 text-${feature.color}-600`
                    }`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className={`text-2xl font-semibold ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{feature.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ----------- About Fab Lab Section ----------- */}
        <motion.div
          ref={fabRef}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center space-x-3 mb-6">
                <motion.h2 
                  className={`text-4xl font-extrabold tracking-tight cursor-pointer transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'text-yellow-300 hover:text-yellow-200' : 'text-yellow-700 hover:text-yellow-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  FAB Lab
                </motion.h2>
              </div>
              
              <div className={`text-xl leading-relaxed font-medium space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:shadow-lg ${
                  darkMode 
                    ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900 hover:shadow-yellow-500/25' 
                    : 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 hover:shadow-yellow-500/25'
                }`}
              >
                <FaCubes className="mr-2" />
                View More
              </motion.button>
            </div>
            
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className={`text-xl leading-relaxed font-normal ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Lorem ipsum dolor sit amet consectetur</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className={`text-xl leading-relaxed font-normal ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Adipiscing elit sed do eiusmod tempor</span>
                  </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className={`text-xl leading-relaxed font-normal ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Incididunt ut labore et dolore magna</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span className={`text-xl leading-relaxed font-normal ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Aliqua enim ad minim veniam quis</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Decorative Blur Effect */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-sky-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl" />
    </section>
  );
}
