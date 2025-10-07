import React from 'react';
import SplitText from '../components/SplitText/SplitText';
import HeroImg from "../assets/imgs/SonaMainBuilding.svg"; 

interface HeroSectionProps {
  darkMode?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode = false }) => {

  return (
    <section 
      className={`relative min-h-screen font-inter overflow-hidden transition-all duration-300 ${
        darkMode ? 'text-gray-50' : 'text-gray-900'
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, ${darkMode ? '0.7' : '0.5'}), rgba(0, 0, 0, ${darkMode ? '0.7' : '0.5'})), url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
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



      {/* Main Hero Content */}
      <div className="flex items-center justify-center min-h-screen px-4 lg:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Glassmorphism Card Container */}
          <div className={`backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border transition-all duration-300 ${
            darkMode 
              ? 'bg-white/5 border-white/20 shadow-black/30' 
              : 'bg-white/5 border-white/30 shadow-black/20'
          }`}>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight space-y-2 drop-shadow-lg mb-6">
              <div className="block">
                <SplitText 
                  text="Seamless Lab" 
                  className="inline-block mr-3 text-white"
                  delay={200}
                />
                <SplitText 
                  text="Slot Booking" 
                  className={`inline-block ${darkMode ? 'text-blue-300' : 'text-blue-400'} drop-shadow-lg`}
                  delay={800}
                />
              </div>
              <div className="block mt-2">
                <SplitText 
                  text="Made" 
                  className="inline-block mr-3 text-white"
                  delay={1400}
                />
                <SplitText 
                  text="Simple" 
                  className={`inline-block ${darkMode ? 'text-yellow-300' : 'text-yellow-400'} drop-shadow-lg`}
                  delay={1800}
                />
              </div>
            </h1>

            <p className={`text-lg lg:text-xl leading-relaxed animate-slide-in-left-delay drop-shadow-md mb-8 max-w-2xl mx-auto ${
              darkMode ? 'text-gray-200' : 'text-gray-100'
            }`}>
              Experience seamless laboratory scheduling with our advanced booking system. 
              Manage your research time efficiently and never miss an important experiment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <button className={`flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl min-w-[140px] whitespace-nowrap ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-blue-500/40' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-600/40'
              }`}>
                View More
              </button>

              <button className={`flex items-center justify-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-base lg:text-lg border-2 transition-all duration-300 transform hover:-translate-y-1 min-w-[140px] whitespace-nowrap ${
                darkMode 
                  ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900' 
                  : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
              }`}>
                Explore Us
              </button>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default HeroSection;
