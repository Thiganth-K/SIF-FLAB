import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCubes, FaFlask } from 'react-icons/fa';
// all necessary icons are already imported above

export default function About() {
  const [dark, setDark] = useState(false);

  const sectionFade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

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
          className="mt-6 relative overflow-hidden rounded-md"
        >
          <div className={`w-full h-44 md:h-60 lg:h-72 ${dark ? 'bg-black' : 'bg-white'} flex items-center justify-center`}>
            {/* Placeholder banner image box -- keep colors strict */}
            <div className="absolute inset-0 opacity-5" />
            <div className="relative z-10 text-center px-6">
              <h1 className="text-3xl md:text-4xl font-bold text-blue-500">About Us</h1>
              <div className="mt-4 max-w-3xl mx-auto text-sm md:text-base leading-relaxed text-white">
                <p className={`${dark ? 'text-white' : 'text-black'}`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
                Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
                Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue.
                Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
                Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
                Pellentesque congue. Ut in risus volutpat libero pharetra tempor.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Advanced Prototyping */}
        <section className="mt-12">
          <motion.h2 initial="hidden" animate="visible" variants={sectionFade} transition={{ duration: 0.5 }} className="text-2xl font-semibold text-blue-500">Advanced Prototyping</motion.h2>
          <motion.p initial="hidden" animate="visible" variants={sectionFade} transition={{ duration: 0.6 }} className="mt-3 max-w-3xl text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
          </motion.p>

          <div className="mt-6 space-y-4">
            {[1,2,3,4].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`flex items-center gap-4 p-4 rounded-md ${dark ? 'bg-black border border-white' : 'bg-white border border-black'}`}>
                <motion.div initial={{ scale: 0.9 }} whileHover={{ scale: 1.05 }} className={`p-3 rounded-full ${i % 2 === 0 ? 'bg-blue-500 text-white' : 'bg-yellow-400 text-black'}`}>
                  <FaCubes />
                </motion.div>
                <div>
                  <h3 className={`${i % 2 === 0 ? 'text-yellow-400' : 'text-blue-500'} font-semibold`}>Feature {i}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Platform Features */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-blue-500">Platform Features</h2>
          <p className="mt-3 max-w-3xl text-sm md:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus ac velit ornare lobortis. Praesent convallis urna a lacus interdum ut hendrerit risus congue.</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1,2,3].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`p-6 rounded-md ${dark ? 'bg-black border border-white' : 'bg-white border border-black'}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-md ${dark ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white'}`}>
                    <FaFlask />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-500">Feature Card {i}</h4>
                    <p className="text-sm mt-1">Short description of the platform feature. Lorem ipsum dolor sit.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Our Team */}
        <section className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Our Team</h2>
          <div className="mt-6 space-y-4 max-w-xl mx-auto">
            {[1,2,3].map((i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className={`flex items-center gap-4 p-4 rounded-md ${dark ? 'bg-black border border-white' : 'bg-white border border-black'}`}>
                <div className={`w-16 h-16 rounded-full ${dark ? 'bg-blue-500' : 'bg-blue-500'}`} />
                <div className="text-left">
                  <div className="font-bold">Member {i}</div>
                  <div className="text-sm">Short one-line description about the member.</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
