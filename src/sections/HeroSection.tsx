import React, { useState, useEffect } from 'react';
import SplitText from '../components/SplitText/SplitText';

const HeroSection: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={`relative min-h-screen font-inter overflow-hidden transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-slate-900 to-slate-800 text-gray-50' 
        : 'bg-gradient-to-br from-slate-50 to-slate-200 text-gray-900'
    }`}>
      {/* Modern Abstract Background */}
      <div className="absolute inset-0 pointer-events-none z-5 overflow-hidden">
        
        {/* Flowing Wave Patterns */}
        <div className="absolute inset-0">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Advanced Gradients */}
              <radialGradient id="wave1" cx="30%" cy="40%" r="60%">
                <stop offset="0%" stopColor={darkMode ? "#3B82F6" : "#60A5FA"} stopOpacity="0.15" />
                <stop offset="50%" stopColor={darkMode ? "#1E40AF" : "#3B82F6"} stopOpacity="0.08" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
              
              <radialGradient id="wave2" cx="70%" cy="60%" r="50%">
                <stop offset="0%" stopColor={darkMode ? "#FDE047" : "#F59E0B"} stopOpacity="0.12" />
                <stop offset="70%" stopColor={darkMode ? "#FACC15" : "#FCD34D"} stopOpacity="0.06" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>

              <linearGradient id="mesh1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={darkMode ? "#3B82F6" : "#60A5FA"} stopOpacity="0.1" />
                <stop offset="50%" stopColor={darkMode ? "#8B5CF6" : "#A78BFA"} stopOpacity="0.05" />
                <stop offset="100%" stopColor={darkMode ? "#FDE047" : "#FCD34D"} stopOpacity="0.08" />
              </linearGradient>
            </defs>
            
            {/* Organic Flowing Shapes */}
            <path d="M-100,300 C200,100 400,500 600,300 C800,100 1000,400 1300,250 L1300,0 L-100,0 Z" 
                  fill="url(#wave1)" className="animate-pulse" style={{animationDuration: '6s'}} />
            
            <path d="M-100,600 C300,400 500,700 800,500 C1000,300 1200,600 1300,450 L1300,800 L-100,800 Z" 
                  fill="url(#wave2)" className="animate-pulse" style={{animationDuration: '8s', animationDelay: '2s'}} />
            
            {/* Abstract Mesh Network */}
            <g opacity="0.06">
              {/* Dynamic connecting lines */}
              <path d="M100,150 Q300,50 500,150 T900,100" stroke={darkMode ? "#3B82F6" : "#60A5FA"} strokeWidth="1" fill="none" />
              <path d="M200,350 Q400,250 600,350 T1000,300" stroke={darkMode ? "#FDE047" : "#F59E0B"} strokeWidth="0.8" fill="none" />
              <path d="M150,550 Q350,450 550,550 T950,500" stroke={darkMode ? "#8B5CF6" : "#A78BFA"} strokeWidth="1.2" fill="none" />
              
              {/* Network nodes */}
              <circle cx="100" cy="150" r="3" fill={darkMode ? "#3B82F6" : "#60A5FA"} opacity="0.4" />
              <circle cx="500" cy="150" r="2" fill={darkMode ? "#3B82F6" : "#60A5FA"} opacity="0.3" />
              <circle cx="900" cy="100" r="4" fill={darkMode ? "#3B82F6" : "#60A5FA"} opacity="0.5" />
              <circle cx="200" cy="350" r="2.5" fill={darkMode ? "#FDE047" : "#F59E0B"} opacity="0.4" />
              <circle cx="600" cy="350" r="3.5" fill={darkMode ? "#FDE047" : "#F59E0B"} opacity="0.3" />
            </g>
            
            {/* Modern Abstract Elements */}
            <g opacity="0.08">
              {/* Triangular compositions */}
              <polygon points="800,100 850,200 750,200" fill="url(#mesh1)" />
              <polygon points="300,500 380,600 220,600" fill="url(#mesh1)" />
              
              {/* Curved abstract forms */}
              <ellipse cx="150" cy="200" rx="80" ry="120" fill={darkMode ? "#3B82F6" : "#60A5FA"} opacity="0.05" transform="rotate(25)" />
              <ellipse cx="950" cy="600" rx="100" ry="60" fill={darkMode ? "#FDE047" : "#F59E0B"} opacity="0.06" transform="rotate(-15)" />
            </g>
          </svg>
        </div>

        {/* Dynamic Gradient Orbs */}
        <div className="absolute top-10 right-20 w-64 h-64 rounded-full opacity-10 animate-pulse" 
             style={{
               background: darkMode 
                 ? 'radial-gradient(circle, #3B82F6 0%, transparent 70%)'
                 : 'radial-gradient(circle, #60A5FA 0%, transparent 70%)',
               animationDuration: '4s'
             }} />
        
        <div className="absolute bottom-20 left-16 w-48 h-48 rounded-full opacity-8 animate-pulse" 
             style={{
               background: darkMode 
                 ? 'radial-gradient(circle, #FDE047 0%, transparent 60%)'
                 : 'radial-gradient(circle, #F59E0B 0%, transparent 60%)',
               animationDuration: '5s',
               animationDelay: '2s'
             }} />

        <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full opacity-6 animate-pulse" 
             style={{
               background: darkMode 
                 ? 'radial-gradient(circle, #8B5CF6 0%, transparent 50%)'
                 : 'radial-gradient(circle, #A78BFA 0%, transparent 50%)',
               animationDuration: '6s',
               animationDelay: '1s'
             }} />

        {/* Subtle Mesh Overlay */}
        <div className={`absolute inset-0 opacity-5 ${
          darkMode ? 'bg-gradient-to-br from-blue-500/10 via-transparent to-yellow-400/5' 
                   : 'bg-gradient-to-br from-blue-400/8 via-transparent to-yellow-300/6'
        }`} />
        
        {/* Corner Accent Gradients */}
        <div className={`absolute top-0 left-0 w-1/2 h-1/2 ${
          darkMode 
            ? 'bg-gradient-to-br from-blue-600/5 to-transparent' 
            : 'bg-gradient-to-br from-blue-400/8 to-transparent'
        }`} />
        
        <div className={`absolute bottom-0 right-0 w-2/3 h-2/3 ${
          darkMode 
            ? 'bg-gradient-to-tl from-yellow-500/4 via-purple-500/3 to-transparent' 
            : 'bg-gradient-to-tl from-yellow-400/6 via-purple-400/4 to-transparent'
        }`} />
      </div>

      {/* Enhanced Particles Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-40 ${
              darkMode ? 'bg-blue-400' : 'bg-blue-500'
            }`}
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 3}s`,
            }}
          />
        ))}
        
        {/* Additional yellow particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`yellow-${i}`}
            className={`absolute rounded-full opacity-30 ${
              darkMode ? 'bg-yellow-300' : 'bg-yellow-400'
            }`}
            style={{
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 3}s ease-in-out infinite ${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Interactive Cursor */}
      <div
        className="fixed w-12 h-12 rounded-full pointer-events-none z-20 opacity-30 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
          background: darkMode 
            ? 'radial-gradient(circle, #FDE047 0%, transparent 70%)'
            : 'radial-gradient(circle, #FCD34D 0%, transparent 70%)',
        }}
      />

      {/* Header with Navigation and Dark Mode Toggle */}
      <header className="relative z-30 p-4 lg:p-8">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          {/* Logo */}
          <div className={`flex items-center gap-2 font-bold text-xl lg:text-2xl ${
            darkMode ? 'text-blue-400' : 'text-blue-600'
          }`}>
            <span className="material-icons text-2xl lg:text-4xl">science</span>
            <span>SIF-FLAB</span>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className={`relative font-semibold text-base lg:text-lg transition-all duration-300 hover:scale-105 ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <span className="flex items-center gap-1">
                <span className="material-icons text-sm">home</span>
                Home
              </span>
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                darkMode ? 'bg-blue-400' : 'bg-blue-600'
              } transform scale-x-100 transition-transform duration-300`}></span>
            </a>
            
            <a 
              href="#about" 
              className={`font-semibold text-base lg:text-lg transition-all duration-300 hover:scale-105 relative group ${
                darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="flex items-center gap-1">
                <span className="material-icons text-sm">info</span>
                About
              </span>
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                darkMode ? 'bg-blue-400' : 'bg-blue-600'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
            </a>
            
            <a 
              href="#contact" 
              className={`font-semibold text-base lg:text-lg transition-all duration-300 hover:scale-105 relative group ${
                darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="flex items-center gap-1">
                <span className="material-icons text-sm">contact_mail</span>
                Contact Us
              </span>
              <span className={`absolute -bottom-1 left-0 w-full h-0.5 ${
                darkMode ? 'bg-blue-400' : 'bg-blue-600'
              } transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></span>
            </a>
          </nav>

          {/* Mobile Menu Button & Dark Mode Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu Button */}
            <button className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              darkMode 
                ? 'bg-slate-800/90 border border-blue-400 hover:shadow-blue-400/50' 
                : 'bg-white/90 border border-blue-600 hover:shadow-blue-600/50'
            } backdrop-blur-sm shadow-lg hover:shadow-xl`}>
              <span className={`material-icons text-lg ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                menu
              </span>
            </button>

            {/* Dark Mode Toggle */}
            <button 
              className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 border-2 ${
                darkMode 
                  ? 'bg-slate-800/90 border-blue-400 hover:shadow-blue-400/50' 
                  : 'bg-white/90 border-blue-600 hover:shadow-blue-600/50'
              } backdrop-blur-sm shadow-xl hover:shadow-2xl`}
              onClick={toggleDarkMode}
            >
              <span className={`material-icons text-xl lg:text-2xl ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                {darkMode ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto px-4 lg:px-8 py-8 lg:py-16 items-center relative z-20">
        {/* Left Content */}
        <div className="flex flex-col space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight space-y-2">
            <div className="block">
              <SplitText 
                text="Seamless Lab" 
                className="inline-block mr-3"
                delay={200}
                staggerDelay={0.06}
              />
              <SplitText 
                text="Slot Booking" 
                className={`inline-block ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                delay={800}
                staggerDelay={0.08}
              />
            </div>
            <div className="block mt-2">
              <SplitText 
                text="Made" 
                className="inline-block mr-3"
                delay={1400}
                staggerDelay={0.05}
              />
              <SplitText 
                text="Simple" 
                className={`inline-block ${darkMode ? 'text-yellow-300' : 'text-yellow-500'} drop-shadow-lg`}
                style={{textShadow: darkMode ? '0 0 10px rgba(253, 224, 71, 0.5)' : '0 0 10px rgba(252, 211, 77, 0.5)'}}
                delay={1800}
                staggerDelay={0.1}
              />
            </div>
          </h1>

          <p className={`text-lg lg:text-xl leading-relaxed animate-slide-in-left-delay ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience seamless laboratory scheduling with our advanced booking system. 
            Manage your research time efficiently and never miss an important experiment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up">
            <button className={`flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl min-w-[140px] whitespace-nowrap ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/40' 
                : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/40'
            }`}>
              <span className="material-icons text-sm">visibility</span>
              View More
            </button>

            <button className={`flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg border-2 transition-all duration-300 transform hover:-translate-y-1 min-w-[140px] whitespace-nowrap ${
              darkMode 
                ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900' 
                : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}>
              <span className="material-icons text-sm">explore</span>
              Explore Us
            </button>
          </div>
        </div>

        {/* Right Content - Inserted Image */}
        <div className="flex justify-center items-center animate-slide-in-right">
          <img 
            src="/src/assets/imgs/SonaMainBuilding.svg" 
            alt="Main Building" 
            className="rounded-3xl shadow-2xl w-full max-w-2xl h-auto object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
