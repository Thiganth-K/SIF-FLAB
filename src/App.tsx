import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutPage from './sections/AboutPage';
import ContactSection from './sections/ContactSection';
import ServicesSection from './sections/ServicesSection';
import LabBookingSection from './sections/LabBookingSection';
import EquipmentBookingSection from './sections/EquipmentBookingSection';
import TeamSection from './sections/TeamSection';
import FAQSection from './sections/FAQSection';
import CartModal from './components/CartModal';

interface BookingItem {
  id: string;
  name: string;
  type: 'lab' | 'equipment';
  date?: string;
  time?: string;
  price: number;
  quantity?: number;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState<BookingItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAddToCart = (item: BookingItem) => {
    setCartItems(prev => [...prev, item]);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleViewCart = () => {
    setIsCartOpen(true);
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
      <div id="services">
        <ServicesSection darkMode={darkMode} />
      </div>
      <div id="lab-booking">
        <LabBookingSection 
          darkMode={darkMode} 
          onAddToCart={handleAddToCart}
          cartCount={cartItems.length}
          onViewCart={handleViewCart}
        />
      </div>
      <div id="equipment-booking">
        <EquipmentBookingSection 
          darkMode={darkMode} 
          onAddToCart={handleAddToCart}
          cartCount={cartItems.length}
          onViewCart={handleViewCart}
        />
      </div>
      <div id="team">
        <TeamSection darkMode={darkMode} />
      </div>
      <div id="faq">
        <FAQSection darkMode={darkMode} />
      </div>
      <div id="contact">
        <ContactSection darkMode={darkMode} />
      </div>
      <Footer darkMode={darkMode} />
      
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        darkMode={darkMode}
      />
    </>
  );
}

export default App
