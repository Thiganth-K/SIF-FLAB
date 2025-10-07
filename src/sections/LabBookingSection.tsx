import React, { useState } from 'react';

interface LabBookingSectionProps {
  darkMode?: boolean;
  onAddToCart?: (item: BookingItem) => void;
  cartCount?: number;
  onViewCart?: () => void;
}

interface BookingItem {
  id: string;
  name: string;
  type: 'lab' | 'equipment';
  date?: string;
  time?: string;
  price: number;
}

interface Lab {
  id: string;
  name: string;
  description: string;
  capacity: number;
  equipment: string[];
  price: number;
  image: string;
}

const LabBookingSection: React.FC<LabBookingSectionProps> = ({ 
  darkMode = false, 
  onAddToCart,
  cartCount = 0,
  onViewCart 
}) => {
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);

  const labs: Lab[] = [
    {
      id: 'lab-1',
      name: 'Electronics Lab',
      description: 'Fully equipped electronics laboratory with oscilloscopes, function generators, and PCB fabrication facilities.',
      capacity: 20,
      equipment: ['Oscilloscopes', 'Function Generators', 'PCB Fabrication', 'Soldering Stations'],
      price: 500,
      image: '/api/placeholder/300/200'
    },
    {
      id: 'lab-2',
      name: 'Mechanical Lab',
      description: 'Advanced mechanical engineering lab with 3D printers, CNC machines, and precision measurement tools.',
      capacity: 15,
      equipment: ['3D Printers', 'CNC Machines', 'Lathe Machines', 'Measurement Tools'],
      price: 750,
      image: '/api/placeholder/300/200'
    },
    {
      id: 'lab-3',
      name: 'Computer Science Lab',
      description: 'High-performance computing lab with latest hardware and software development tools.',
      capacity: 30,
      equipment: ['High-end Workstations', 'GPU Clusters', 'VR Equipment', 'Development Tools'],
      price: 400,
      image: '/api/placeholder/300/200'
    },
    {
      id: 'lab-4',
      name: 'Chemistry Lab',
      description: 'Well-ventilated chemistry laboratory with fume hoods and analytical instruments.',
      capacity: 25,
      equipment: ['Fume Hoods', 'Analytical Balance', 'Spectrophotometer', 'pH Meters'],
      price: 600,
      image: '/api/placeholder/300/200'
    },
    {
      id: 'lab-5',
      name: 'Biotech Lab',
      description: 'Sterile biotechnology laboratory with cell culture facilities and microscopy equipment.',
      capacity: 12,
      equipment: ['Biosafety Cabinets', 'Incubators', 'Microscopes', 'Centrifuges'],
      price: 800,
      image: '/api/placeholder/300/200'
    },
    {
      id: 'lab-6',
      name: 'Materials Testing Lab',
      description: 'Materials characterization lab with testing machines and analysis equipment.',
      capacity: 18,
      equipment: ['Universal Testing Machine', 'Hardness Testers', 'XRD', 'SEM'],
      price: 900,
      image: '/api/placeholder/300/200'
    }
  ];

  const handleViewMore = (lab: Lab) => {
    setSelectedLab(lab);
    setShowBookingModal(true);
  };

  const handleAddToCart = () => {
    if (selectedLab && bookingDate && bookingTime && onAddToCart) {
      const bookingItem: BookingItem = {
        id: `${selectedLab.id}-${Date.now()}`,
        name: selectedLab.name,
        type: 'lab',
        date: bookingDate,
        time: bookingTime,
        price: selectedLab.price
      };
      onAddToCart(bookingItem);
      setShowBookingModal(false);
      setBookingDate('');
      setBookingTime('');
      setSelectedLab(null);
    }
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  return (
    <section className={`w-full py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Lab Booking
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Book state-of-the-art laboratory facilities for your research and development needs
          </p>
        </div>

        {/* Labs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labs.map((lab) => (
            <div
              key={lab.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Lab Image */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-6xl font-bold opacity-20">
                  {lab.name.charAt(0)}
                </div>
              </div>

              {/* Lab Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{lab.name}</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {lab.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">Capacity:</span>
                    <span>{lab.capacity} persons</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="font-semibold mr-2">Price:</span>
                    <span className="text-green-600 font-bold">₹{lab.price}/hour</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Available Equipment:</h4>
                  <div className="flex flex-wrap gap-1">
                    {lab.equipment.slice(0, 3).map((equipment, index) => (
                      <span
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full ${
                          darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {equipment}
                      </span>
                    ))}
                    {lab.equipment.length > 3 && (
                      <span className="text-xs text-blue-500">+{lab.equipment.length - 3} more</span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleViewMore(lab)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  View More & Book
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Modal */}
        {showBookingModal && selectedLab && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`max-w-2xl w-full rounded-xl p-6 max-h-[90vh] overflow-y-auto ${
              darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-900'
            }`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-700">{selectedLab.name}</h3>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-6">
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {selectedLab.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="font-semibold">Capacity:</span> {selectedLab.capacity} persons
                  </div>
                  <div>
                    <span className="font-semibold">Price:</span> 
                    <span className="text-green-600 font-bold ml-1">₹{selectedLab.price}/hour</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Available Equipment:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedLab.equipment.map((equipment, index) => (
                      <div
                        key={index}
                        className={`text-sm px-3 py-2 rounded-lg ${
                          darkMode ? 'bg-slate-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {equipment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full p-3 rounded-lg border ${
                      darkMode 
                        ? 'bg-slate-700 border-slate-600 text-white' 
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    Select Time Slot
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setBookingTime(time)}
                        className={`p-2 rounded-lg border text-sm transition-colors ${
                          bookingTime === time
                            ? 'bg-blue-600 text-white border-blue-600'
                            : darkMode
                            ? 'bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600'
                            : 'bg-white border-gray-300 text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!bookingDate || !bookingTime}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    bookingDate && bookingTime
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add to Cart - ₹{selectedLab.price}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={onViewCart}
        className={`fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
          darkMode 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="m1 1 4 4.5 5.5 11h8.5a2 2 0 0 0 2-1.8L21 8H7"></path>
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
            {cartCount}
          </span>
        )}
      </button>
    </section>
  );
};

export default LabBookingSection;