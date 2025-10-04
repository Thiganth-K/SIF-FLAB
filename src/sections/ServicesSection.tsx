import React from 'react';
// react-icons not needed here — hover UI will render content without specific icons
import { HoverEffect } from '../styles/ui/card-hover-effect';

interface ServicesSectionProps {
  darkMode?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ darkMode = false }) => {
  const items = [
    {
      title: 'Prototyping Support',
      description: 'Fast-turn prototyping to validate ideas and iterate quickly with hands-on help.',
      link: '#prototyping',
    },
    {
      title: 'Lab Access',
      description: 'Access to lab facilities and equipment for product development and testing.',
      link: '#lab-access',
    },
    {
      title: 'Industry Academy Link',
      description: 'Industry-linked learning and problem-statement driven academy solutions.',
      link: '#academy',
    },
    {
      title: "Consulting for MSMEs",
      description: "Business and technical consulting tailored for MSME's to scale products.",
      link: '#msme-consult',
    },
  ];

  return (
    <section className={`w-full py-12 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-800 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-blue-700 underline decoration-yellow-400 underline-offset-4">
            We Offer
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Prototyping, lab access, academy-linked solutions and MSME consulting.</p>
        </div>

        <div className="mt-6">
          <HoverEffect
            items={items.map((it) => ({
              title: it.title,
              description: it.description,
              link: it.link,
            }))}
            className=""
            darkMode={darkMode}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
