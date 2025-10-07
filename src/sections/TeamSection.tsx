import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

interface TeamSectionProps {
  darkMode?: boolean;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  image: string;
  education: string;
  experience: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  skills: string[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ darkMode = false }) => {
  const teamMembers: TeamMember[] = [
    {
      id: 'member-1',
      name: 'Dr. Sarah Johnson',
      position: 'Head of Research & Development',
      department: 'Innovation Lab',
      bio: 'Leading expert in advanced materials research with over 15 years of experience in nanotechnology and sustainable engineering solutions.',
      image: '/api/placeholder/300/300',
      education: 'Ph.D. Materials Science, MIT',
      experience: '15+ years in R&D',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        twitter: 'https://twitter.com/sarahjohnson',
        github: 'https://github.com/sarahjohnson',
        email: 'sarah.johnson@sif-flab.com'
      },
      skills: ['Materials Science', 'Nanotechnology', 'Project Management', 'Research & Development']
    },
    {
      id: 'member-2',
      name: 'Prof. Michael Chen',
      position: 'Director of Technology Innovation',
      department: 'Engineering Solutions',
      bio: 'Pioneering researcher in robotics and AI applications for manufacturing, with extensive industry collaboration experience.',
      image: '/api/placeholder/300/300',
      education: 'Ph.D. Robotics Engineering, Stanford',
      experience: '12+ years in Industry',
      socialLinks: {
        linkedin: 'https://linkedin.com/in/michael-chen',
        twitter: 'https://twitter.com/michaelchen',
        github: 'https://github.com/michaelchen',
        email: 'michael.chen@sif-flab.com'
      },
      skills: ['Robotics', 'Artificial Intelligence', 'Automation', 'Industry 4.0']
    }
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className={`w-full py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Meet the brilliant minds driving innovation at SIF-FLAB. Our team combines academic excellence 
            with industry expertise to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Profile Image Section */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold">
                    {member.name.split(' ').map(n => n.charAt(0)).join('')}
                  </div>
                </div>
                
                {/* Department Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'
                  }`}>
                    {member.department}
                  </span>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-6">
                {/* Name and Position */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-blue-700 mb-1">
                    {member.name}
                  </h3>
                  <p className={`text-lg font-semibold ${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {member.position}
                  </p>
                </div>

                {/* Bio */}
                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {member.bio}
                </p>

                {/* Education and Experience */}
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <FaGraduationCap className="text-blue-600" />
                    <span className="font-semibold">Education:</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {member.education}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaBriefcase className="text-blue-600" />
                    <span className="font-semibold">Experience:</span>
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                      {member.experience}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-full ${
                          darkMode 
                            ? 'bg-slate-700 text-gray-300 border border-slate-600' 
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-4">
                  {member.socialLinks.linkedin && (
                    <button
                      onClick={() => handleSocialClick(member.socialLinks.linkedin!)}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-slate-700 hover:bg-blue-600 text-gray-300 hover:text-white' 
                          : 'bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white'
                      }`}
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin size={20} />
                    </button>
                  )}
                  
                  {member.socialLinks.twitter && (
                    <button
                      onClick={() => handleSocialClick(member.socialLinks.twitter!)}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-slate-700 hover:bg-sky-500 text-gray-300 hover:text-white' 
                          : 'bg-gray-100 hover:bg-sky-500 text-gray-600 hover:text-white'
                      }`}
                      aria-label="Twitter Profile"
                    >
                      <FaTwitter size={20} />
                    </button>
                  )}
                  
                  {member.socialLinks.github && (
                    <button
                      onClick={() => handleSocialClick(member.socialLinks.github!)}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-slate-700 hover:bg-gray-800 text-gray-300 hover:text-white' 
                          : 'bg-gray-100 hover:bg-gray-800 text-gray-600 hover:text-white'
                      }`}
                      aria-label="GitHub Profile"
                    >
                      <FaGithub size={20} />
                    </button>
                  )}
                  
                  {member.socialLinks.email && (
                    <button
                      onClick={() => handleSocialClick(`mailto:${member.socialLinks.email}`)}
                      className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        darkMode 
                          ? 'bg-slate-700 hover:bg-green-600 text-gray-300 hover:text-white' 
                          : 'bg-gray-100 hover:bg-green-600 text-gray-600 hover:text-white'
                      }`}
                      aria-label="Email Contact"
                    >
                      <FaEnvelope size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 p-8 rounded-2xl ${
          darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
        }`}>
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Join Our Innovation Journey
          </h3>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Interested in collaborating with our team or joining our research initiatives?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;