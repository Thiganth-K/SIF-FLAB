import React, { useState } from 'react';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

interface FAQSectionProps {
  darkMode?: boolean;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'booking' | 'equipment' | 'research';
}

const FAQSection: React.FC<FAQSectionProps> = ({ darkMode = false }) => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqData: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'What is SIF-FLAB and what services do you offer?',
      answer: 'SIF-FLAB is a state-of-the-art research and innovation facility that provides comprehensive laboratory access, equipment rental, prototyping support, and industry-academy collaboration services. We specialize in materials science, engineering solutions, and technology innovation.',
      category: 'general'
    },
    {
      id: 'faq-2',
      question: 'How do I book laboratory facilities?',
      answer: 'You can book lab facilities through our online booking system. Simply navigate to the Lab Booking section, select your preferred lab, choose your date and time slot, and add it to your cart. We offer 6 specialized labs including Electronics, Mechanical, Computer Science, Chemistry, Biotech, and Materials Testing labs.',
      category: 'booking'
    },
    {
      id: 'faq-3',
      question: 'What equipment is available for rental?',
      answer: 'We offer a wide range of professional-grade equipment including Digital Oscilloscopes, 3D Printers, Analytical Balances, CNC Milling Machines, Spectrophotometers, and Compound Microscopes. Each equipment comes with detailed specifications and availability information.',
      category: 'equipment'
    },
    {
      id: 'faq-4',
      question: 'What are the pricing rates for lab bookings and equipment rental?',
      answer: 'Lab booking rates range from ₹400-900 per hour depending on the facility. Equipment rental rates vary from ₹100-500 per day. Detailed pricing is displayed for each lab and equipment on their respective booking pages.',
      category: 'booking'
    },
    {
      id: 'faq-5',
      question: 'Do you provide training and technical support?',
      answer: 'Yes, we provide comprehensive training sessions for all equipment and laboratory procedures. Our expert team offers hands-on support, safety briefings, and technical assistance throughout your research projects.',
      category: 'general'
    },
    {
      id: 'faq-6',
      question: 'Can I collaborate with your research team on projects?',
      answer: 'Absolutely! We encourage industry-academy collaboration and offer consulting services for MSMEs. Our team of experts, led by Dr. Sarah Johnson and Prof. Michael Chen, is available for joint research projects, technology development, and innovation initiatives.',
      category: 'research'
    },
    {
      id: 'faq-7',
      question: 'What safety protocols do you follow in the laboratories?',
      answer: 'We maintain strict safety standards across all facilities. This includes proper ventilation systems, safety equipment, emergency protocols, and mandatory safety briefings for all users. Personal protective equipment is provided and safety training is conducted before lab access.',
      category: 'general'
    },
    {
      id: 'faq-8',
      question: 'How far in advance should I book facilities?',
      answer: 'We recommend booking at least 48 hours in advance to ensure availability. Popular time slots and specialized equipment may require longer lead times. You can check real-time availability through our online booking system.',
      category: 'booking'
    }
  ];

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const categoryColors = {
    general: 'from-blue-500 to-blue-600',
    booking: 'from-green-500 to-green-600',
    equipment: 'from-purple-500 to-purple-600',
    research: 'from-orange-500 to-orange-600'
  };

  const categoryLabels = {
    general: 'General',
    booking: 'Booking',
    equipment: 'Equipment',
    research: 'Research'
  };

  return (
    <section className={`w-full py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-800 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaQuestionCircle className="text-3xl text-blue-600" />
            <h2 className="text-4xl font-bold text-blue-700">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to common questions about our facilities, booking process, equipment, and services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-gray-50 border border-gray-200'
              }`}
            >
              {/* Category Badge */}
              <div className={`h-2 bg-gradient-to-r ${categoryColors[faq.category]}`}></div>
              
              {/* FAQ Content */}
              <div className="p-6">
                {/* Category Label */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    darkMode 
                      ? 'bg-slate-700 text-gray-300' 
                      : 'bg-white text-gray-600 border border-gray-300'
                  }`}>
                    {categoryLabels[faq.category]}
                  </span>
                </div>

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full text-left flex items-center justify-between gap-4 group ${
                    darkMode ? 'text-gray-100' : 'text-gray-900'
                  }`}
                >
                  <h3 className="text-lg font-semibold leading-tight group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openFAQ === faq.id
                      ? 'bg-blue-600 text-white rotate-180'
                      : darkMode
                      ? 'bg-slate-700 text-gray-300 group-hover:bg-blue-600 group-hover:text-white'
                      : 'bg-gray-200 text-gray-600 group-hover:bg-blue-600 group-hover:text-white'
                  }`}>
                    <FaChevronDown size={14} />
                  </div>
                </button>

                {/* Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}>
                  <div className={`text-sm leading-relaxed ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className={`mt-12 p-8 rounded-2xl text-center ${
          darkMode ? 'bg-slate-900 border border-slate-700' : 'bg-blue-50 border border-blue-200'
        }`}>
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              Still Have Questions?
            </h3>
            <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Can't find the answer you're looking for? Our team is here to help you with any questions about our facilities, services, or booking process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                Contact Support
              </button>
              <button className={`px-8 py-3 rounded-lg transition-colors font-semibold border ${
                darkMode 
                  ? 'border-slate-600 text-gray-300 hover:bg-slate-800' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}>
                Schedule a Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;