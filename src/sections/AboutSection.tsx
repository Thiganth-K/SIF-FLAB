import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/assets/imgs/about-illustration.svg"
            alt="About Illustration"
            className="w-80 md:w-96 drop-shadow-2xl rounded-2xl"
          />
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-sky-400">S</span>ona 
            <span className="text-sky-400">I</span>ncubation 
            <span className="text-sky-400">C</span>ente
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            We are a passionate team of developers and innovators dedicated to
            creating intelligent and interactive systems. Our focus is on
            combining modern technologies with user-centric design to deliver
            meaningful digital experiences.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mb-8">
            From AI-based systems to full-stack applications, we bring ideas to
            life with precision, creativity, and a commitment to excellence.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-sky-600 transition-all"
          >
            Explore More <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Blur Effect */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-sky-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-500/30 rounded-full blur-3xl" />
    </section>
  );
}
