import React, { useState } from 'react';

interface BookingSectionProps {
  darkMode?: boolean;
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

interface Equipment {
  id: string;
  name: string;
  description: string;
  specifications: string[];
  price: number;
  available: number;
  category: string;
  image: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({ 
  darkMode = false
}) => {
  const [activeTab, setActiveTab] = useState<'lab' | 'equipment'>('lab');
  const [showAll, setShowAll] = useState(false);
  const [selectedLab, setSelectedLab] = useState<Lab | null>(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

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

  const equipment: Equipment[] = [
    {
      id: 'eq-1',
      name: 'Digital Oscilloscope',
      description: 'High-precision digital oscilloscope with 4 channels and 100MHz bandwidth.',
      specifications: ['4 Channels', '100MHz Bandwidth', 'Digital Storage', 'USB Connectivity'],
      price: 200,
      available: 5,
      category: 'Electronics',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'eq-2',
      name: '3D Printer (FDM)',
      description: 'Professional FDM 3D printer with large build volume and high precision.',
      specifications: ['300x300x400mm Build Volume', 'PLA/ABS/PETG Compatible', '0.1mm Layer Height', 'Heated Bed'],
      price: 150,
      available: 3,
      category: 'Manufacturing',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'eq-3',
      name: 'Analytical Balance',
      description: 'High-precision analytical balance for accurate measurements.',
      specifications: ['0.1mg Precision', '220g Capacity', 'Internal Calibration', 'Draft Shield'],
      price: 100,
      available: 4,
      category: 'Laboratory',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'eq-4',
      name: 'CNC Milling Machine',
      description: 'Computer-controlled milling machine for precision machining operations.',
      specifications: ['3-Axis Control', 'Spindle Speed: 24,000 RPM', 'Tool Changer', 'Coolant System'],
      price: 500,
      available: 2,
      category: 'Manufacturing',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'eq-5',
      name: 'Spectrophotometer',
      description: 'UV-Visible spectrophotometer for chemical analysis and research.',
      specifications: ['190-1100nm Range', 'Double Beam', 'PC Software', 'Auto Cell Changer'],
      price: 250,
      available: 3,
      category: 'Analytics',
      image: '/api/placeholder/300/200'
    },
    {
      id: 'eq-6',
      name: 'Microscope (Compound)',
      description: 'Professional compound microscope with digital imaging capabilities.',
      specifications: ['1000x Magnification', 'LED Illumination', 'Digital Camera', 'Image Software'],
      price: 120,
      available: 6,
      category: 'Laboratory',
      image: '/api/placeholder/300/200'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const categoryColors = {
    'Electronics': 'from-blue-500 to-blue-600',
    'Manufacturing': 'from-green-500 to-green-600',
    'Laboratory': 'from-purple-500 to-purple-600',
    'Analytics': 'from-orange-500 to-orange-600'
  };

  // Lab booking functions
  const handleViewMore = (lab: Lab) => {
    setSelectedLab(lab);
    setShowBookingModal(true);
  };

  const handleLabAddToCart = () => {
    if (selectedLab && bookingDate && bookingTime) {
      // Booking logic can be implemented here
      alert(`Lab booked: ${selectedLab.name} on ${bookingDate} at ${bookingTime}`);
      setShowBookingModal(false);
      setBookingDate('');
      setBookingTime('');
      setSelectedLab(null);
    }
  };

  // Equipment booking functions
  const handleQuantityChange = (equipmentId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [equipmentId]: Math.max(0, Math.min(quantity, equipment.find(eq => eq.id === equipmentId)?.available || 0))
    }));
  };

  const handleEquipmentAddToCart = (equipmentItem: Equipment) => {
    const quantity = quantities[equipmentItem.id] || 1;
    if (quantity > 0) {
      // Equipment booking logic can be implemented here
      alert(`Equipment booked: ${equipmentItem.name} - Quantity: ${quantity}`);
      setQuantities(prev => ({ ...prev, [equipmentItem.id]: 0 }));
    }
  };

  const currentItems = activeTab === 'lab' ? labs : equipment;
  const visibleItems = showAll ? currentItems : currentItems.slice(0, 2);
  const remainingCount = currentItems.length - 2;

  return (
    <section className={`w-full py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Booking Center
          </h2>
          <p className="text-lg text-black dark:text-black">
            Book laboratories and equipment for your research and development needs
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-8">
          <div className={`inline-flex rounded-xl p-1 ${
            darkMode ? 'bg-slate-800' : 'bg-white'
          } shadow-lg`}>
            <button
              onClick={() => {
                setActiveTab('lab');
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'lab'
                  ? 'bg-blue-600 text-white shadow-md'
                  : darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-2">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
              Lab Booking
            </button>
            <button
              onClick={() => {
                setActiveTab('equipment');
                setShowAll(false);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'equipment'
                  ? 'bg-blue-600 text-white shadow-md'
                  : darkMode
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="inline mr-2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              Equipment Booking
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Visible Items */}
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Item Image */}
              <div className={`h-48 bg-gradient-to-br ${
                activeTab === 'lab' 
                  ? 'from-blue-500 to-purple-600' 
                  : categoryColors[(item as Equipment).category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'
              } flex items-center justify-center relative`}>
                <div className="text-white text-6xl font-bold opacity-20">
                  {item.name.charAt(0)}
                </div>
                {activeTab === 'equipment' && (
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'
                    }`}>
                      {(item as Equipment).category}
                    </span>
                  </div>
                )}
              </div>

              {/* Item Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{item.name}</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {activeTab === 'lab' ? (
                    <>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold mr-2">Capacity:</span>
                        <span>{(item as Lab).capacity} persons</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="font-semibold mr-2">Price:</span>
                        <span className="text-green-600 font-bold">₹{item.price}/hour</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">Price:</span>
                        <span className="text-green-600 font-bold">₹{item.price}/day</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-semibold">Available:</span>
                        <span className={(item as Equipment).available > 0 ? 'text-green-600' : 'text-red-500'}>
                          {(item as Equipment).available} units
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {activeTab === 'lab' ? (
                  <button
                    onClick={() => handleViewMore(item as Lab)}
                    className={`w-full py-2 px-4 rounded-lg border-2 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      darkMode 
                        ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900' 
                        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                    View More 
                  </button>
                ) : (
                  <>
                    {/* Quantity Selector for Equipment */}
                    <div className="mb-4">
                      <label className="block text-sm font-semibold mb-2">Quantity:</label>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 1) - 1)}
                          disabled={!quantities[item.id] || quantities[item.id] <= 0}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${
                            (!quantities[item.id] || quantities[item.id] <= 0)
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : darkMode
                              ? 'bg-slate-600 hover:bg-slate-500 text-white'
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                          }`}
                        >
                          -
                        </button>
                        <span className="w-12 text-center font-semibold">
                          {quantities[item.id] || 0}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, (quantities[item.id] || 0) + 1)}
                          disabled={quantities[item.id] >= (item as Equipment).available}
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${
                            quantities[item.id] >= (item as Equipment).available
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : darkMode
                              ? 'bg-slate-600 hover:bg-slate-500 text-white'
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                          }`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      onClick={() => handleEquipmentAddToCart(item as Equipment)}
                      disabled={!quantities[item.id] || quantities[item.id] === 0 || (item as Equipment).available === 0}
                      className={`w-full py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                        quantities[item.id] && quantities[item.id] > 0 && (item as Equipment).available > 0
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4m-6 0V9a3 3 0 0 1 6 0v2m-6 0h6"></path>
                      </svg>
                      Book Now
                      {quantities[item.id] > 0 && (
                        <span>- ₹{item.price * quantities[item.id]}</span>
                      )}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* View More Card */}
          {!showAll && remainingCount > 0 && (
            <div
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
              }`}
            >
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mx-auto mb-2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <div className="text-2xl font-bold">+{remainingCount}</div>
                  <div className="text-sm">more items</div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2 text-blue-700">View More</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Click to see all {activeTab === 'lab' ? 'laboratories' : 'equipment'} available for booking
                </p>
                
                <button
                  onClick={() => setShowAll(true)}
                  className={`w-full py-2 px-4 rounded-lg border-2 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    darkMode 
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900' 
                      : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  View All Items
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Show Less Button */}
        {showAll && remainingCount > 0 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(false)}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                darkMode 
                  ? 'bg-slate-700 hover:bg-slate-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              Show Less
            </button>
          </div>
        )}

        {/* Lab Booking Modal */}
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
                  onClick={handleLabAddToCart}
                  disabled={!bookingDate || !bookingTime}
                  className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    bookingDate && bookingTime
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-4m-6 0V9a3 3 0 0 1 6 0v2m-6 0h6"></path>
                  </svg>
                  Book Now - ₹{selectedLab.price}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>


    </section>
  );
};

export default BookingSection;