import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import contactImg from "../assets/imgs/princi.jpg";

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="w-full bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: Contact Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-blue-100 space-y-6">
          <h2 className="text-2xl font-bold text-yellow-400 text-left">
            Get in Touch
          </h2>
          <h3 className="text-3xl font-bold text-black text-left">
            Let’s Chat, Reach Out to Us
          </h3>
          <hr className="my-4 border-gray-300" />
          <p className="text-gray-600 text-left">
            Have questions or feedback? We're here to help. Send us a message,
            and we'll respond within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                First Name
              </label>
              <input
                type="text"
                placeholder="First name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Last name"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Email address"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Leave us a message"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" required className="h-4 w-4" />
              <span className="text-sm text-gray-600">
                I agree with the terms and conditions
              </span>
            </div>

            <button
              type="submit"
              disabled={submitted}
              className={`w-full py-3 rounded-lg font-semibold transition-all duration-500 
                ${
                  submitted
                    ? "bg-green-500 text-white"
                    : "bg-gradient-to-r from-blue-600 to-yellow-500 text-white hover:shadow-lg hover:scale-[1.02]"
                }`}
            >
              {submitted ? "Submitted" : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right: Image + Contact Info + Map */}
        <div className="flex flex-col items-center space-y-6">
          {/* Image Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg">
            <img
              src={contactImg}
              alt="Contact Illustration"
              className="rounded-2xl shadow-md object-cover w-full"
            />
          </div>

          {/* Contact Details Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-lg space-y-4">
            <h3 className="text-xl font-semibold mb-4 text-center">Reach Us</h3>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <p>Sona College of Technology, Salem, Tamil Nadu, India</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <p>info@sonatech.ac.in</p>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="w-full max-w-lg">
            <iframe
              title="Sona College of Technology Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.809747759934!2d78.1218639!3d11.6781391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf065115b5f7d%3A0x1d08f4d05518b24d!2sSona%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1727525800000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-2xl shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;