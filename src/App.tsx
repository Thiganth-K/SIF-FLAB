import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutPage from './sections/AboutPage';
import SlotBookingSection from './sections/SlotBookingSection';
import EquipmentBookingSection from './sections/EquipmentBookingSection';
import ContactSection from './sections/ContactSection';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      <div id="home">
        <HeroSection darkMode={darkMode} />
      </div>
      <div id="about">
        <AboutPage darkMode={darkMode} />
      </div>
      <div id="lab-booking">
        <SlotBookingSection darkMode={darkMode} />
      </div>
      <div id="equipment">
        <EquipmentBookingSection darkMode={darkMode} />
      </div>
      <div id="contact">
        <ContactSection darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App
