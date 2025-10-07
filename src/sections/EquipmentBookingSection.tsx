import React, { useState } from 'react';

interface EquipmentBookingSectionProps {
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
  quantity?: number;
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

const EquipmentBookingSection: React.FC<EquipmentBookingSectionProps> = ({ 
  darkMode = false, 
  onAddToCart,
  cartCount = 0,
  onViewCart 
}) => {
  const [quantities, setQuantities] = useState<{[key: string]: number}>({});

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

  const handleQuantityChange = (equipmentId: string, quantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [equipmentId]: Math.max(0, Math.min(quantity, equipment.find(eq => eq.id === equipmentId)?.available || 0))
    }));
  };

  const handleAddToCart = (equipmentItem: Equipment) => {
    const quantity = quantities[equipmentItem.id] || 1;
    if (onAddToCart && quantity > 0) {
      const bookingItem: BookingItem = {
        id: `${equipmentItem.id}-${Date.now()}`,
        name: equipmentItem.name,
        type: 'equipment',
        price: equipmentItem.price * quantity,
        quantity: quantity
      };
      onAddToCart(bookingItem);
      setQuantities(prev => ({ ...prev, [equipmentItem.id]: 0 }));
    }
  };

  const categoryColors = {
    'Electronics': 'from-blue-500 to-blue-600',
    'Manufacturing': 'from-green-500 to-green-600',
    'Laboratory': 'from-purple-500 to-purple-600',
    'Analytics': 'from-orange-500 to-orange-600'
  };

  return (
    <section className={`w-full py-16 px-4 md:px-8 lg:px-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-800 text-gray-100' : 'bg-white text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Equipment Booking
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Rent professional-grade equipment for your projects and research
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipment.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                darkMode ? 'bg-slate-700 border border-slate-600' : 'bg-white border border-gray-200'
              }`}
            >
              {/* Equipment Image */}
              <div className={`h-48 bg-gradient-to-br ${categoryColors[item.category as keyof typeof categoryColors] || 'from-gray-500 to-gray-600'} flex items-center justify-center relative`}>
                <div className="text-white text-6xl font-bold opacity-20">
                  {item.name.charAt(0)}
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    darkMode ? 'bg-slate-800 text-white' : 'bg-white text-gray-800'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Equipment Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-700">{item.name}</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">Price:</span>
                    <span className="text-green-600 font-bold">₹{item.price}/day</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">Available:</span>
                    <span className={item.available > 0 ? 'text-green-600' : 'text-red-500'}>
                      {item.available} units
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Specifications:</h4>
                  <div className="space-y-1">
                    {item.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className={`text-xs px-2 py-1 rounded ${
                          darkMode ? 'bg-slate-600 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        • {spec}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
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
                      disabled={quantities[item.id] >= item.available}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${
                        quantities[item.id] >= item.available
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
                  onClick={() => handleAddToCart(item)}
                  disabled={!quantities[item.id] || quantities[item.id] === 0 || item.available === 0}
                  className={`w-full py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors ${
                    quantities[item.id] && quantities[item.id] > 0 && item.available > 0
                      ? 'bg-green-600 hover:bg-green-700 text-white'
                      : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                  }`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Add to Cart
                  {quantities[item.id] > 0 && (
                    <span>- ₹{item.price * quantities[item.id]}</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
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

export default EquipmentBookingSection;