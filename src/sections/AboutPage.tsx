import React, { useState } from 'react';
// Material Icons
import Icon from '@mui/material/Icon';
// Example: import { HeroHighlight, FocusCard, Timeline, ScrollStack } from 'acentricity-ai'; // Placeholder imports
// import { ScrollStack } from 'react-bits'; // Placeholder import
import 'D:\\College Studies\\Work\\SIF-FLAB\\src\\styles\\AboutPage.css'; // Create this for custom styles

const AboutPage: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <section className={`about-page ${darkMode ? 'dark' : 'light'}`}>
      {/* Motion Particles & Cursor Effects */}
      <div className="motion-particles" />
      <div className="cursor-reactive" />

      {/* Theme Toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark/light mode"
      >
        <Icon>{darkMode ? 'light_mode' : 'dark_mode'}</Icon>
      </button>

      {/* Vision Section */}
      <div className="about-section vision-section">
        <div className="vision-text">
          <h2>
            <Icon>visibility</Icon> Vision
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac neque nec urna dictum dictum.</p>
          <button className="cta-btn">Learn More</button>
        </div>
        <div className="vision-hero">
          {/* Replace with actual HeroHighlight from Acentricity AI */}
          <div className="hero-highlight-placeholder">
            <Icon fontSize="large">star</Icon>
            <span>Hero Highlight Effect</span>
          </div>
        </div>
        {/* Background image */}
        <div className="vision-bg" />
      </div>

      {/* Mission Section */}
      <div className="about-section mission-section">
        <div className="focus-card left">
          {/* Replace with FocusCard from Acentricity AI */}
          <div className="focus-card-placeholder">
            <img src="https://source.unsplash.com/100x100/?mission" alt="Mission" />
            <span>Focus Card</span>
          </div>
        </div>
        <div className="mission-content">
          <h2>
            <Icon>flag</Icon> Mission
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur.</p>
          <button className="cta-btn">Our Mission</button>
        </div>
        <div className="focus-card right">
          {/* Replace with FocusCard from Acentricity AI */}
          <div className="focus-card-placeholder">
            <img src="https://source.unsplash.com/100x100/?goal" alt="Goal" />
            <span>Focus Card</span>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="about-section history-section">
        <h2>
          <Icon>history</Icon> Our History
        </h2>
        {/* Replace with Timeline from Acentricity AI */}
        <div className="timeline">
          {[1, 2, 3].map((item, idx) => (
            <div key={item} className={`timeline-entry ${idx % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <img src={`https://source.unsplash.com/120x80/?history,${item}`} alt="History" />
                <div>
                  <h4>Year {2020 + idx}</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="about-section services-section">
        <div className="services-stack">
          {/* Replace with ScrollStack from React Bits */}
          <div className="scroll-stack-placeholder">
            <div className="service-card">
              <Icon>build</Icon>
              <span>Service 1</span>
            </div>
            <div className="service-card">
              <Icon>support_agent</Icon>
              <span>Service 2</span>
            </div>
            <div className="service-card">
              <Icon>insights</Icon>
              <span>Service 3</span>
            </div>
          </div>
        </div>
        <div className="services-desc">
          <h2>
            <Icon>miscellaneous_services</Icon> Our Services
          </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex.</p>
          <button className="cta-btn">Contact Us</button>
        </div>
      </div>

      {/* Social Proof Section */}
      <div className="about-section social-proof-section">
        <h2>
          <Icon>thumb_up</Icon> Social Proof
        </h2>
        <div className="testimonials">
          <div className="testimonial-card">
            <Icon>person</Icon>
            <p>"Lorem ipsum dolor sit amet, consectetur."</p>
            <span>- Jane Doe</span>
          </div>
          <div className="testimonial-card">
            <Icon>person</Icon>
            <p>"Sed do eiusmod tempor incididunt ut labore."</p>
            <span>- John Smith</span>
          </div>
        </div>
        <div className="partner-logos">
          <img src="https://dummyimage.com/80x40/ccc/fff&text=Logo1" alt="Partner 1" />
          <img src="https://dummyimage.com/80x40/ccc/fff&text=Logo2" alt="Partner 2" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
