import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFlask } from 'react-icons/fa';
import AboutBg from '../assets/imgs/about_us_bg.jpg';
import { AnimatedTestimonials } from '../components/ui/animated-testimonials';
import { InfiniteMovingCards } from '../components/ui/infinite-moving-cards';
import SpotlightCard from '../components/SpotlightCard';
// all necessary icons are already imported above

export default function About() {
  const [dark, setDark] = useState(false);

  const sectionFade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  // Sample testimonials data
  const testimonials = [
    {
      quote: "The lab booking system has revolutionized how we manage our research facilities. It's intuitive and efficient.",
      name: "Dr. Sarah Johnson",
      designation: "Research Director",
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    },
    {
      quote: "Equipment booking has never been easier. The system saves us hours of administrative work every week.",
      name: "Prof. Michael Chen",
      designation: "Department Head",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      quote: "Outstanding platform! The advanced prototyping features have streamlined our entire workflow.",
      name: "Dr. Emily Rodriguez",
      designation: "Lab Manager",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  // Advanced Prototyping features data
  const prototypingFeatures = [
    {
      quote: "Real-time collaboration tools that enable seamless teamwork across different research departments and locations.",
      name: "Collaborative Workspace",
      title: "Team Integration"
    },
    {
      quote: "Advanced 3D modeling capabilities with integrated simulation tools for rapid prototype development and testing.",
      name: "3D Modeling Suite",
      title: "Design & Simulation"
    },
    {
      quote: "AI-powered optimization algorithms that automatically suggest improvements to your prototype designs.",
      name: "Smart Optimization",
      title: "AI-Assisted Design"
    },
    {
      quote: "Comprehensive version control system that tracks all changes and enables easy rollback to previous iterations.",
      name: "Version Control",
      title: "Change Management"
    },
    {
      quote: "Integrated testing framework with automated quality assurance checks and performance analytics.",
      name: "Automated Testing",
      title: "Quality Assurance"
    },
    {
      quote: "Cloud-based rendering engine that provides high-performance visualization without local hardware constraints.",
      name: "Cloud Rendering",
      title: "High-Performance Computing"
    }
  ];

  return (
    <div className={`${dark ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Theme toggle */}
        <div className="flex justify-end">
          <button
            aria-pressed={dark}
            onClick={() => setDark((d) => !d)}
            className={`inline-flex items-center gap-2 px-3 py-2 rounded-full border transition-colors duration-500 ${dark ? 'bg-black text-white border-white' : 'bg-white text-black border-black'}`}
          >
            {dark ? 'Dark' : 'Light'}
          </button>
        </div>

        {/* Top Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6"
        >
          <header className="relative h-56 md:h-72 lg:h-96 flex items-center justify-center text-center">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${AboutBg})`, filter: 'brightness(0.6)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-20" />
            <div className="relative z-10">
              <h1 className="text-3xl md:text-5xl font-extrabold text-white">About Us</h1>
            </div>
          </header>
        </motion.div>

        {/* Introduction Content */}
        <section className="mt-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={sectionFade}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-sm md:text-base leading-relaxed"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at iste voluptates adipisci nesciunt blanditiis a labore libero nostrum repellendus placeat iusto autem molestiae repudiandae harum iure dolores, molestias delectus!. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ab minus laboriosam ad, optio, beatae molestias incidunt sapiente consequuntur iusto ut dolore maxime dolores recusandae inventore corporis quaerat similique hic. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus dolore aut magni repudiandae deserunt placeat. Nostrum, corporis! Suscipit, a provident dolorum quas ducimus unde cum consectetur consequatur qui, saepe quia.</p>
            </motion.div>
          </div>
        </section>

        {/* Advanced Prototyping */}
        <section className="mt-12">
          <motion.h2 initial="hidden" animate="visible" variants={sectionFade} transition={{ duration: 0.5 }} className="text-2xl font-semibold text-blue-500">Advanced Prototyping</motion.h2>
          <motion.p initial="hidden" animate="visible" variants={sectionFade} transition={{ duration: 0.6 }} className="mt-3 max-w-3xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae illo, similique fuga optio odio ducimus deserunt laborum sed nulla officia dicta? Architecto doloribus temporibus itaque laboriosam sunt! Neque, accusantium soluta.
          </motion.p>

          <div className="mt-8">
            <InfiniteMovingCards
              items={prototypingFeatures}
              direction="right"
              speed="slow"
              pauseOnHover={true}
              className={`${dark ? 'dark' : ''}`}
            />
          </div>
        </section>

        {/* Platform Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-500">Platform Features</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus ac velit ornare lobortis. Praesent convallis urna a lacus interdum ut hendrerit risus congue.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1,2,3].map((i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                viewport={{ once: true }} 
                transition={{ delay: i * 0.12 }}
                className="cursor-pointer"
              >
                <SpotlightCard 
                  className={`h-full ${dark ? 'bg-black border-neutral-800' : 'bg-white border-gray-200'}`}
                  spotlightColor={dark ? "rgba(15, 23, 42, 0.8)" : "rgba(30, 41, 59, 0.6)"}
                >
                  <div className="flex items-center gap-3 relative z-20">
                    <div className="p-3 rounded-md bg-blue-500 text-white">
                      <FaFlask />
                    </div>
                    <div>
                      <h4 className={`font-bold text-blue-500`}>Feature Card {i}</h4>
                      <p className={`text-sm mt-1 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Short description of the platform feature. Lorem ipsum dolor sit.
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-12">
          <motion.h2 
            initial="hidden" 
            animate="visible" 
            variants={sectionFade} 
            transition={{ duration: 0.5 }} 
            className="text-2xl font-semibold text-blue-500 text-center mb-8"
          >
            Our Team
          </motion.h2>
          <div className={`${dark ? 'bg-black' : 'bg-white'}`}>
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </div>
        </section>
      </div>
    </div>
  );
}
