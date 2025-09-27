import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import princimg from '../assets/imgs/princi.jpg';

const ContactSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Form + Map */}
        <div className="space-y-6">
          {/* Form */}
          <form className="bg-white p-6 rounded-2xl shadow-md space-y-4">
            <h3 className="text-xl font-semibold mb-4">Send us a Message</h3>
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              required
            ></textarea>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
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

