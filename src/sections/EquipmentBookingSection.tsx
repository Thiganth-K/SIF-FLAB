import React, { useState, useEffect, useRef } from 'react';
import { 
  FaMicroscope, 
  FaFlask, 
  FaLaptop, 
  FaCalculator, 
  FaCog, 
  FaThermometerHalf, 
  FaShoppingCart, 
  FaTimes, 
  FaCalendarAlt, 
  FaClock, 
  FaPlus, 
  FaMinus,
  FaWrench,
  FaBolt
} from 'react-icons/fa';

interface Equipment {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  availability: string;
  condition: string;
  type: string;
}

interface CartItem {
  equipmentId: number;
  equipmentName: string;
  date: string;
  time: string;
  duration: string;
  quantity: number;
}

const EquipmentBookingSection: React.FC = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingDuration, setBookingDuration] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const equipment: Equipment[] = [
    {
      id: 1,
      name: 'Equipment1',
      icon: <FaMicroscope className="text-3xl" />,
      description: 'High-resolution digital microscope for detailed analysis',
      availability: 'Available',
      condition: 'Excellent',
      type: 'Optical'
    },
    {
      id: 2,
      name: 'Equipment2',
      icon: <FaFlask className="text-3xl" />,
      description: 'Precision laboratory glassware and reaction vessels',
      availability: 'Available',
      condition: 'Good',
      type: 'Glassware'
    },
    {
      id: 3,
      name: 'Equipment3',
      icon: <FaLaptop className="text-3xl" />,
      description: 'High-performance computing workstation',
      availability: 'In Use',
      condition: 'Excellent',
      type: 'Computing'
    },
    {
      id: 4,
      name: 'Equipment4',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Advanced scientific calculator and measurement tools',
      availability: 'Available',
      condition: 'Good',
      type: 'Measurement'
    },
    {
      id: 5,
      name: 'Equipment5',
      icon: <FaThermometerHalf className="text-3xl" />,
      description: 'Temperature monitoring and control systems',
      availability: 'Maintenance',
      condition: 'Fair',
      type: 'Monitoring'
    },
    {
      id: 6,
      name: 'Equipment6',
      icon: <FaCog className="text-3xl" />,
      description: 'Mechanical testing and calibration equipment',
      availability: 'Available',
      condition: 'Excellent',
      type: 'Mechanical'
    }
  ];

  const durationOptions = [
    '1 Hour',
    '2 Hours',
    '4 Hours',
    '1 Day',
    '2 Days',
    '1 Week'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === 'equipment-header') {
              setIsHeaderVisible(true);
            } else {
              const index = parseInt(entry.target.getAttribute('data-index') || '0');
              setVisibleCards(prev => [...new Set([...prev, index])]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      const headerElement = sectionRef.current.querySelector('#equipment-header');
      if (headerElement) observer.observe(headerElement);
      
      cardRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleEquipmentClick = (equipment: Equipment) => {
    if (equipment.availability === 'Available') {
      setSelectedEquipment(equipment);
      setShowBookingForm(true);
    }
  };

  const handleAddToCart = () => {
    if (selectedEquipment && bookingDate && bookingTime && bookingDuration) {
      const existingItem = cart.find(
        item => item.equipmentId === selectedEquipment.id && 
               item.date === bookingDate && 
               item.time === bookingTime &&
               item.duration === bookingDuration
      );

      if (existingItem) {
        setCart(cart.map(item =>
          item.equipmentId === selectedEquipment.id && 
          item.date === bookingDate && 
          item.time === bookingTime &&
          item.duration === bookingDuration
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        const newItem: CartItem = {
          equipmentId: selectedEquipment.id,
          equipmentName: selectedEquipment.name,
          date: bookingDate,
          time: bookingTime,
          duration: bookingDuration,
          quantity: 1
        };
        setCart([...cart, newItem]);
      }

      // Reset form
      setSelectedEquipment(null);
      setBookingDate('');
      setBookingTime('');
      setBookingDuration('');
      setShowBookingForm(false);
    }
  };

  const updateCartItemQuantity = (index: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(cart.filter((_, i) => i !== index));
    } else {
      setCart(cart.map((item, i) => i === index ? { ...item, quantity: newQuantity } : item));
    }
  };

  const removeFromCart = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotalItems = () => cart.reduce((total, item) => total + item.quantity, 0);

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Available': return 'text-green-600 bg-green-50';
      case 'In Use': return 'text-red-600 bg-red-50';
      case 'Maintenance': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getConditionIcon = (condition: string) => {
    switch (condition) {
      case 'Excellent': return <FaBolt className="text-green-500" />;
      case 'Good': return <FaWrench className="text-blue-500" />;
      case 'Fair': return <FaCog className="text-yellow-500" />;
      default: return <FaCog className="text-gray-500" />;
    }
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div 
          id="equipment-header"
          className={`text-center mb-12 transition-all duration-1000 transform ${
            isHeaderVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Equipment Booking
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reserve laboratory equipment for your research and experiments. 
            Choose from our extensive collection of professional-grade instruments.
          </p>
        </div>

        {/* Animated Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {equipment.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              onClick={() => handleEquipmentClick(item)}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-700 cursor-pointer overflow-hidden border border-blue-100 hover:border-blue-300 group ${
                item.availability !== 'Available' ? 'opacity-60 cursor-not-allowed' : ''
              } ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="p-6">
                {/* Status Badge */}
                <div className="flex justify-end mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getAvailabilityColor(item.availability)}`}>
                    {item.availability}
                  </span>
                </div>

                {/* Icon and Title */}
                <div className="flex items-center justify-center mb-4">
                  <div className={`p-4 rounded-xl transition-all duration-300 ${
                    item.availability === 'Available'
                      ? 'bg-blue-600 text-white hover:bg-yellow-400 hover:text-blue-900'
                      : 'bg-gray-400 text-white'
                  }`}>
                    {item.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-blue-800 text-center mb-3 group-hover:text-blue-900 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 text-center mb-4 leading-relaxed text-sm">
                  {item.description}
                </p>
                
                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Type:</span>
                    <span className="font-semibold text-blue-700">{item.type}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Condition:</span>
                    <div className="flex items-center space-x-1">
                      {getConditionIcon(item.condition)}
                      <span className="font-semibold text-blue-700">{item.condition}</span>
                    </div>
                  </div>
                </div>
                
                {/* Book Button */}
                <button 
                  disabled={item.availability !== 'Available'}
                  className={`w-full mt-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-md ${
                    item.availability === 'Available'
                      ? 'bg-blue-600 hover:bg-yellow-500 text-white transform hover:scale-105 hover:shadow-lg'
                      : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                  }`}
                >
                  {item.availability === 'Available' ? 'Book Equipment' : item.availability}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Cart Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(true)}
            className="bg-blue-600 hover:bg-yellow-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 relative animate-bounce"
            style={{ animationDuration: '3s' }}
          >
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Booking Form Modal with Animation */}
      {showBookingForm && selectedEquipment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl transform animate-slideInUp">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-blue-800">Book {selectedEquipment.name}</h3>
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  setSelectedEquipment(null);
                  setBookingDate('');
                  setBookingTime('');
                  setBookingDuration('');
                }}
                className="text-gray-500 hover:text-red-500 transition-colors transform hover:scale-110"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaCalendarAlt className="inline mr-2" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform focus:scale-105"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaClock className="inline mr-2" />
                  Select Time
                </label>
                <input
                  type="time"
                  value={bookingTime}
                  onChange={(e) => setBookingTime(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform focus:scale-105"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <FaClock className="inline mr-2" />
                  Duration
                </label>
                <select
                  value={bookingDuration}
                  onChange={(e) => setBookingDuration(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all transform focus:scale-105"
                  required
                >
                  <option value="">Select Duration</option>
                  {durationOptions.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex space-x-3 mt-8">
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  setSelectedEquipment(null);
                  setBookingDate('');
                  setBookingTime('');
                  setBookingDuration('');
                }}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all transform hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={handleAddToCart}
                disabled={!bookingDate || !bookingTime || !bookingDuration}
                className="flex-1 bg-blue-600 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal with Animation */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl transform animate-slideInUp">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-blue-800">
                  Equipment Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
                </h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-red-500 transition-colors transform hover:scale-110"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4 animate-bounce" />
                  <p className="text-xl text-gray-500">Your cart is empty</p>
                  <p className="text-gray-400 mt-2">Add some equipment to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200 transform hover:scale-102 transition-all duration-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-blue-800">{item.equipmentName}</h4>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 transition-colors transform hover:scale-110"
                        >
                          <FaTimes />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div>
                          <span className="font-medium">Date:</span> {item.date}
                        </div>
                        <div>
                          <span className="font-medium">Time:</span> {item.time}
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium">Duration:</span> {item.duration}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-700">Quantity:</span>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => updateCartItemQuantity(index, item.quantity - 1)}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                            >
                              <FaMinus className="text-xs" />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition-all transform hover:scale-110"
                            >
                              <FaPlus className="text-xs" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-gray-200">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold text-gray-700">
                    Total Bookings: {getTotalItems()}
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => setCart([])}
                    className="flex-1 bg-red-100 text-red-700 py-3 rounded-xl font-semibold hover:bg-red-200 transition-all transform hover:scale-105"
                  >
                    Clear Cart
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.4s ease-out;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </section>
  );
};

export default EquipmentBookingSection;