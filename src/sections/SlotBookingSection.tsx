import React, { useState } from 'react';
import { FaClock, FaFlask, FaMicroscope, FaAtom, FaCalculator, FaLaptop, FaShoppingCart, FaTimes, FaCalendarAlt, FaPlus, FaMinus } from 'react-icons/fa';

interface Slot {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  duration: string;
  maxCapacity: number;
}

interface CartItem {
  slotId: number;
  slotName: string;
  date: string;
  time: string;
  quantity: number;
}

interface SlotBookingSectionProps {
  darkMode?: boolean;
}

const SlotBookingSection: React.FC<SlotBookingSectionProps> = ({ darkMode = false }) => {
  const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const slots: Slot[] = [
    {
      id: 1,
      name: 'Lab1',
      icon: <FaFlask className="text-3xl" />,
      description: 'Advanced chemistry experiments and analysis',
      duration: '2 hours',
      maxCapacity: 25
    },
    {
      id: 2,
      name: 'Lab2',
      icon: <FaAtom className="text-3xl" />,
      description: 'Physics experiments and practical sessions',
      duration: '2.5 hours',
      maxCapacity: 30
    },
    {
      id: 3,
      name: 'Lab3',
      icon: <FaMicroscope className="text-3xl" />,
      description: 'Biological research and microscopy',
      duration: '2 hours',
      maxCapacity: 20
    },
    {
      id: 4,
      name: 'Lab4',
      icon: <FaLaptop className="text-3xl" />,
      description: 'Programming and software development',
      duration: '3 hours',
      maxCapacity: 40
    },
    {
      id: 5,
      name: 'Lab5',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Mathematical modeling and analysis',
      duration: '1.5 hours',
      maxCapacity: 35
    },
    {
      id: 6,
      name: 'Lab6',
      icon: <FaClock className="text-3xl" />,
      description: 'Independent research and project work',
      duration: '4 hours',
      maxCapacity: 15
    }
  ];

  const handleSlotClick = (slot: Slot) => {
    setSelectedSlot(slot);
    setShowBookingForm(true);
  };

  const handleAddToCart = () => {
    if (selectedSlot && bookingDate && bookingTime) {
      const existingItem = cart.find(
        item => item.slotId === selectedSlot.id && item.date === bookingDate && item.time === bookingTime
      );

      if (existingItem) {
        setCart(cart.map(item =>
          item.slotId === selectedSlot.id && item.date === bookingDate && item.time === bookingTime
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ));
      } else {
        const newItem: CartItem = {
          slotId: selectedSlot.id,
          slotName: selectedSlot.name,
          date: bookingDate,
          time: bookingTime,
          quantity: 1
        };
        setCart([...cart, newItem]);
      }

      // Reset form
      setSelectedSlot(null);
      setBookingDate('');
      setBookingTime('');
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

  return (
    <section className={`w-full py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
            Lab Slot Booking
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Reserve your laboratory time slots with our advanced booking system. 
            Choose from our state-of-the-art facilities and secure your research time.
          </p>
        </div>

        {/* Slot Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {slots.map((slot) => (
            <div
              key={slot.id}
              onClick={() => handleSlotClick(slot)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden border border-blue-100 hover:border-blue-300 group"
            >
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-blue-600 text-white p-4 rounded-xl hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300">
                    {slot.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-blue-800 text-center mb-3 group-hover:text-blue-900 transition-colors">
                  {slot.name}
                </h3>
                
                <p className="text-gray-600 text-center mb-4 leading-relaxed">
                  {slot.description}
                </p>
                
                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-blue-700">{slot.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Max Capacity:</span>
                    <span className="font-semibold text-blue-700">{slot.maxCapacity} students</span>
                  </div>
                </div>
                
                {/* Book Button */}
                <button className="w-full mt-6 bg-blue-600 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(true)}
            className="bg-blue-600 hover:bg-yellow-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 relative"
          >
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && selectedSlot && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-blue-800">Book {selectedSlot.name}</h3>
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  setSelectedSlot(null);
                  setBookingDate('');
                  setBookingTime('');
                }}
                className="text-gray-500 hover:text-red-500 transition-colors"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-8">
              <button
                onClick={() => {
                  setShowBookingForm(false);
                  setSelectedSlot(null);
                  setBookingDate('');
                  setBookingTime('');
                }}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleAddToCart}
                disabled={!bookingDate || !bookingTime}
                className="flex-1 bg-blue-600 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-blue-800">
                  Booking Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
                </h3>
                <button
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
            </div>

            <div className="p-6 overflow-y-auto max-h-[60vh]">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-500">Your cart is empty</p>
                  <p className="text-gray-400 mt-2">Add some lab slots to get started</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-lg font-semibold text-blue-800">{item.slotName}</h4>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
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
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-700">Quantity:</span>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => updateCartItemQuantity(index, item.quantity - 1)}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                            >
                              <FaMinus className="text-xs" />
                            </button>
                            <span className="w-12 text-center font-semibold">{item.quantity}</span>
                            <button
                              onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                              className="bg-blue-100 hover:bg-blue-200 text-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
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
                    className="flex-1 bg-red-100 text-red-700 py-3 rounded-xl font-semibold hover:bg-red-200 transition-colors"
                  >
                    Clear Cart
                  </button>
                  <button className="flex-1 bg-blue-600 hover:bg-yellow-500 text-white py-3 rounded-xl font-semibold transition-all">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SlotBookingSection;