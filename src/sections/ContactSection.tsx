import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import princimg from '../assets/imgs/princi.jpg';
import { FaCheck } from "react-icons/fa";
const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form state after animation
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Form + Map */}
        <div className="space-y-6">
          {/* Form */}
          <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-2xl shadow-lg space-y-6 border border-blue-100"
    >
      <h3 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Send us a Message
      </h3>

      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-700"
        >
          Your Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-700"
        >
          Your Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-700"
        >
          Your Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full px-4 py-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitted}
        className={`relative w-full py-3 rounded-lg font-semibold transition-all duration-500 flex items-center justify-center
        ${
          submitted
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-blue-600 to-yellow-500 text-white hover:shadow-lg hover:scale-[1.02]"
        }`}
      >
        {submitted ? (
          <span className="flex items-center space-x-2 animate-bounce">
            <FaCheck /> <span>Submitted</span>
          </span>
        ) : (
          "Send Message"
        )}
      </button>
    </form>

          {/* Embedded Google Map */}
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0331215061287!2d-122.41941528468362!3d37.77492927975953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808a05c6f7c5%3A0xa7d42f3d06cf0f!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1618359112345!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl shadow-md"
            ></iframe>
          </div>
        </div>

        {/* Right: Image + Contact Info */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src={princimg}
            alt="Director"
            className="rounded-2xl shadow-md object-cover w-full max-w-lg"
          />

          {/* Contact Details */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-center">Get in Touch</h3>
            
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <p>44, Gandhi Street, Nehru Nagar, Amritsar, India</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <p>+91 93421 93945</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <p>contact@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

